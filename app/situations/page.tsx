"use client"

import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { X } from 'lucide-react'

export default function SituationsPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Situations & Field Reports
          </motion.h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Photographic documentation and short descriptions from the field —
            plantation communities, conservation work, damaged areas, and past public health projects.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* 1. Plantation community */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Plantation Communities — Living Conditions</h2>
            <p className="text-gray-600 mb-6">
              These images capture the daily realities faced by plantation workers and their families in Sri Lanka. 
              Many plantation communities live in modest housing with limited infrastructure, often lacking access to 
              adequate sanitation, clean water, and basic amenities. Families struggle with poverty, inadequate healthcare, 
              and limited educational opportunities. Despite these challenges, these resilient communities maintain strong 
              social bonds and cultural traditions. Our work focuses on improving their living conditions through sustainable 
              development programs, livelihood training, and advocacy for better housing and essential services.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="rounded-lg overflow-hidden bg-gray-100 cursor-pointer hover:shadow-xl transition-shadow" onClick={() => setSelectedImage('/images/plantation/image plantation3.jpeg')}>
                <div className="relative h-56">
                  <Image src="/images/plantation/image plantation3.jpeg" alt="Plantation community living conditions" fill className="object-cover hover:scale-105 transition-transform" />
                </div>
              </div>
              <div className="rounded-lg overflow-hidden bg-gray-100 cursor-pointer hover:shadow-xl transition-shadow" onClick={() => setSelectedImage('/images/plantation/WhatsApp Image 2025-12-18 at 1.33.19 PM.jpeg')}>
                <div className="relative h-56">
                  <Image src="/images/plantation/WhatsApp Image 2025-12-18 at 1.33.19 PM.jpeg" alt="Plantation housing" fill className="object-cover hover:scale-105 transition-transform" />
                </div>
              </div>
              <div className="rounded-lg overflow-hidden bg-gray-100 cursor-pointer hover:shadow-xl transition-shadow" onClick={() => setSelectedImage('/images/plantation/WhatsApp Image 2025-12-18 at 1.33.20 PM.jpeg')}>
                <div className="relative h-56">
                  <Image src="/images/plantation/WhatsApp Image 2025-12-18 at 1.33.20 PM.jpeg" alt="Community living" fill className="object-cover hover:scale-105 transition-transform" />
                </div>
              </div>
            </div>
          </div>

          {/* 2. Environment protection & endangered species */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Environment Protection & Endangered Species</h2>
            <p className="text-gray-600 mb-6">Activities related to conservation, habitat restoration and species monitoring.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="rounded-lg overflow-hidden bg-gray-100 h-64 relative cursor-pointer hover:shadow-xl transition-shadow" onClick={() => setSelectedImage('/images/environment/image0.jpeg')}>
                <Image src="/images/environment/image0.jpeg" alt="Conservation activity" fill className="object-cover hover:scale-105 transition-transform" />
              </div>
              <div className="rounded-lg overflow-hidden bg-gray-100 h-64 relative cursor-pointer hover:shadow-xl transition-shadow" onClick={() => setSelectedImage('/images/environment/image1.jpeg')}>
                <Image src="/images/environment/image1.jpeg" alt="Endangered species protection" fill className="object-cover hover:scale-105 transition-transform" />
              </div>
              <div className="rounded-lg overflow-hidden bg-gray-100 h-64 relative cursor-pointer hover:shadow-xl transition-shadow" onClick={() => setSelectedImage('/images/environment/image2.jpeg')}>
                <Image src="/images/environment/image2.jpeg" alt="Habitat restoration" fill className="object-cover hover:scale-105 transition-transform" />
              </div>
              <div className="rounded-lg overflow-hidden bg-gray-100 h-64 relative cursor-pointer hover:shadow-xl transition-shadow" onClick={() => setSelectedImage('/images/environment/image3.jpeg')}>
                <Image src="/images/environment/image3.jpeg" alt="Species monitoring" fill className="object-cover hover:scale-105 transition-transform" />
              </div>
            </div>
          </div>

          {/* 3. Damaged properties and districts */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Damaged Properties & Affected Districts — Cyclone Ditwa</h2>
            <p className="text-gray-600 mb-6">
              These photographs document the devastating impact of Cyclone Ditwa, which recently struck Sri Lanka causing 
              widespread destruction across multiple districts. The cyclone brought torrential rains, powerful winds, and 
              severe flooding that destroyed homes, damaged critical infrastructure, and displaced hundreds of families. 
              Agricultural lands were submerged, roads were washed away, and many communities were left without access to 
              clean water, electricity, and basic services. The aftermath shows collapsed buildings, flooded properties, 
              and debris-strewn neighborhoods where families lost everything. SPC Network immediately mobilized emergency 
              response teams to provide relief supplies, temporary shelter, and essential aid to affected communities. 
              Our ongoing recovery efforts focus on helping families rebuild their homes and livelihoods while implementing 
              disaster-resilient infrastructure to better withstand future cyclones.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="rounded-lg overflow-hidden bg-gray-100 h-64 relative cursor-pointer hover:shadow-xl transition-shadow" onClick={() => setSelectedImage('/images/damaged/image1.jpeg')}>
                <Image src="/images/damaged/image1.jpeg" alt="Damaged property" fill className="object-cover hover:scale-105 transition-transform" />
              </div>
              <div className="rounded-lg overflow-hidden bg-gray-100 h-64 relative cursor-pointer hover:shadow-xl transition-shadow" onClick={() => setSelectedImage('/images/damaged/image2.jpeg')}>
                <Image src="/images/damaged/image2.jpeg" alt="Affected area" fill className="object-cover hover:scale-105 transition-transform" />
              </div>
              <div className="rounded-lg overflow-hidden bg-gray-100 h-64 relative cursor-pointer hover:shadow-xl transition-shadow" onClick={() => setSelectedImage('/images/damaged/imag3.jpeg')}>
                <Image src="/images/damaged/imag3.jpeg" alt="Infrastructure damage" fill className="object-cover hover:scale-105 transition-transform" />
              </div>
              <div className="rounded-lg overflow-hidden bg-gray-100 h-64 relative cursor-pointer hover:shadow-xl transition-shadow" onClick={() => setSelectedImage('/images/damaged/WhatsApp Image 2025-11-28 at 10.20.24 PM.jpeg')}>
                <Image src="/images/damaged/WhatsApp Image 2025-11-28 at 10.20.24 PM.jpeg" alt="Affected district" fill className="object-cover hover:scale-105 transition-transform" />
              </div>
              <div className="rounded-lg overflow-hidden bg-gray-100 h-64 relative cursor-pointer hover:shadow-xl transition-shadow" onClick={() => setSelectedImage('/images/damaged/WhatsApp Image 2025-11-28 at 9.35.44 PM.jpeg')}>
                <Image src="/images/damaged/WhatsApp Image 2025-11-28 at 9.35.44 PM.jpeg" alt="Damaged infrastructure" fill className="object-cover hover:scale-105 transition-transform" />
              </div>
              <div className="rounded-lg overflow-hidden bg-gray-100 h-64 relative cursor-pointer hover:shadow-xl transition-shadow" onClick={() => setSelectedImage('/images/damaged/WhatsApp Image 2025-11-28 at 9.35.45 PM.jpeg')}>
                <Image src="/images/damaged/WhatsApp Image 2025-11-28 at 9.35.45 PM.jpeg" alt="Property damage" fill className="object-cover hover:scale-105 transition-transform" />
              </div>
            </div>
          </div>

          {/* 4. Past HIV prevention project */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Past HIV Prevention Project</h2>
            <p className="text-gray-600 mb-6">Photos from previous community health interventions and awareness activities.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="rounded-lg overflow-hidden bg-gray-100 h-48 relative cursor-pointer hover:shadow-xl transition-shadow" onClick={() => setSelectedImage('/images/pexels-sirmudi_photography-2155088036-33894657.jpg')}>
                <Image src="/images/pexels-sirmudi_photography-2155088036-33894657.jpg" alt="HIV project" fill className="object-cover hover:scale-105 transition-transform" />
              </div>
              <div className="rounded-lg overflow-hidden bg-gray-100 h-48 relative cursor-pointer hover:shadow-xl transition-shadow" onClick={() => setSelectedImage('/images/pexels-marta-nogueira-589022975-34064734.jpg')}>
                <Image src="/images/pexels-marta-nogueira-589022975-34064734.jpg" alt="Health awareness" fill className="object-cover hover:scale-105 transition-transform" />
              </div>
              <div className="rounded-lg overflow-hidden bg-gray-100 h-48 relative cursor-pointer hover:shadow-xl transition-shadow" onClick={() => setSelectedImage('/images/pexels-mikhail-nilov-8543583.jpg')}>
                <Image src="/images/pexels-mikhail-nilov-8543583.jpg" alt="Community health" fill className="object-cover hover:scale-105 transition-transform" />
              </div>
            </div>
          </div>

          {/* Services under this section */}
          <div className="mt-12 p-8 bg-gray-50 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Services & Activities</h3>
            <ul className="grid sm:grid-cols-2 gap-4 text-gray-700 list-inside">
              <li>Community assessments and needs surveys</li>
              <li>Rapid response and relief coordination</li>
              <li>Habitat restoration and reforestation</li>
              <li>Endangered species monitoring</li>
              <li>Sustainable livelihood programs</li>
              <li>Public health & HIV prevention awareness</li>
              <li>Capacity building and community training</li>
              <li>Partnership facilitation with local organizations</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-zoom-out"
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={(e) => {
                e.stopPropagation()
                setSelectedImage(null)
              }}
              className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-sm transition-all z-10"
            >
              <X className="w-6 h-6" />
            </motion.button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-7xl max-h-[90vh] w-full h-full cursor-default"
            >
              <div className="relative w-full h-full">
                <Image
                  src={selectedImage}
                  alt="Enlarged view"
                  fill
                  className="object-contain"
                  sizes="100vw"
                  quality={100}
                />
              </div>
            </motion.div>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 text-sm backdrop-blur-sm bg-black/30 px-4 py-2 rounded-full">
              Click anywhere to close
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
