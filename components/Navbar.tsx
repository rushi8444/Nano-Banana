'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface NavbarProps {
  currentFlavor?: string
  onFlavorChange?: (flavor: string) => void
}

export default function Navbar({ currentFlavor = 'mango', onFlavorChange }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-xl border-b border-orange-500/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3 cursor-pointer"
        >
          <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center font-bold text-white text-lg">
            ⚡
          </div>
          <div className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-pink-500 font-black text-2xl">
            Nano Banana
          </div>
        </motion.div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#" className="text-gray-300 hover:text-orange-400 transition text-sm font-medium">
            Products
          </Link>
          <Link href="#" className="text-gray-300 hover:text-orange-400 transition text-sm font-medium">
            About
          </Link>
          <Link href="#" className="text-gray-300 hover:text-orange-400 transition text-sm font-medium">
            Philosophy
          </Link>
        </div>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 122, 0, 0.6)' }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2.5 bg-gradient-to-r from-orange-400 to-orange-600 text-white font-bold rounded-full text-sm hover:shadow-lg hover:shadow-orange-500/50 transition-shadow duration-300"
        >
          Order Now
        </motion.button>
      </div>
    </motion.nav>
  )
}
