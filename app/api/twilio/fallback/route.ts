import { NextRequest, NextResponse } from 'next/server'
import twilio from 'twilio'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const speechResult = formData.get('SpeechResult') as string
    const callSid = formData.get('CallSid') as string

    console.log(`Fallback triggered. Speech: "${speechResult}"`)

    const twiml = new twilio.twiml.VoiceResponse()

    // Check if user said goodbye
    if (speechResult && speechResult.toLowerCase().includes('goodbye')) {
      twiml.say({
        voice: 'alice',
        language: 'en-US'
      }, 'Thank you for calling MedBook. Have a great day and stay healthy!')
      twiml.hangup()
    } else {
      // No speech detected or timeout
      twiml.say({
        voice: 'alice',
        language: 'en-US'
      }, 'I didn\'t hear anything. You can say "book an appointment", "find a doctor", or "help" to get started. Or say "goodbye" to end the call.')
      
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
      }, 'Please tell me what you need help with.')
    }

    return new NextResponse(twiml.toString(), {
      headers: {
        'Content-Type': 'text/xml'
      }
    })
  } catch (error) {
    console.error('Error in fallback:', error)
    
    const twiml = new twilio.twiml.VoiceResponse()
    twiml.say({
      voice: 'alice',
      language: 'en-US'
    }, 'Thank you for calling MedBook. Please call back if you need assistance.')
    twiml.hangup()

    return new NextResponse(twiml.toString(), {
      headers: {
        'Content-Type': 'text/xml'
      }
    })
  }
} 