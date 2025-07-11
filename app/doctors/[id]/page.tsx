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
  GraduationCap,
  BookOpen,
  MessageSquare,
  PhoneCall,
  Mail,
  Globe
} from 'lucide-react'
import BackButton from '@/app/components/BackButton'

export default function DoctorPage({ params }: { params: { id: string } }) {
  const [selectedTab, setSelectedTab] = useState<'overview' | 'reviews' | 'availability' | 'services'>('overview')
  const [selectedDate, setSelectedDate] = useState<string>('')

  // Mock data - in real app this would come from API
  const doctor = {
    id: params.id,
    name: 'Dr. Sarah Johnson',
    specialty: 'Cardiologist',
    rating: 4.9,
    reviews: 342,
    experience: '15 years',
    clinic: 'MedCare Plus',
    clinicAddress: '123 Medical Plaza, Suite 200, Downtown, NY 10001',
    image: '/api/placeholder/300/300',
    verified: true,
    languages: ['English', 'Spanish'],
    availability: 'Today',
    education: 'Harvard Medical School',
    about: 'Dr. Sarah Johnson is a board-certified cardiologist with over 15 years of experience in interventional cardiology. She specializes in the diagnosis and treatment of cardiovascular diseases, including coronary artery disease, heart failure, and arrhythmias. Dr. Johnson has performed over 1000 cardiac procedures and is known for her compassionate approach to patient care.',
    phone: '+1 (555) 123-4567',
    email: 'dr.johnson@medcareplus.com',
    website: 'https://drjohnson.com',
    educationDetails: [
      { degree: 'MD', school: 'Harvard Medical School', year: '2008' },
      { degree: 'Residency', school: 'Massachusetts General Hospital', year: '2012' },
      { degree: 'Fellowship', school: 'Johns Hopkins Hospital', year: '2014' }
    ],
    certifications: [
      'Board Certified Cardiologist - American Board of Internal Medicine',
      'Fellow of American College of Cardiology',
      'Member of American Heart Association',
      'Certified in Advanced Cardiovascular Life Support'
    ],
    specialties: [
      'Interventional Cardiology',
      'Coronary Artery Disease',
      'Heart Failure',
      'Arrhythmias',
      'Preventive Cardiology'
    ],
    procedures: [
      'Cardiac Catheterization',
      'Angioplasty and Stenting',
      'Echocardiography',
      'Stress Testing',
      'Holter Monitoring'
    ]
  }

  const reviews = [
    {
      id: 1,
      name: 'Jennifer Smith',
      rating: 5,
      date: '2024-01-15',
      comment: 'Dr. Johnson is exceptional. She took the time to explain everything clearly and made me feel comfortable throughout the entire process. Highly recommend!',
      verified: true,
      treatment: 'Cardiac Consultation'
    },
    {
      id: 2,
      name: 'Robert Davis',
      rating: 5,
      date: '2024-01-10',
      comment: 'Very knowledgeable and professional. Dr. Johnson helped me understand my condition and treatment options. The follow-up care has been excellent.',
      verified: true,
      treatment: 'Angioplasty'
    },
    {
      id: 3,
      name: 'Maria Garcia',
      rating: 4,
      date: '2024-01-08',
      comment: 'Great doctor with excellent bedside manner. The wait time was reasonable and the staff was very helpful.',
      verified: true,
      treatment: 'Cardiac Screening'
    },
    {
      id: 4,
      name: 'David Wilson',
      rating: 5,
      date: '2024-01-05',
      comment: 'Dr. Johnson saved my life. Her expertise and quick action during my heart attack were incredible. I\'m forever grateful.',
      verified: true,
      treatment: 'Emergency Cardiac Care'
    }
  ]

  const availability = {
    monday: [
      { time: '9:00 AM', available: true },
      { time: '10:00 AM', available: false },
      { time: '11:00 AM', available: true },
      { time: '2:00 PM', available: true },
      { time: '3:00 PM', available: true },
      { time: '4:00 PM', available: false }
    ],
    tuesday: [
      { time: '9:00 AM', available: true },
      { time: '10:00 AM', available: true },
      { time: '11:00 AM', available: true },
      { time: '2:00 PM', available: false },
      { time: '3:00 PM', available: true },
      { time: '4:00 PM', available: true }
    ],
    wednesday: [
      { time: '9:00 AM', available: false },
      { time: '10:00 AM', available: true },
      { time: '11:00 AM', available: true },
      { time: '2:00 PM', available: true },
      { time: '3:00 PM', available: true },
      { time: '4:00 PM', available: true }
    ]
  }

  const services = [
    {
      name: 'Cardiac Consultation',
      description: 'Comprehensive evaluation of cardiovascular health and risk factors.',
      price: '$250',
      duration: '45 min',
      popular: true
    },
    {
      name: 'Echocardiogram',
      description: 'Ultrasound imaging of the heart to assess structure and function.',
      price: '$350',
      duration: '30 min',
      popular: false
    },
    {
      name: 'Stress Test',
      description: 'Exercise stress test to evaluate heart function under exertion.',
      price: '$400',
      duration: '60 min',
      popular: false
    },
    {
      name: 'Cardiac Catheterization',
      description: 'Minimally invasive procedure to diagnose and treat heart conditions.',
      price: '$2000',
      duration: '2-3 hours',
      popular: false
    }
  ]

  const tabs = [
    { id: 'overview', label: 'Overview', icon: User },
    { id: 'reviews', label: 'Reviews', icon: Star },
    { id: 'availability', label: 'Availability', icon: Calendar },
    { id: 'services', label: 'Services', icon: Heart }
  ]

  const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday']

  return (
    <div className="bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <BackButton />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{doctor.name}</h1>
                <div className="flex items-center space-x-4 mt-1">
                  <p className="text-blue-600 font-semibold">{doctor.specialty}</p>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="font-semibold text-gray-900">{doctor.rating}</span>
                    <span className="text-gray-600">({doctor.reviews} reviews)</span>
                  </div>
                  {doctor.verified && (
                    <div className="flex items-center space-x-1 bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
                      <Award className="w-3 h-3" />
                      <span>Verified</span>
                    </div>
                  )}
                  <div className="flex items-center space-x-1 text-green-600">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-medium">{doctor.availability}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>Book Now</span>
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
              <div className="flex items-start space-x-6 mb-6">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-green-100 rounded-full flex items-center justify-center">
                  <User className="w-16 h-16 text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-2">
                    <h1 className="text-3xl font-bold text-gray-900">{doctor.name}</h1>
                    {doctor.verified && (
                      <div className="flex items-center space-x-1 bg-green-100 text-green-700 px-2 py-1 rounded-full text-sm">
                        <Award className="w-4 h-4" />
                        <span>Verified</span>
                      </div>
                    )}
                  </div>
                  <p className="text-xl text-blue-600 font-semibold mb-2">{doctor.specialty}</p>
                  <p className="text-gray-600 mb-4">{doctor.clinic}</p>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center space-x-1">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="font-semibold">{doctor.rating}</span>
                      <span className="text-gray-600">({doctor.reviews} reviews)</span>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>{doctor.experience} experience</span>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{doctor.clinicAddress}</span>
                  </div>
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
                    <span className="text-gray-600">Availability</span>
                    <span className="font-semibold text-green-600">{doctor.availability}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Phone</span>
                    <span className="font-semibold">{doctor.phone}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Email</span>
                    <span className="font-semibold">{doctor.email}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Languages</span>
                    <span className="font-semibold">{doctor.languages.join(', ')}</span>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="font-semibold mb-3">Specialties</h4>
                  <div className="flex flex-wrap gap-2">
                    {doctor.specialties.slice(0, 3).map((specialty, index) => (
                      <span key={index} className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs">
                        {specialty}
                      </span>
                    ))}
                    {doctor.specialties.length > 3 && (
                      <span className="bg-gray-50 text-gray-600 px-2 py-1 rounded-full text-xs">
                        +{doctor.specialties.length - 3} more
                      </span>
                    )}
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
              <h3 className="text-2xl font-bold mb-6">About Dr. {doctor.name.split(' ')[1]}</h3>
              <p className="text-gray-700 mb-6">{doctor.about}</p>
              
              <h4 className="text-lg font-semibold mb-4">Education</h4>
              <div className="space-y-3 mb-6">
                {doctor.educationDetails.map((edu, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <GraduationCap className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-medium">{edu.degree}</p>
                      <p className="text-sm text-gray-600">{edu.school} ({edu.year})</p>
                    </div>
                  </div>
                ))}
              </div>

              <h4 className="text-lg font-semibold mb-4">Certifications</h4>
              <div className="space-y-2 mb-6">
                {doctor.certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-gray-700">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Specialties & Procedures</h3>
              
              <h4 className="text-lg font-semibold mb-4">Specialties</h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {doctor.specialties.map((specialty, index) => (
                  <span key={index} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                    {specialty}
                  </span>
                ))}
              </div>

              <h4 className="text-lg font-semibold mb-4">Procedures</h4>
              <div className="space-y-2">
                {doctor.procedures.map((procedure, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <BookOpen className="w-4 h-4 text-blue-600" />
                    <span className="text-gray-700">{procedure}</span>
                  </div>
                ))}
              </div>
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
                  <div className="mb-3">
                    <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">
                      {review.treatment}
                    </span>
                  </div>
                  <p className="text-gray-700">{review.comment}</p>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {selectedTab === 'availability' && (
          <div>
            <h3 className="text-2xl font-bold mb-6">Schedule Appointment</h3>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4">Select Date & Time</h4>
                
                <div className="grid grid-cols-5 gap-2 mb-6">
                  {days.map((day, index) => (
                    <button
                      key={day}
                      onClick={() => setSelectedDate(day)}
                      className={`p-3 rounded-lg text-center text-sm font-medium transition-colors ${
                        selectedDate === day
                          ? 'bg-blue-600 text-white'
                          : 'bg-white text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {day.charAt(0).toUpperCase() + day.slice(1)}
                    </button>
                  ))}
                </div>

                {selectedDate && (
                  <div>
                    <h5 className="font-semibold mb-3">Available Times for {selectedDate.charAt(0).toUpperCase() + selectedDate.slice(1)}</h5>
                    <div className="grid grid-cols-3 gap-2">
                      {availability[selectedDate as keyof typeof availability]?.map((slot, index) => (
                        <button
                          key={index}
                          disabled={!slot.available}
                          className={`p-3 rounded-lg text-center text-sm font-medium transition-colors ${
                            slot.available
                              ? 'bg-green-50 text-green-700 hover:bg-green-100'
                              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                          }`}
                        >
                          {slot.time}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Appointment Details</h4>
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Service</label>
                      <select className="w-full p-3 border border-gray-300 rounded-lg">
                        <option>Cardiac Consultation</option>
                        <option>Echocardiogram</option>
                        <option>Stress Test</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Reason for Visit</label>
                      <textarea 
                        className="w-full p-3 border border-gray-300 rounded-lg"
                        rows={3}
                        placeholder="Please describe your symptoms or reason for visit..."
                      />
                    </div>
                    
                    <button className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                      Confirm Appointment
                    </button>
                  </div>
                </div>
              </div>
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
                  {service.popular && (
                    <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold mb-3 inline-block">
                      Most Popular
                    </div>
                  )}
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