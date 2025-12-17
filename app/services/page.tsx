'use client'

import { motion } from 'framer-motion'
import { Network, Lightbulb, Users, BookOpen, Megaphone, Handshake } from 'lucide-react'

export default function ServicesPage() {
  const services = [
    {
      icon: Network,
      title: 'Environmental Conservation & Biodiversity',
      description: 'Environmental protection initiatives focused on conserving ecosystems, restoring degraded land, and safeguarding endangered plant and animal species.',
      features: [
        'Kodigahakanda 20-acre Conservation Project',
        'Ecosystem restoration and biodiversity protection',
        'Partnership with Mihithala Mithuro',
        'Endangered species protection programs'
      ],
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Lightbulb,
      title: 'Community & Livelihood Development',
      description: 'Supporting marginalized plantation and rural communities through sustainable livelihood initiatives and economic empowerment.',
      features: [
        'Sustainable livelihood programs',
        'Organic farming practices',
        'Eco-friendly agricultural training',
        'Community-based development initiatives'
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Users,
      title: 'Youth & Community Empowerment',
      description: 'Capacity-building programs that develop leadership skills and engage youth in community development and environmental protection.',
      features: [
        'Leadership development programs',
        'Youth volunteer engagement',
        'Capacity-building workshops',
        'Community education initiatives'
      ],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: BookOpen,
      title: 'Health & Social Development',
      description: 'Comprehensive health and social programs focused on HIV prevention, community wellness, and inclusive development.',
      features: [
        'HIV prevention awareness programs',
        'Community health education',
        'Social inclusion initiatives',
        'Health advocacy and support'
      ],
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Megaphone,
      title: 'Human Rights & Social Justice',
      description: 'Promoting dignity, equality, and access to opportunities for vulnerable and marginalized populations across Sri Lanka.',
      features: [
        'Human rights advocacy',
        'Social justice initiatives',
        'Access to opportunities',
        'Community legal support'
      ],
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Handshake,
      title: 'Partnership & Collaboration',
      description: 'Building strategic partnerships with organizations, communities, and stakeholders to maximize impact and sustainability.',
      features: [
        'Multi-stakeholder collaboration',
        'Partnership development',
        'Resource mobilization',
        'Knowledge sharing networks'
      ],
      color: 'from-pink-500 to-rose-500',
    },
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
            <span className="text-black md:text-gray-900">Our</span>{' '}
            <span className="gradient-text">Work & Projects</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Through participatory approaches and community engagement, we implement programs 
              that protect the environment, strengthen communities, and promote sustainable development across Sri Lanka.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover-lift"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`}></div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-6">
              Join Our Mission
            </h2>
            <p className="text-xl mb-8">
              Partner with us to protect the environment, empower communities, and create lasting positive change.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Contact Us Today
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
