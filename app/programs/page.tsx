'use client'

import { motion } from 'framer-motion'
import { Sprout, GraduationCap, HeartHandshake, Rocket } from 'lucide-react'

export default function ProgramsPage() {
  const programs = [
    {
      icon: Sprout,
      title: 'Environmental Conservation & Biodiversity',
      description: 'SPCN undertakes environmental protection initiatives focused on conserving ecosystems, restoring degraded land, and safeguarding endangered plant and animal species.',
      impact: 'Ecosystem restoration',
      duration: 'Ongoing conservation',
      color: 'from-green-500 to-emerald-500',
      highlights: [
        'Ecosystem conservation and restoration',
        'Protecting endangered species',
        'Biodiversity research and monitoring',
        'Sustainable land management',
      ],
    },
    {
      icon: HeartHandshake,
      title: 'Partnership Initiative with Mihithala Mithuro',
      description: 'SPCN works in close collaboration with Mihithala Mithuro, an environmental conservation organization dedicated to protecting endangered plants and animals.',
      impact: 'Strategic partnership',
      duration: 'Ongoing collaboration',
      color: 'from-teal-500 to-cyan-500',
      highlights: [
        'Collaborative conservation efforts with Mihithala Mithuro',
        'Protecting endangered plants and animals',
        'Joint biodiversity research initiatives',
        'Shared resources and expertise',
      ],
    },
    {
      icon: Rocket,
      title: 'Kodigahakanda Biodiversity Conservation Project – Homagama',
      description: 'A long-term 20-acre ecosystem restoration and biodiversity conservation project aimed at protecting threatened species, restoring natural habitats, and strengthening ecological resilience through sustainable land management practices.',
      impact: '20 acres protected',
      duration: 'Ongoing flagship project',
      color: 'from-emerald-500 to-green-600',
      highlights: [
        '20-acre biodiversity conservation site',
        'Threatened species protection',
        'Natural habitat restoration',
        'Ecological resilience strengthening',
        'Sustainable land management practices',
        'Long-term ecosystem restoration',
      ],
      isFlagship: true,
    },
    {
      icon: GraduationCap,
      title: 'Community & Livelihood Development',
      description: 'Empowering marginalized plantation and rural communities through sustainable livelihood programs, organic farming, and eco-friendly agricultural practices.',
      impact: '1000+ families supported',
      duration: 'Ongoing community program',
      color: 'from-blue-500 to-indigo-500',
      highlights: [
        'Sustainable livelihood programs for marginalized plantation communities',
        'Organic farming and eco-friendly agricultural practices',
        'Community-based development initiatives',
        'Economic empowerment and skill development',
      ],
    },
    {
      icon: HeartHandshake,
      title: 'Health & Social Development',
      description: 'Comprehensive health initiatives including HIV prevention awareness, youth engagement, leadership development, and community education programs.',
      impact: 'Communities across Sri Lanka',
      duration: 'Ongoing initiatives',
      color: 'from-purple-500 to-pink-500',
      highlights: [
        'HIV prevention awareness programs',
        'Youth engagement and leadership development',
        'Community education and advocacy',
        'Social inclusion and empowerment',
      ],
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="gradient-text">Programs</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Transformative initiatives designed to empower communities and create
              lasting positive change through collaborative action.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6 }}
                className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} rounded-3xl overflow-hidden shadow-lg ${program.isFlagship ? 'border-4 border-green-400' : ''}`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-12">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${program.color}`}>
                        <program.icon className="w-10 h-10 text-white" />
                      </div>
                      {program.isFlagship && (
                        <span className="text-3xl animate-pulse">🌟</span>
                      )}
                    </div>
                    
                    {program.isFlagship && (
                      <div className="inline-block bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
                        FLAGSHIP PROJECT
                      </div>
                    )}
                    
                    <h2 className="text-3xl font-bold mb-4">{program.title}</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      {program.description}
                    </p>

                    <div className="flex flex-wrap gap-4 mb-6">
                      <div className={`bg-gradient-to-r ${program.color} text-white px-4 py-2 rounded-full text-sm font-semibold`}>
                        {program.impact}
                      </div>
                      <div className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold">
                        {program.duration}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-4">Program Highlights</h3>
                    <ul className="space-y-3">
                      {program.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${program.color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                          </div>
                          <span className="text-gray-700">{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8">
                      <a
                        href="/contact"
                        className={`inline-block bg-gradient-to-r ${program.color} text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105`}
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-6">
              Join Our Programs
            </h2>
            <p className="text-xl mb-8">
              Be part of transformative initiatives that are making a real difference
              in communities around the world.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Get Involved Today
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
