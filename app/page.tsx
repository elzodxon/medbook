'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Phone, 
  MessageCircle, 
  Calendar, 
  Clock, 
  Users, 
  Shield, 
  Star,
  ArrowRight,
  Play,
  MapPin,
  Award,
  User,
  Heart
} from 'lucide-react'

export default function Home() {
  const [selectedOption, setSelectedOption] = useState<'voice' | 'telegram' | null>(null)

  const features = [
    {
      icon: Phone,
      title: 'AI Voice Agent',
      description: 'Book appointments through natural voice conversations with our intelligent AI assistant.'
    },
    {
      icon: MessageCircle,
      title: 'Telegram Bot',
      description: 'Quick and easy booking through our Telegram bot - available 24/7.'
    },
    {
      icon: Calendar,
      title: 'Instant Booking',
      description: 'Get confirmed appointments within minutes, no waiting or callbacks needed.'
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Book appointments anytime, day or night, with our always-on platform.'
    },
    {
      icon: Users,
      title: 'Multiple Centers',
      description: 'Access to hundreds of medical centers and specialists in your area.'
    },
    {
      icon: Shield,
      title: 'Secure & Private',
      description: 'Your health information is protected with enterprise-grade security.'
    }
  ]

  const stats = [
    { number: '500+', label: 'Medical Centers' },
    { number: '10K+', label: 'Happy Patients' },
    { number: '24/7', label: 'Availability' },
    { number: '98%', label: 'Satisfaction Rate' }
  ]

  const topClinics = [
    {
      id: 1,
      name: 'MedCare Plus',
      rating: 4.9,
      reviews: 1247,
      location: 'Downtown Medical District',
      specialties: ['Cardiology', 'Neurology', 'Orthopedics'],
      image: '/api/placeholder/300/200',
      verified: true,
      waitTime: '15 min'
    },
    {
      id: 2,
      name: 'HealthFirst Clinic',
      rating: 4.8,
      reviews: 892,
      location: 'Westside Medical Center',
      specialties: ['Dermatology', 'Pediatrics', 'Internal Medicine'],
      image: '/api/placeholder/300/200',
      verified: true,
      waitTime: '20 min'
    },
    {
      id: 3,
      name: 'Advanced Care Medical',
      rating: 4.7,
      reviews: 1563,
      location: 'North Medical Plaza',
      specialties: ['Oncology', 'Radiology', 'Surgery'],
      image: '/api/placeholder/300/200',
      verified: true,
      waitTime: '25 min'
    },
    {
      id: 4,
      name: 'Family Health Center',
      rating: 4.6,
      reviews: 734,
      location: 'Eastside Community',
      specialties: ['Family Medicine', 'Women\'s Health', 'Mental Health'],
      image: '/api/placeholder/300/200',
      verified: true,
      waitTime: '18 min'
    }
  ]

  const topDoctors = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      specialty: 'Cardiologist',
      rating: 4.9,
      reviews: 342,
      experience: '15 years',
      clinic: 'MedCare Plus',
      image: '/api/placeholder/150/150',
      verified: true,
      languages: ['English', 'Spanish'],
      availability: 'Today'
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      specialty: 'Neurologist',
      rating: 4.8,
      reviews: 287,
      experience: '12 years',
      clinic: 'HealthFirst Clinic',
      image: '/api/placeholder/150/150',
      verified: true,
      languages: ['English', 'Mandarin'],
      availability: 'Tomorrow'
    },
    {
      id: 3,
      name: 'Dr. Emily Rodriguez',
      specialty: 'Dermatologist',
      rating: 4.7,
      reviews: 456,
      experience: '18 years',
      clinic: 'Advanced Care Medical',
      image: '/api/placeholder/150/150',
      verified: true,
      languages: ['English', 'Spanish'],
      availability: 'Today'
    },
    {
      id: 4,
      name: 'Dr. James Wilson',
      specialty: 'Orthopedic Surgeon',
      rating: 4.6,
      reviews: 198,
      experience: '20 years',
      clinic: 'Family Health Center',
      image: '/api/placeholder/150/150',
      verified: true,
      languages: ['English'],
      availability: 'This Week'
    },
    {
      id: 5,
      name: 'Dr. Lisa Park',
      specialty: 'Pediatrician',
      rating: 4.9,
      reviews: 523,
      experience: '14 years',
      clinic: 'MedCare Plus',
      image: '/api/placeholder/150/150',
      verified: true,
      languages: ['English', 'Korean'],
      availability: 'Today'
    },
    {
      id: 6,
      name: 'Dr. Robert Thompson',
      specialty: 'Psychiatrist',
      rating: 4.5,
      reviews: 167,
      experience: '16 years',
      clinic: 'HealthFirst Clinic',
      image: '/api/placeholder/150/150',
      verified: true,
      languages: ['English'],
      availability: 'Tomorrow'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <span className="text-xl font-bold text-gray-900">MedBook</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
            <a href="#centers" className="text-gray-600 hover:text-gray-900 transition-colors">Centers</a>
            <a href="#doctors" className="text-gray-600 hover:text-gray-900 transition-colors">Doctors</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">How it Works</a>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Book Your Doctor
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600"> Instantly</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            Connect with medical centers through our AI voice agent or Telegram bot. 
            Book appointments in seconds, not hours.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <button 
              onClick={() => setSelectedOption('voice')}
              className={`flex items-center space-x-2 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 ${
                selectedOption === 'voice' 
                  ? 'bg-blue-600 text-white shadow-lg scale-105' 
                  : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-300 hover:shadow-md'
              }`}
            >
              <Phone className="w-5 h-5" />
              <span>Book via Voice</span>
            </button>
            
            <button 
              onClick={() => setSelectedOption('telegram')}
              className={`flex items-center space-x-2 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 ${
                selectedOption === 'telegram' 
                  ? 'bg-green-600 text-white shadow-lg scale-105' 
                  : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-green-300 hover:shadow-md'
              }`}
            >
              <MessageCircle className="w-5 h-5" />
              <span>Book via Telegram</span>
            </button>
          </motion.div>

          {selectedOption && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-8 shadow-xl max-w-md mx-auto"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {selectedOption === 'voice' ? 'Voice Booking' : 'Telegram Booking'}
              </h3>
              <p className="text-gray-600 mb-6">
                {selectedOption === 'voice' 
                  ? 'Speak naturally with our AI assistant to book your appointment.'
                  : 'Send a message to our Telegram bot to get started instantly.'
                }
              </p>
              <button className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2">
                <span>Start Booking Now</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose MedBook?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the future of medical booking with our innovative platform
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Top Clinics Section */}
      <section id="centers" className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Top Medical Centers</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the highest-rated medical centers with verified doctors and excellent patient care
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {topClinics.map((clinic, index) => (
            <motion.div 
              key={clinic.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="h-48 bg-gradient-to-br from-blue-100 to-green-100 relative">
                <div className="absolute top-3 right-3">
                  {clinic.verified && (
                    <div className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                      <Award className="w-3 h-3" />
                      <span>Verified</span>
                    </div>
                  )}
                </div>
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-semibold text-gray-700">{clinic.waitTime}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {clinic.name}
                  </h3>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-semibold text-gray-700">{clinic.rating}</span>
                  </div>
                </div>
                
                <div className="flex items-center text-gray-600 mb-3">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{clinic.location}</span>
                </div>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {clinic.specialties.slice(0, 2).map((specialty, idx) => (
                      <span key={idx} className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">
                        {specialty}
                      </span>
                    ))}
                    {clinic.specialties.length > 2 && (
                      <span className="bg-gray-50 text-gray-600 px-2 py-1 rounded-full text-xs font-medium">
                        +{clinic.specialties.length - 2} more
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{clinic.reviews} reviews</span>
                  <button className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-lg transition-all duration-300">
                    Book Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Top Doctors Section */}
      <section id="doctors" className="container mx-auto px-6 py-20 bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Top Rated Doctors</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect with experienced specialists who are available for immediate consultation
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topDoctors.map((doctor, index) => (
            <motion.div 
              key={doctor.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 group"
            >
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-green-100 rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {doctor.name}
                    </h3>
                    {doctor.verified && (
                      <Award className="w-4 h-4 text-green-500" />
                    )}
                  </div>
                  <p className="text-blue-600 font-medium">{doctor.specialty}</p>
                  <p className="text-sm text-gray-600">{doctor.clinic}</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-semibold text-gray-700">{doctor.rating}</span>
                  </div>
                  <span className="text-sm text-gray-500">({doctor.reviews} reviews)</span>
                </div>
                <div className="bg-green-50 text-green-700 px-2 py-1 rounded-full text-xs font-semibold">
                  {doctor.availability}
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                  <span>Experience: {doctor.experience}</span>
                  <span>Languages: {doctor.languages.join(', ')}</span>
                </div>
              </div>
              
              <button className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2">
                <span>Book Appointment</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300">
            View All Doctors
          </button>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600">Simple steps to book your appointment</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">1</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Choose Your Method</h3>
            <p className="text-gray-600">Pick between voice call or Telegram bot to start your booking</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-green-600">2</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Get Matched</h3>
            <p className="text-gray-600">Our AI finds the best available doctor for your needs</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-purple-600">3</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Confirm & Go</h3>
            <p className="text-gray-600">Receive instant confirmation and attend your appointment</p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl p-12 text-center text-white">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-4"
          >
            Ready to Book Your Appointment?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl mb-8 opacity-90"
          >
            Join thousands of patients who trust MedBook for their healthcare needs
          </motion.p>
          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center space-x-2 mx-auto"
          >
            <span>Start Booking Now</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <span className="text-xl font-bold">MedBook</span>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="hover:text-blue-400 transition-colors">Privacy</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Terms</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Support</a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            © 2024 MedBook. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
} 