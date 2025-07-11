import { NextRequest, NextResponse } from 'next/server'
import twilio from 'twilio'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const callSid = formData.get('CallSid') as string
    const from = formData.get('From') as string
    const to = formData.get('To') as string
    const direction = formData.get('Direction') as string

    console.log(`Incoming call from ${from} to ${to}`)

    // Create TwiML response
    const twiml = new twilio.twiml.VoiceResponse()

    // Welcome message
    twiml.say({
      voice: 'alice',
      language: 'en-US'
    }, 'Welcome to MedBook AI Assistant. I can help you book medical appointments, find doctors, or answer questions about our services. How can I assist you today?')

    // Gather user input
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
    }, 'Please tell me what you need help with. For example, you can say "I need to book an appointment" or "Find me a cardiologist".')

    // If no input received, redirect to fallback
    twiml.redirect('/api/twilio/fallback')

    return new NextResponse(twiml.toString(), {
      headers: {
        'Content-Type': 'text/xml'
      }
    })
  } catch (error) {
    console.error('Error in voice webhook:', error)
    
    const twiml = new twilio.twiml.VoiceResponse()
    twiml.say({
      voice: 'alice',
      language: 'en-US'
    }, 'Sorry, there was an error processing your call. Please try again later.')
    twiml.hangup()

    return new NextResponse(twiml.toString(), {
      headers: {
        'Content-Type': 'text/xml'
      }
    })
  }
} 