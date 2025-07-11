'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Phone, 
  MessageCircle, 
  Mic, 
  Play, 
  Pause, 
  Volume2,
  Settings,
  Code,
  Copy,
  Check
} from 'lucide-react'

export default function AIAssistantPage() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [copied, setCopied] = useState(false)

  const demoConversation = [
    {
      speaker: 'AI Assistant',
      message: 'Welcome to MedBook AI Assistant. I can help you book medical appointments, find doctors, or answer questions about our services. How can I assist you today?',
      type: 'ai'
    },
    {
      speaker: 'User',
      message: 'I need to book an appointment',
      type: 'user'
    },
    {
      speaker: 'AI Assistant',
      message: 'I\'d be happy to help you book an appointment. What type of specialist do you need? For example, cardiologist, dermatologist, or general practitioner?',
      type: 'ai'
    },
    {
      speaker: 'User',
      message: 'I need a cardiologist',
      type: 'user'
    },
    {
      speaker: 'AI Assistant',
      message: 'Great! I found cardiology specialists. What\'s your preferred location? You can say a city name or "near me".',
      type: 'ai'
    },
    {
      speaker: 'User',
      message: 'New York',
      type: 'user'
    },
    {
      speaker: 'AI Assistant',
      message: 'Perfect! I found available cardiology specialists in New York. When would you like your appointment? You can say "tomorrow", "next week", or a specific date.',
      type: 'ai'
    },
    {
      speaker: 'User',
      message: 'Tomorrow',
      type: 'user'
    },
    {
      speaker: 'AI Assistant',
      message: 'Got it! For tomorrow. What time works best for you? I have morning, afternoon, and evening slots available.',
      type: 'ai'
    },
    {
      speaker: 'User',
      message: 'Morning',
      type: 'user'
    },
    {
      speaker: 'AI Assistant',
      message: 'Excellent! Let me confirm your appointment: cardiology specialist in New York on tomorrow at morning. Is this correct? Say "yes" to confirm or "no" to change anything.',
      type: 'ai'
    },
    {
      speaker: 'User',
      message: 'Yes',
      type: 'user'
    },
    {
      speaker: 'AI Assistant',
      message: 'Perfect! Your appointment has been confirmed. You\'ll receive a confirmation text message shortly. Is there anything else I can help you with?',
      type: 'ai'
    }
  ]

  const webhookUrl = `${process.env.NEXT_PUBLIC_BASE_URL || 'https://your-domain.com'}/api/twilio/voice`

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <div className="bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-6 py-12">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mic className="w-10 h-10" />
              </div>
              <h1 className="text-4xl font-bold mb-4">AI Voice Assistant</h1>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Experience our intelligent voice assistant that can book appointments, find doctors, 
                and answer medical queries through natural conversation.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Demo Conversation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Demo Conversation</h2>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                <span>{isPlaying ? 'Pause' : 'Play'} Demo</span>
              </button>
            </div>

            <div className="space-y-4 max-h-96 overflow-y-auto">
              {demoConversation.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                    message.type === 'user' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-100 text-gray-900'
                  }`}>
                    <div className="text-xs opacity-75 mb-1">{message.speaker}</div>
                    <div className="text-sm">{message.message}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Setup Instructions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Twilio Setup */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Settings className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-semibold text-gray-900">Twilio Setup</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">1. Create Twilio Account</h4>
                  <p className="text-gray-600 text-sm">
                    Sign up at <a href="https://twilio.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">twilio.com</a> and get your Account SID and Auth Token
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2">2. Buy a Phone Number</h4>
                  <p className="text-gray-600 text-sm">
                    Purchase a phone number in the Twilio Console and configure the webhook URL
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2">3. Configure Webhook</h4>
                  <p className="text-gray-600 text-sm mb-2">
                    Set the voice webhook URL to:
                  </p>
                  <div className="relative">
                    <input
                      type="text"
                      value={webhookUrl}
                      readOnly
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-sm font-mono"
                    />
                    <button
                      onClick={() => copyToClipboard(webhookUrl)}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Volume2 className="w-6 h-6 text-green-600" />
                <h3 className="text-xl font-semibold text-gray-900">AI Assistant Features</h3>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Book medical appointments</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Find doctors by specialty</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Locate medical centers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Check appointment availability</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Natural conversation flow</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Multi-step appointment booking</span>
                </div>
              </div>
            </div>

            {/* Test Instructions */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Phone className="w-6 h-6 text-purple-600" />
                <h3 className="text-xl font-semibold text-gray-900">Testing the Assistant</h3>
              </div>
              
              <div className="space-y-3">
                <p className="text-gray-600 text-sm">
                  Once configured, call your Twilio number and try these commands:
                </p>
                <div className="space-y-2">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <span className="font-medium text-gray-900">"Book an appointment"</span>
                    <p className="text-sm text-gray-600 mt-1">Start the appointment booking process</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <span className="font-medium text-gray-900">"Find a cardiologist"</span>
                    <p className="text-sm text-gray-600 mt-1">Search for specific specialists</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <span className="font-medium text-gray-900">"Find clinics in New York"</span>
                    <p className="text-sm text-gray-600 mt-1">Locate medical centers</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <span className="font-medium text-gray-900">"Help"</span>
                    <p className="text-sm text-gray-600 mt-1">Get assistance with available options</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Code Example */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 bg-white rounded-xl shadow-lg p-6"
        >
          <div className="flex items-center space-x-3 mb-4">
            <Code className="w-6 h-6 text-gray-600" />
            <h3 className="text-xl font-semibold text-gray-900">API Endpoints</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-2">Voice Webhook</h4>
              <code className="text-sm text-gray-600">POST /api/twilio/voice</code>
              <p className="text-xs text-gray-500 mt-1">Handles incoming calls</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-2">Speech Processing</h4>
              <code className="text-sm text-gray-600">POST /api/twilio/process-speech</code>
              <p className="text-xs text-gray-500 mt-1">Processes user speech input</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-2">Fallback Handler</h4>
              <code className="text-sm text-gray-600">POST /api/twilio/fallback</code>
              <p className="text-xs text-gray-500 mt-1">Handles timeouts and goodbyes</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 