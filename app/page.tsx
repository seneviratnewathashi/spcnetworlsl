'use client'

import { motion } from 'framer-motion'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import About from '@/components/About'
import Mission from '@/components/Mission'
import Vision from '@/components/Vision'
import Stats from '@/components/Stats'
import CallToAction from '@/components/CallToAction'

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <About />
      <Mission />
      <Vision />
      <Stats />
      <CallToAction />
    </div>
  )
}
