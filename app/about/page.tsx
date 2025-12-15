'use client'

import { motion } from 'framer-motion'
import { Users, Target, Award, Globe } from 'lucide-react'

export default function AboutPage() {
  const team = [
    { name: 'Leadership Team', count: '15+', icon: Users },
    { name: 'Core Members', count: '100+', icon: Target },
    { name: 'Volunteers', count: '500+', icon: Award },
    { name: 'Partners', count: '50+', icon: Globe },
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
              About <span className="gradient-text">SPC Network</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              A community-based, non-profit network dedicated to advancing environmental protection, 
              inclusive community development, and social justice across Sri Lanka.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              className="prose prose-lg max-w-none"
            >
              <h2 className="text-4xl font-bold mb-6 gradient-text">Our Story</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                The Sustainable Participatory Communicative Network (SPC Network) is a community-based 
                network working across Sri Lanka with a strong focus on the development of 
                marginalized plantation and rural communities. We promote sustainable livelihoods, 
                protect human rights, and strengthen community resilience through participatory 
                and people-centered approaches.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Our work integrates environmental conservation with social and economic development, 
                recognizing the strong link between healthy ecosystems and thriving communities. 
                SPC Network actively engages in biodiversity conservation, organic farming promotion, 
                HIV prevention initiatives, and capacity-building programs that empower youth, 
                families, and vulnerable groups.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Through long-term partnerships, community leadership, and locally driven solutions, 
                SPC Network supports sustainable development that is environmentally responsible, socially 
                inclusive, and economically viable. We remain committed to fostering collaboration, 
                accountability, and meaningful community participation to achieve lasting positive impact.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Our Team</h2>
            <p className="text-xl text-gray-600">
              A diverse group of dedicated professionals and volunteers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg text-center hover-lift"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold gradient-text mb-2">{item.count}</div>
                <div className="text-gray-600 font-medium">{item.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'Sustainability',
                description: 'Environmental and social sustainability guides every action we take and every decision we make.',
              },
              {
                title: 'Participation',
                description: 'We believe in the power of inclusive participation, community engagement, and collective decision-making.',
              },
              {
                title: 'Integrity',
                description: 'Transparency, accountability, and ethical practices form the foundation of our work and partnerships.',
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold mb-4 gradient-text">{value.title}</h3>
                <p className="text-gray-700 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
