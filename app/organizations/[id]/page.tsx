'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Phone, 
  MessageCircle, 
  Calendar, 
  Clock, 
  MapPin, 
  Star,
  ArrowRight,
  Award,
  User,
  Heart,
  CheckCircle,
  Shield,
  Wifi,
  Car,
  CreditCard,
  FileText,
  MessageSquare,
  PhoneCall
} from 'lucide-react'
import BackButton from '@/app/components/BackButton'

export default function OrganizationPage({ params }: { params: { id: string } }) {
  const [selectedTab, setSelectedTab] = useState<'overview' | 'doctors' | 'reviews' | 'services'>('overview')
  const [selectedDoctor, setSelectedDoctor] = useState<number | null>(null)

  // Mock data - in real app this would come from API
  const organization = {
    id: params.id,
    name: 'MedCare Plus',
    rating: 4.9,
    reviews: 1247,
    location: 'Downtown Medical District',
    address: '123 Medical Plaza, Suite 200, Downtown, NY 10001',
    phone: '+1 (555) 123-4567',
    email: 'info@medcareplus.com',
    website: 'https://medcareplus.com',
    specialties: ['Cardiology', 'Neurology', 'Orthopedics', 'Dermatology', 'Internal Medicine'],
    description: 'MedCare Plus is a leading multi-specialty medical center providing comprehensive healthcare services with state-of-the-art facilities and experienced medical professionals.',
    hours: {
      monday: '8:00 AM - 8:00 PM',
      tuesday: '8:00 AM - 8:00 PM',
      wednesday: '8:00 AM - 8:00 PM',
      thursday: '8:00 AM - 8:00 PM',
      friday: '8:00 AM - 6:00 PM',
      saturday: '9:00 AM - 5:00 PM',
      sunday: 'Closed'
    },
    amenities: [
      { name: 'Free WiFi', icon: Wifi },
      { name: 'Parking Available', icon: Car },
      { name: 'Insurance Accepted', icon: CreditCard },
      { name: 'Online Records', icon: FileText }
    ],
    verified: true,
    waitTime: '15 min',
    image: '/api/placeholder/800/400'
  }

  const doctors = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      specialty: 'Cardiologist',
      rating: 4.9,
      reviews: 342,
      experience: '15 years',
      image: '/api/placeholder/150/150',
      verified: true,
      languages: ['English', 'Spanish'],
      availability: 'Today',
      education: 'Harvard Medical School',
      certifications: ['Board Certified Cardiologist', 'Fellow of American College of Cardiology'],
      about: 'Dr. Johnson specializes in interventional cardiology and has performed over 1000 cardiac procedures.'
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      specialty: 'Neurologist',
      rating: 4.8,
      reviews: 287,
      experience: '12 years',
      image: '/api/placeholder/150/150',
      verified: true,
      languages: ['English', 'Mandarin'],
      availability: 'Tomorrow',
      education: 'Stanford Medical School',
      certifications: ['Board Certified Neurologist', 'Member of American Academy of Neurology'],
      about: 'Dr. Chen focuses on neurological disorders and has extensive experience in stroke treatment.'
    },
    {
      id: 3,
      name: 'Dr. Emily Rodriguez',
      specialty: 'Dermatologist',
      rating: 4.7,
      reviews: 456,
      experience: '18 years',
      image: '/api/placeholder/150/150',
      verified: true,
      languages: ['English', 'Spanish'],
      availability: 'Today',
      education: 'Yale Medical School',
      certifications: ['Board Certified Dermatologist', 'Fellow of American Academy of Dermatology'],
      about: 'Dr. Rodriguez specializes in cosmetic dermatology and skin cancer treatment.'
    }
  ]

  const reviews = [
    {
      id: 1,
      name: 'Jennifer Smith',
      rating: 5,
      date: '2024-01-15',
      comment: 'Excellent care and very professional staff. Dr. Johnson was thorough and caring.',
      verified: true
    },
    {
      id: 2,
      name: 'Robert Davis',
      rating: 4,
      date: '2024-01-10',
      comment: 'Great facility with modern equipment. Wait time was reasonable.',
      verified: true
    },
    {
      id: 3,
      name: 'Maria Garcia',
      rating: 5,
      date: '2024-01-08',
      comment: 'Very clean and organized. The doctors are knowledgeable and friendly.',
      verified: true
    }
  ]

  const services = [
    {
      name: 'Cardiology',
      description: 'Comprehensive cardiac care including diagnostics, treatment, and prevention.',
      price: '$200-500',
      duration: '30-60 min'
    },
    {
      name: 'Neurology',
      description: 'Diagnosis and treatment of neurological disorders and conditions.',
      price: '$250-600',
      duration: '45-90 min'
    },
    {
      name: 'Orthopedics',
      description: 'Treatment of musculoskeletal injuries and conditions.',
      price: '$180-400',
      duration: '30-60 min'
    },
    {
      name: 'Dermatology',
      description: 'Skin care, cosmetic procedures, and dermatological treatments.',
      price: '$150-350',
      duration: '20-45 min'
    }
  ]

  const tabs = [
    { id: 'overview', label: 'Overview', icon: FileText },
    { id: 'doctors', label: 'Doctors', icon: User },
    { id: 'reviews', label: 'Reviews', icon: Star },
    { id: 'services', label: 'Services', icon: Heart }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <BackButton />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{organization.name}</h1>
                <div className="flex items-center space-x-4 mt-1">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="font-semibold text-gray-900">{organization.rating}</span>
                    <span className="text-gray-600">({organization.reviews} reviews)</span>
                  </div>
                  {organization.verified && (
                    <div className="flex items-center space-x-1 bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
                      <Award className="w-3 h-3" />
                      <span>Verified</span>
                    </div>
                  )}
                  <div className="flex items-center space-x-1 text-green-600">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-medium">{organization.waitTime} wait</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </button>
              <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold hover:border-blue-300 hover:text-blue-600 transition-colors flex items-center space-x-2">
                <MessageSquare className="w-4 h-4" />
                <span>Message</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-white">
        <div className="container mx-auto px-6 py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Info */}
            <div className="lg:col-span-2">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{organization.name}</h1>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center space-x-1">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="font-semibold">{organization.rating}</span>
                      <span className="text-gray-600">({organization.reviews} reviews)</span>
                    </div>
                    {organization.verified && (
                      <div className="flex items-center space-x-1 bg-green-100 text-green-700 px-2 py-1 rounded-full text-sm">
                        <Award className="w-4 h-4" />
                        <span>Verified</span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{organization.address}</span>
                  </div>
                  <p className="text-gray-700 mb-6">{organization.description}</p>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-wrap gap-4 mb-6">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>Book Appointment</span>
                </button>
                <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-blue-300 hover:text-blue-600 transition-colors flex items-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>Call Now</span>
                </button>
                <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-green-300 hover:text-green-600 transition-colors flex items-center space-x-2">
                  <MessageSquare className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Quick Info</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Wait Time</span>
                    <span className="font-semibold text-green-600">{organization.waitTime}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Phone</span>
                    <span className="font-semibold">{organization.phone}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Email</span>
                    <span className="font-semibold">{organization.email}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Website</span>
                    <a href={organization.website} className="text-blue-600 hover:underline">{organization.website}</a>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="font-semibold mb-3">Hours</h4>
                  <div className="space-y-2 text-sm">
                    {Object.entries(organization.hours).map(([day, hours]) => (
                      <div key={day} className="flex justify-between">
                        <span className="capitalize">{day}</span>
                        <span>{hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-6">
          <div className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id as any)}
                className={`flex items-center space-x-2 py-4 border-b-2 font-medium transition-colors ${
                  selectedTab === tab.id
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="container mx-auto px-6 py-8">
        {selectedTab === 'overview' && (
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">About {organization.name}</h3>
              <p className="text-gray-700 mb-6">{organization.description}</p>
              
              <h4 className="text-lg font-semibold mb-4">Specialties</h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {organization.specialties.map((specialty, index) => (
                  <span key={index} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                    {specialty}
                  </span>
                ))}
              </div>

              <h4 className="text-lg font-semibold mb-4">Amenities</h4>
              <div className="grid grid-cols-2 gap-4">
                {organization.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <amenity.icon className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">{amenity.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Location</h3>
              <div className="bg-gray-200 h-64 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500">Map placeholder</span>
              </div>
              <p className="text-gray-700">{organization.address}</p>
            </div>
          </div>
        )}

        {selectedTab === 'doctors' && (
          <div>
            <h3 className="text-2xl font-bold mb-6">Our Doctors</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {doctors.map((doctor, index) => (
                <motion.div 
                  key={doctor.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-green-100 rounded-full flex items-center justify-center">
                      <User className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="text-lg font-semibold text-gray-900">{doctor.name}</h4>
                        {doctor.verified && <Award className="w-4 h-4 text-green-500" />}
                      </div>
                      <p className="text-blue-600 font-medium">{doctor.specialty}</p>
                      <p className="text-sm text-gray-600">{doctor.experience} experience</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-semibold">{doctor.rating}</span>
                      </div>
                      <span className="text-sm text-gray-500">({doctor.reviews} reviews)</span>
                    </div>
                    <div className="bg-green-50 text-green-700 px-2 py-1 rounded-full text-xs font-semibold">
                      {doctor.availability}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-2">{doctor.about}</p>
                    <div className="flex flex-wrap gap-1">
                      {doctor.languages.map((language, idx) => (
                        <span key={idx} className="bg-gray-50 text-gray-600 px-2 py-1 rounded-full text-xs">
                          {language}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => setSelectedDoctor(doctor.id)}
                    className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>Book with Dr. {doctor.name.split(' ')[1]}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {selectedTab === 'reviews' && (
          <div>
            <h3 className="text-2xl font-bold mb-6">Patient Reviews</h3>
            <div className="space-y-6">
              {reviews.map((review, index) => (
                <motion.div 
                  key={review.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-green-100 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{review.name}</h4>
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center space-x-1">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                            ))}
                          </div>
                          {review.verified && <CheckCircle className="w-4 h-4 text-green-500" />}
                        </div>
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                  <p className="text-gray-700">{review.comment}</p>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {selectedTab === 'services' && (
          <div>
            <h3 className="text-2xl font-bold mb-6">Services & Pricing</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-6"
                >
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{service.name}</h4>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span>Duration: {service.duration}</span>
                      <span>Price: {service.price}</span>
                    </div>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors">
                      Book Service
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 