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
  ArrowRight
} from 'lucide-react'

export default function CentersPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedSpecialty, setSelectedSpecialty] = useState('all')

  const centers = [
    {
      id: 1,
      name: 'MedCare Plus',
      rating: 4.9,
      reviews: 1247,
      location: 'Downtown Medical District',
      address: '123 Medical Plaza, Suite 200, Downtown, NY 10001',
      specialties: ['Cardiology', 'Neurology', 'Orthopedics'],
      verified: true,
      waitTime: '15 min',
      image: '/api/placeholder/300/200'
    },
    {
      id: 2,
      name: 'HealthFirst Clinic',
      rating: 4.8,
      reviews: 892,
      location: 'Westside Medical Center',
      address: '456 Health Ave, Westside, NY 10002',
      specialties: ['Dermatology', 'Pediatrics', 'Internal Medicine'],
      verified: true,
      waitTime: '20 min',
      image: '/api/placeholder/300/200'
    },
    {
      id: 3,
      name: 'Advanced Care Medical',
      rating: 4.7,
      reviews: 1563,
      location: 'North Medical Plaza',
      address: '789 Care Blvd, North District, NY 10003',
      specialties: ['Oncology', 'Radiology', 'Surgery'],
      verified: true,
      waitTime: '25 min',
      image: '/api/placeholder/300/200'
    },
    {
      id: 4,
      name: 'Family Health Center',
      rating: 4.6,
      reviews: 734,
      location: 'Eastside Community',
      address: '321 Family St, Eastside, NY 10004',
      specialties: ['Family Medicine', 'Women\'s Health', 'Mental Health'],
      verified: true,
      waitTime: '18 min',
      image: '/api/placeholder/300/200'
    },
    {
      id: 5,
      name: 'Cardiac Care Institute',
      rating: 4.9,
      reviews: 567,
      location: 'Heart District',
      address: '555 Heart Way, Cardiac Zone, NY 10005',
      specialties: ['Cardiology', 'Cardiac Surgery', 'Rehabilitation'],
      verified: true,
      waitTime: '12 min',
      image: '/api/placeholder/300/200'
    },
    {
      id: 6,
      name: 'Pediatric Excellence',
      rating: 4.8,
      reviews: 423,
      location: 'Children\'s Medical Center',
      address: '777 Kids Lane, Pediatric District, NY 10006',
      specialties: ['Pediatrics', 'Child Psychology', 'Vaccination'],
      verified: true,
      waitTime: '22 min',
      image: '/api/placeholder/300/200'
    }
  ]

  const specialties = [
    'all', 'Cardiology', 'Neurology', 'Orthopedics', 'Dermatology', 
    'Pediatrics', 'Internal Medicine', 'Oncology', 'Radiology', 'Surgery',
    'Family Medicine', 'Women\'s Health', 'Mental Health'
  ]

  const filteredCenters = centers.filter(center => {
    const matchesSearch = center.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         center.location.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesSpecialty = selectedSpecialty === 'all' || 
                            center.specialties.includes(selectedSpecialty)
    return matchesSearch && matchesSpecialty
  })

  return (
    <div className="bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Medical Centers</h1>
          <p className="text-gray-600">Find the best medical centers in your area</p>
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
                  placeholder="Search centers by name or location..."
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
            Showing {filteredCenters.length} of {centers.length} medical centers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCenters.map((center, index) => (
            <motion.div 
              key={center.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
            >
              <div className="h-48 bg-gradient-to-br from-blue-100 to-green-100 relative">
                <div className="absolute top-3 right-3">
                  {center.verified && (
                    <div className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                      <Award className="w-3 h-3" />
                      <span>Verified</span>
                    </div>
                  )}
                </div>
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-semibold text-gray-700">{center.waitTime}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {center.name}
                  </h3>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-semibold text-gray-700">{center.rating}</span>
                  </div>
                </div>
                
                <div className="flex items-center text-gray-600 mb-3">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{center.address}</span>
                </div>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {center.specialties.slice(0, 2).map((specialty, idx) => (
                      <span key={idx} className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">
                        {specialty}
                      </span>
                    ))}
                    {center.specialties.length > 2 && (
                      <span className="bg-gray-50 text-gray-600 px-2 py-1 rounded-full text-xs font-medium">
                        +{center.specialties.length - 2} more
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{center.reviews} reviews</span>
                  <a 
                    href={`/organizations/${center.id}`}
                    className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-lg transition-all duration-300 flex items-center space-x-2"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredCenters.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No centers found</h3>
            <p className="text-gray-600">Try adjusting your search criteria</p>
          </div>
        )}
      </div>
    </div>
  )
} 