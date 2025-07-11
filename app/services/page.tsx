'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Building2, 
  Users, 
  Calendar, 
  MessageCircle, 
  Phone, 
  Shield, 
  Zap,
  CheckCircle,
  Star,
  ArrowRight,
  Globe,
  BarChart3,
  Settings,
  Headphones,
  CreditCard,
  Clock,
  Award,
  Lock,
  Database,
  Smartphone
} from 'lucide-react'

export default function ServicesPage() {
  const [selectedPlan, setSelectedPlan] = useState<'starter' | 'professional' | 'enterprise'>('professional')

  const features = [
    {
      icon: Building2,
      title: 'Multi-Location Management',
      description: 'Manage multiple medical centers, clinics, and facilities from a single dashboard.'
    },
    {
      icon: Users,
      title: 'Staff Management',
      description: 'Manage doctors, nurses, and administrative staff with role-based access control.'
    },
    {
      icon: Calendar,
      title: 'Advanced Scheduling',
      description: 'Intelligent appointment scheduling with conflict detection and optimization.'
    },
    {
      icon: MessageCircle,
      title: 'AI Voice Agent',
      description: 'Natural language processing for automated appointment booking and patient support.'
    },
    {
      icon: Phone,
      title: 'Telegram Bot Integration',
      description: 'Seamless integration with Telegram for instant patient communication.'
    },
    {
      icon: Shield,
      title: 'HIPAA Compliance',
      description: 'Enterprise-grade security with full HIPAA compliance for patient data protection.'
    },
    {
      icon: Zap,
      title: 'Real-time Analytics',
      description: 'Comprehensive analytics and reporting for business intelligence and optimization.'
    },
    {
      icon: Globe,
      title: 'Multi-language Support',
      description: 'Support for multiple languages to serve diverse patient populations.'
    }
  ]

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small medical practices',
      features: [
        'Up to 5 doctors',
        'Basic appointment scheduling',
        'Patient portal',
        'Email notifications',
        'Basic reporting',
        'Email support'
      ],
      popular: false
    },
    {
      id: 'professional',
      name: 'Professional',
      price: '$599',
      period: '/month',
      description: 'Ideal for growing medical centers',
      features: [
        'Up to 25 doctors',
        'Advanced scheduling',
        'AI voice agent',
        'Telegram bot integration',
        'Multi-location support',
        'Advanced analytics',
        'Priority support',
        'Custom branding'
      ],
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large healthcare organizations',
      features: [
        'Unlimited doctors',
        'Full AI voice system',
        'Advanced integrations',
        'Custom development',
        'Dedicated support',
        'White-label solution',
        'API access',
        'On-premise option'
      ],
      popular: false
    }
  ]

  const benefits = [
    {
      icon: BarChart3,
      title: 'Increase Revenue',
      description: 'Reduce no-shows and optimize scheduling to increase practice revenue by up to 30%.'
    },
    {
      icon: Clock,
      title: 'Save Time',
      description: 'Automate routine tasks and reduce administrative overhead by 50%.'
    },
    {
      icon: Users,
      title: 'Improve Patient Experience',
      description: 'Provide 24/7 booking availability and seamless patient communication.'
    },
    {
      icon: Shield,
      title: 'Ensure Compliance',
      description: 'Built-in HIPAA compliance and security measures to protect patient data.'
    }
  ]

  const integrations = [
    { name: 'Electronic Health Records (EHR)', icon: Database },
    { name: 'Practice Management Systems', icon: Settings },
    { name: 'Payment Processors', icon: CreditCard },
    { name: 'Insurance Providers', icon: Shield },
    { name: 'Lab Systems', icon: BarChart3 },
    { name: 'Pharmacy Systems', icon: Smartphone }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Medical Booking Platform for Healthcare Organizations
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl mb-8 opacity-90"
            >
              Transform your medical practice with our comprehensive SaaS solution. 
              Streamline operations, enhance patient experience, and grow your business.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                Start Free Trial
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                Schedule Demo
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Powerful Features for Healthcare</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to modernize your medical practice and provide exceptional patient care
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Plan</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Flexible pricing options designed to grow with your practice
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div 
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-white rounded-xl shadow-lg p-8 border-2 ${
                  plan.popular ? 'border-blue-500 scale-105' : 'border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  onClick={() => setSelectedPlan(plan.id as any)}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {plan.id === 'enterprise' ? 'Contact Sales' : 'Get Started'}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose MedBook?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of healthcare organizations that trust our platform
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Seamless Integrations</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Connect with your existing healthcare systems and workflows
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {integrations.map((integration, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-100 transition-colors"
              >
                <integration.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900">{integration.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl p-12 text-center text-white">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-4"
            >
              Ready to Transform Your Practice?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl mb-8 opacity-90"
            >
              Join thousands of healthcare organizations using MedBook to streamline operations and improve patient care
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center space-x-2">
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                Schedule Demo
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
} 