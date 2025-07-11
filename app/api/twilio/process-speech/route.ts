import { NextRequest, NextResponse } from 'next/server'
import twilio from 'twilio'
import { OpenAI } from 'openai'
import type { ChatCompletionMessageParam } from 'openai/resources/chat/index'

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

const SYSTEM_PROMPT = `You are MedBook, an AI voice assistant for a medical booking platform. You help users book medical appointments, find doctors, locate clinics, check availability, and answer questions about the platform. Respond conversationally, ask clarifying questions if needed, and guide the user through the booking process. Keep responses concise and friendly. If the user says goodbye, end the conversation politely.`

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const speechResult = formData.get('SpeechResult') as string
    const confidence = formData.get('Confidence') as string
    const callSid = formData.get('CallSid') as string

    console.log(`Speech received: "${speechResult}" (confidence: ${confidence})`)

    // Compose OpenAI chat prompt
    const messages: ChatCompletionMessageParam[] = [
      { role: 'system', content: SYSTEM_PROMPT },
      { role: 'user', content: speechResult }
    ]

    // Call OpenAI
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages,
      max_tokens: 120,
      temperature: 0.6
    })
    const aiResponse = completion.choices[0]?.message?.content?.trim() || 'Sorry, I did not understand. Could you please repeat?'

    const twiml = new twilio.twiml.VoiceResponse()
    twiml.say({
      voice: 'alice',
      language: 'en-US'
    }, aiResponse)

    // If user says goodbye, end the call
    if (/goodbye|bye|thank you|thanks|that\'s all|no/i.test(speechResult)) {
      twiml.say({ voice: 'alice', language: 'en-US' }, 'Thank you for calling MedBook. Have a great day!')
      twiml.hangup()
    } else {
      // Gather next input
      const gather = twiml.gather({
        input: ['speech'],
        timeout: 10,
        speechTimeout: 'auto',
        action: '/api/twilio/process-speech',
        method: 'POST',
        language: 'en-US'
      })
      gather.say({
        voice: 'alice',
        language: 'en-US'
      }, 'You can continue or say "goodbye" to end the call.')
      twiml.redirect('/api/twilio/fallback')
    }

    return new NextResponse(twiml.toString(), {
      headers: {
        'Content-Type': 'text/xml'
      }
    })
  } catch (error) {
    console.error('Error processing speech:', error)
    const twiml = new twilio.twiml.VoiceResponse()
    twiml.say({
      voice: 'alice',
      language: 'en-US'
    }, 'Sorry, I didn\'t catch that. Could you please repeat?')
    const gather = twiml.gather({
      input: ['speech'],
      timeout: 10,
      speechTimeout: 'auto',
      action: '/api/twilio/process-speech',
      method: 'POST',
      language: 'en-US'
    })
    return new NextResponse(twiml.toString(), {
      headers: {
        'Content-Type': 'text/xml'
      }
    })
  }
} 