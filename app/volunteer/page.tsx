'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Users, Mail, Phone, MapPin, Calendar, Heart, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function VolunteerPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    availability: '',
    interests: '',
    experience: '',
    motivation: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')
    
    try {
      const response = await fetch('/api/volunteer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        setSubmitMessage(data.message)
        // Reset form
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          location: '',
          availability: '',
          interests: '',
          experience: '',
          motivation: ''
        })
      } else {
        setSubmitMessage(data.message || 'An error occurred. Please try again.')
      }
    } catch (error) {
      setSubmitMessage('Failed to submit application. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full mb-6"
            >
              <Heart className="w-10 h-10 text-white" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Join as a Volunteer
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Make a difference in communities across Sri Lanka. Your time and skills can help create sustainable change.
            </p>
          </div>

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Users className="w-6 h-6 text-primary-600" />
                  Personal Information
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="+94 77 123 4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="location" className="block text-sm font-semibold text-gray-700 mb-2">
                      Location *
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      required
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="City, District"
                    />
                  </div>
                </div>
              </div>

              {/* Volunteer Details */}
              <div className="pt-6 border-t border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Calendar className="w-6 h-6 text-primary-600" />
                  Volunteer Details
                </h2>

                <div className="space-y-6">
                  <div>
                    <label htmlFor="availability" className="block text-sm font-semibold text-gray-700 mb-2">
                      Availability *
                    </label>
                    <select
                      id="availability"
                      name="availability"
                      required
                      value={formData.availability}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select your availability</option>
                      <option value="weekdays">Weekdays</option>
                      <option value="weekends">Weekends</option>
                      <option value="both">Both Weekdays & Weekends</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="interests" className="block text-sm font-semibold text-gray-700 mb-2">
                      Areas of Interest *
                    </label>
                    <input
                      type="text"
                      id="interests"
                      name="interests"
                      required
                      value={formData.interests}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="e.g., Education, Environment, Community Development"
                    />
                  </div>

                  <div>
                    <label htmlFor="experience" className="block text-sm font-semibold text-gray-700 mb-2">
                      Relevant Experience
                    </label>
                    <textarea
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your relevant skills and experience..."
                    />
                  </div>

                  <div>
                    <label htmlFor="motivation" className="block text-sm font-semibold text-gray-700 mb-2">
                      Why do you want to volunteer? *
                    </label>
                    <textarea
                      id="motivation"
                      name="motivation"
                      required
                      value={formData.motivation}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                      placeholder="Share your motivation for joining us..."
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              {submitMessage && (
                <div className="space-y-3">
                  <div className={`p-4 rounded-lg ${submitMessage.includes('success') ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
                    {submitMessage}
                  </div>
                  {submitMessage.includes('success') && (
                    <Link
                      href="/"
                      className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold transition-colors"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Back to Home
                    </Link>
                  )}
                </div>
              )}

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white py-4 px-8 rounded-lg font-bold text-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Volunteer Application'}
              </motion.button>
            </form>
          </motion.div>

          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-xl p-6 shadow-lg text-center"
            >
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Join Our Team</h3>
              <p className="text-sm text-gray-600">Work with passionate individuals</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-xl p-6 shadow-lg text-center"
            >
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Make Impact</h3>
              <p className="text-sm text-gray-600">Create meaningful change</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white rounded-xl p-6 shadow-lg text-center"
            >
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Flexible Hours</h3>
              <p className="text-sm text-gray-600">Work at your own pace</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
