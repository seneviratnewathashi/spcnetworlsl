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
            <span className="text-black md:text-gray-900">Our</span> {' '}
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

      {/* Leadership & Team Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 via-white to-secondary-50/30"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-100/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-black md:text-gray-900">Our</span>{' '}
              <span className="gradient-text">Leadership</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Guided by experienced leaders and strategic advisors committed to driving sustainable 
              environmental conservation and community development across Sri Lanka.
            </p>
          </motion.div>

          {/* Executive Leadership */}
          <div className="max-w-6xl mx-auto mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="flex items-center justify-center gap-3 mb-10">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary-500"></div>
                <h3 className="text-3xl font-bold text-gray-900 tracking-tight">Executive Leadership</h3>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-secondary-500"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="group bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl hover:border-primary-200 transition-all duration-300"
                >
                  <div className="relative mb-6">
                    <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                      <span className="text-white text-3xl font-bold">KM</span>
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full">
                      <span className="text-white text-xs font-semibold uppercase tracking-wider">Chairman</span>
                    </div>
                  </div>
                  <div className="text-center mt-8">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Mr. K. Munagama</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Strategic oversight and organizational governance
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="group bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl hover:border-blue-200 transition-all duration-300"
                >
                  <div className="relative mb-6">
                    <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                      <span className="text-white text-3xl font-bold">AC</span>
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full">
                      <span className="text-white text-xs font-semibold uppercase tracking-wider">Treasurer</span>
                    </div>
                  </div>
                  <div className="text-center mt-8">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Mr. P.M. Asoka Chandrakantha</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Financial management and resource allocation
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="group bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl hover:border-pink-200 transition-all duration-300"
                >
                  <div className="relative mb-6">
                    <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                      <span className="text-white text-3xl font-bold">GP</span>
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-pink-600 to-rose-600 rounded-full">
                      <span className="text-white text-xs font-semibold uppercase tracking-wider">Secretary</span>
                    </div>
                  </div>
                  <div className="text-center mt-8">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Miss. Gethmi Pandithasekara</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Administrative coordination and communications
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Advisory Committee */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center justify-center gap-3 mb-10">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary-500"></div>
                <h3 className="text-3xl font-bold text-gray-900 tracking-tight">Advisory Committee</h3>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-secondary-500"></div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="group bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-purple-200 transition-all duration-300"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 mb-4 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-2xl font-bold">SK</span>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 text-center mb-1">Mr. Suranjan Kodituwakku</h4>
                    <div className="inline-block px-3 py-1 bg-gray-100 rounded-full mt-2">
                      <span className="text-gray-600 text-xs font-medium uppercase tracking-wide">Strategic Advisor</span>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="group bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-green-200 transition-all duration-300"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 mb-4 rounded-full bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-2xl font-bold">R</span>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 text-center mb-1">Mr. Richard Seneviratne</h4>
                    <div className="inline-block px-3 py-1 bg-gray-100 rounded-full mt-2">
                      <span className="text-gray-600 text-xs font-medium uppercase tracking-wide">Strategic Advisor</span>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="group bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-orange-200 transition-all duration-300"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 mb-4 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-2xl font-bold">LR</span>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 text-center mb-1">Mr. Lalith Ranaraja</h4>
                    <div className="inline-block px-3 py-1 bg-gray-100 rounded-full mt-2">
                      <span className="text-gray-600 text-xs font-medium uppercase tracking-wide">Strategic Advisor</span>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="group bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-yellow-200 transition-all duration-300"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 mb-4 rounded-full bg-gradient-to-br from-yellow-500 to-amber-500 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-2xl font-bold">TA</span>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 text-center mb-1">Mr. Tyron Dallas Amath</h4>
                    <div className="inline-block px-3 py-1 bg-gray-100 rounded-full mt-2">
                      <span className="text-gray-600 text-xs font-medium uppercase tracking-wide">Strategic Advisor</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
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
