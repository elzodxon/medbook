'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Search, 
  Filter, 
  MapPin, 
  Star, 
  Clock, 
  Award,
  ArrowRight,
  User
} from 'lucide-react'

export default function DoctorsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedSpecialty, setSelectedSpecialty] = useState('all')

  const doctors = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      specialty: 'Cardiologist',
      rating: 4.9,
      reviews: 342,
      experience: '15 years',
      clinic: 'MedCare Plus',
      clinicAddress: '123 Medical Plaza, Downtown, NY',
      image: '/api/placeholder/150/150',
      verified: true,
      languages: ['English', 'Spanish'],
      availability: 'Today',
      education: 'Harvard Medical School'
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      specialty: 'Neurologist',
      rating: 4.8,
      reviews: 287,
      experience: '12 years',
      clinic: 'HealthFirst Clinic',
      clinicAddress: '456 Health Ave, Westside, NY',
      image: '/api/placeholder/150/150',
      verified: true,
      languages: ['English', 'Mandarin'],
      availability: 'Tomorrow',
      education: 'Stanford Medical School'
    },
    {
      id: 3,
      name: 'Dr. Emily Rodriguez',
      specialty: 'Dermatologist',
      rating: 4.7,
      reviews: 456,
      experience: '18 years',
      clinic: 'Advanced Care Medical',
      clinicAddress: '789 Care Blvd, North District, NY',
      image: '/api/placeholder/150/150',
      verified: true,
      languages: ['English', 'Spanish'],
      availability: 'Today',
      education: 'Yale Medical School'
    },
    {
      id: 4,
      name: 'Dr. James Wilson',
      specialty: 'Orthopedic Surgeon',
      rating: 4.6,
      reviews: 198,
      experience: '20 years',
      clinic: 'Family Health Center',
      clinicAddress: '321 Family St, Eastside, NY',
      image: '/api/placeholder/150/150',
      verified: true,
      languages: ['English'],
      availability: 'This Week',
      education: 'Johns Hopkins Medical School'
    },
    {
      id: 5,
      name: 'Dr. Lisa Park',
      specialty: 'Pediatrician',
      rating: 4.9,
      reviews: 523,
      experience: '14 years',
      clinic: 'MedCare Plus',
      clinicAddress: '123 Medical Plaza, Downtown, NY',
      image: '/api/placeholder/150/150',
      verified: true,
      languages: ['English', 'Korean'],
      availability: 'Today',
      education: 'UCLA Medical School'
    },
    {
      id: 6,
      name: 'Dr. Robert Thompson',
      specialty: 'Psychiatrist',
      rating: 4.5,
      reviews: 167,
      experience: '16 years',
      clinic: 'HealthFirst Clinic',
      clinicAddress: '456 Health Ave, Westside, NY',
      image: '/api/placeholder/150/150',
      verified: true,
      languages: ['English'],
      availability: 'Tomorrow',
      education: 'Columbia Medical School'
    },
    {
      id: 7,
      name: 'Dr. Maria Garcia',
      specialty: 'Oncologist',
      rating: 4.8,
      reviews: 234,
      experience: '22 years',
      clinic: 'Advanced Care Medical',
      clinicAddress: '789 Care Blvd, North District, NY',
      image: '/api/placeholder/150/150',
      verified: true,
      languages: ['English', 'Spanish'],
      availability: 'Next Week',
      education: 'Mayo Clinic Medical School'
    },
    {
      id: 8,
      name: 'Dr. David Kim',
      specialty: 'Radiologist',
      rating: 4.7,
      reviews: 189,
      experience: '13 years',
      clinic: 'Family Health Center',
      clinicAddress: '321 Family St, Eastside, NY',
      image: '/api/placeholder/150/150',
      verified: true,
      languages: ['English', 'Korean'],
      availability: 'Today',
      education: 'Northwestern Medical School'
    }
  ]

  const specialties = [
    'all', 'Cardiologist', 'Neurologist', 'Dermatologist', 'Orthopedic Surgeon',
    'Pediatrician', 'Psychiatrist', 'Oncologist', 'Radiologist', 'Surgeon',
    'Internal Medicine', 'Family Medicine', 'Emergency Medicine'
  ]

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.clinic.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesSpecialty = selectedSpecialty === 'all' || 
                            doctor.specialty === selectedSpecialty
    return matchesSearch && matchesSpecialty
  })

  return (
    <div className="bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Find Doctors</h1>
          <p className="text-gray-600">Connect with experienced specialists in your area</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search doctors by name, specialty, or clinic..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Specialty Filter */}
            <div className="md:w-64">
              <select
                value={selectedSpecialty}
                onChange={(e) => setSelectedSpecialty(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {specialties.map((specialty) => (
                  <option key={specialty} value={specialty}>
                    {specialty === 'all' ? 'All Specialties' : specialty}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="container mx-auto px-6 py-8">
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredDoctors.length} of {doctors.length} doctors
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDoctors.map((doctor, index) => (
            <motion.div 
              key={doctor.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 group"
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
                    <span className="text-sm font-semibold">{doctor.rating}</span>
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
                <div className="flex items-center text-gray-600 text-sm">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{doctor.clinicAddress}</span>
                </div>
              </div>
              
              <a 
                href={`/doctors/${doctor.id}`}
                className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Book Appointment</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>

        {filteredDoctors.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No doctors found</h3>
            <p className="text-gray-600">Try adjusting your search criteria</p>
          </div>
        )}
      </div>
    </div>
  )
} 