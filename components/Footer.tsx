'use client'

import Link from 'next/link'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'Our Work',
      links: [
        { name: 'Environmental Conservation', href: '/services' },
        { name: 'Community Development', href: '/services' },
        { name: 'Youth Empowerment', href: '/programs' },
        { name: 'Health Programs', href: '/programs' },
      ]
    },
    {
      title: 'About',
      links: [
        { name: 'Who We Are', href: '/about' },
        { name: 'Our Mission', href: '/mission' },
        { name: 'Our Vision', href: '/vision' },
        { name: 'Partners', href: '/about' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Programs', href: '/programs' },
        { name: 'Services', href: '/services' },
        { name: 'Impact Stories', href: '/about' },
        { name: 'Get Involved', href: '/contact' },
      ]
    }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="text-2xl font-bold">SPC Network</span>
            </Link>
            <p className="text-gray-400 text-base leading-relaxed mb-6 max-w-md">
              Empowering communities across Sri Lanka through environmental conservation, 
              social justice, and sustainable development initiatives.
            </p>
            
            {/* Contact Details */}
            <div className="mb-6 space-y-2">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Phone size={16} />
                <span>076 6463454 (Treasurer)</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Phone size={16} />
                <span>0726588328 (Secretary)</span>
              </div>
            </div>
            
            {/* Newsletter */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold mb-3 text-white">Stay Connected</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm focus:outline-none focus:border-primary-500 transition-colors"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg hover:shadow-lg transition-all">
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-500 transition-all">
                <FaFacebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-500 transition-all">
                <FaTwitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-500 transition-all">
                <FaLinkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-500 transition-all">
                <FaInstagram size={18} />
              </a>
            </div>
          </div>

          {/* Footer Links Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-sm font-semibold mb-4 text-white uppercase tracking-wider">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      href={link.href} 
                      className="text-gray-400 hover:text-primary-400 transition-colors text-sm block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} SPC Network. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
