# Twilio AI Voice Assistant Setup Guide

This guide will help you set up the MedBook AI Voice Assistant using Twilio for handling phone calls and processing speech input.

## Prerequisites

- Node.js 18+ installed
- A Twilio account (sign up at [twilio.com](https://twilio.com))
- A domain with HTTPS (for webhook URLs)
- ngrok or similar for local development

## Installation

1. **Install Dependencies**
   ```bash
   npm install twilio
   ```

2. **Environment Variables**
   Create a `.env.local` file in your project root:
   ```env
   TWILIO_ACCOUNT_SID=your_account_sid_here
   TWILIO_AUTH_TOKEN=your_auth_token_here
   NEXT_PUBLIC_BASE_URL=https://your-domain.com
   ```

## Twilio Setup

### 1. Create Twilio Account
1. Go to [twilio.com](https://twilio.com) and create an account
2. Get your Account SID and Auth Token from the Twilio Console
3. Add them to your `.env.local` file

### 2. Purchase a Phone Number
1. In the Twilio Console, go to Phone Numbers > Manage > Buy a number
2. Purchase a phone number that supports Voice capabilities
3. Note down the phone number for later use

### 3. Configure Webhook URL
1. In the Twilio Console, go to Phone Numbers > Manage > Active numbers
2. Click on your purchased number
3. Under "Voice Configuration":
   - Set "A CALL COMES IN" to "Webhook"
   - Enter your webhook URL: `https://your-domain.com/api/twilio/voice`
   - Set HTTP method to "POST"

## Local Development

### Using ngrok
1. Install ngrok: `npm install -g ngrok`
2. Start your Next.js app: `npm run dev`
3. In another terminal, run: `ngrok http 3000`
4. Use the HTTPS URL provided by ngrok as your webhook URL

### Example ngrok URL
```
https://abc123.ngrok.io/api/twilio/voice
```

## API Endpoints

### 1. Voice Webhook (`/api/twilio/voice`)
- **Method**: POST
- **Purpose**: Handles incoming calls
- **Response**: TwiML with welcome message and speech gathering

### 2. Speech Processing (`/api/twilio/process-speech`)
- **Method**: POST
- **Purpose**: Processes user speech input
- **Features**: 
  - Appointment booking flow
  - Doctor search
  - Medical center search
  - Availability checking

### 3. Fallback Handler (`/api/twilio/fallback`)
- **Method**: POST
- **Purpose**: Handles timeouts and goodbye messages
- **Response**: Appropriate TwiML response

## AI Assistant Features

### Appointment Booking Flow
1. User says "book an appointment"
2. AI asks for specialty (cardiology, dermatology, etc.)
3. AI asks for location (city name)
4. AI asks for date (tomorrow, next week, etc.)
5. AI asks for time (morning, afternoon, evening)
6. AI confirms appointment details
7. User confirms or starts over

### Doctor Search
- User can say "find a cardiologist"
- AI responds with top-rated specialists
- AI offers to book appointments

### Medical Center Search
- User can say "find clinics in New York"
- AI responds with top-rated medical centers
- AI offers to connect user

### Availability Check
- User can ask "what's available today?"
- AI responds with available appointment slots

## Testing Commands

Once configured, try these voice commands:

| Command | Response |
|---------|----------|
| "Book an appointment" | Starts appointment booking flow |
| "Find a cardiologist" | Searches for cardiology specialists |
| "Find clinics in New York" | Searches for medical centers |
| "What's available tomorrow?" | Checks appointment availability |
| "Help" | Lists available options |
| "Goodbye" | Ends the call |

## Speech Recognition

The assistant uses Twilio's speech recognition with:
- **Language**: English (en-US)
- **Voice**: Alice (female)
- **Timeout**: 10 seconds
- **Input**: Speech only

## Error Handling

The assistant includes comprehensive error handling:
- Speech recognition failures
- Invalid input responses
- Timeout handling
- Graceful fallbacks

## Deployment

### Vercel Deployment
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Update webhook URL to your Vercel domain

### Environment Variables for Production
```env
TWILIO_ACCOUNT_SID=your_production_account_sid
TWILIO_AUTH_TOKEN=your_production_auth_token
NEXT_PUBLIC_BASE_URL=https://your-production-domain.com
```

## Troubleshooting

### Common Issues

1. **Webhook not receiving calls**
   - Check webhook URL is correct
   - Ensure HTTPS is enabled
   - Verify Twilio number is configured properly

2. **Speech not recognized**
   - Check microphone permissions
   - Ensure clear speech input
   - Verify language settings

3. **Appointment booking not working**
   - Check console logs for errors
   - Verify AI assistant logic
   - Test with simple commands first

### Debug Mode
Add console logs to track:
- Incoming calls
- Speech recognition results
- AI assistant responses
- Error messages

## Security Considerations

1. **Webhook Validation**
   - Implement Twilio signature validation
   - Verify request authenticity
   - Use HTTPS for all webhooks

2. **Environment Variables**
   - Never commit sensitive data
   - Use secure environment variable storage
   - Rotate tokens regularly

3. **Rate Limiting**
   - Implement rate limiting for webhooks
   - Monitor call volume
   - Set appropriate timeouts

## Cost Considerations

- **Twilio Phone Number**: ~$1/month
- **Voice Calls**: ~$0.01-0.02/minute
- **Speech Recognition**: Included in voice pricing
- **Webhook Processing**: Free (your server costs)

## Next Steps

1. **Enhance AI Logic**
   - Add more medical specialties
   - Implement real appointment scheduling
   - Add user authentication

2. **Integration Features**
   - Connect to real medical databases
   - Add SMS confirmations
   - Implement calendar integration

3. **Advanced Features**
   - Multi-language support
   - Voice biometrics
   - Appointment reminders

## Support

For issues or questions:
1. Check Twilio documentation
2. Review console logs
3. Test with ngrok for local development
4. Verify webhook configuration

---

**Note**: This is a demo implementation. For production use, add proper authentication, database integration, and security measures. 