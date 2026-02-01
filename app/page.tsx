'use client'

import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import ProductBottleScroll from '@/components/ProductBottleScroll'
import ProductTextOverlays from '@/components/ProductTextOverlays'
import ProductDetails from '@/components/ProductDetails'
import Freshness from '@/components/Freshness'
import BuyNowSection from '@/components/BuyNowSection'
import Footer from '@/components/Footer'
import { products } from '@/data/products'

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const product = products[currentIndex]

  // Reset scroll on product change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [currentIndex])

  const goToNextProduct = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length)
  }

  const goToPrevProduct = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length)
  }

  const goToProduct = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <>
      <Navbar currentFlavor={product.id} />

      <AnimatePresence mode="wait">
        <motion.div
          key={product.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          ref={scrollContainerRef}
          className="relative"
        >
          {/* Scroll Section */}
          <div className="relative">
            <ProductBottleScroll product={product} />
            <ProductTextOverlays product={product} />
          </div>

          {/* Product Details */}
          <ProductDetails product={product} />

          {/* Freshness Section */}
          <Freshness product={product} />

          {/* Buy Now Section */}
          <BuyNowSection product={product} onNextFlavor={goToNextProduct} />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      {/* Left Arrow */}
      {/* <motion.button
        onClick={goToPrevProduct}
        className="fixed left-8 top-1/2 -translate-y-1/2 z-40 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Previous flavor"
      >
        <div className="w-14 h-14 rounded-full bg-white/5 backdrop-blur border border-white/10 flex items-center justify-center group-hover:bg-orange-500/20 group-hover:border-orange-500/50 transition-all duration-300">
          <svg className="w-6 h-6 text-white group-hover:text-orange-400 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </div>
      </motion.button> */}

      {/* Right Arrow */}
      {/* <motion.button
        onClick={goToNextProduct}
        className="fixed right-8 top-1/2 -translate-y-1/2 z-40 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Next flavor"
      >
        <div className="w-14 h-14 rounded-full bg-white/5 backdrop-blur border border-white/10 flex items-center justify-center group-hover:bg-orange-500/20 group-hover:border-orange-500/50 transition-all duration-300">
          <svg className="w-6 h-6 text-white group-hover:text-orange-400 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </motion.button> */}

      {/* Bottom Flavor Menu */}
      {/* <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40"
      >
        <div className="flex items-center gap-3 bg-black/50 backdrop-blur-xl border border-orange-500/20 rounded-full p-2">
          {products.map((prod, idx) => (
            // <motion.button
            //   key={prod.id}
            //   onClick={() => goToProduct(idx)}
            //   whileHover={{ scale: 1.1 }}
            //   whileTap={{ scale: 0.95 }}
            //   className={`px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
            //     currentIndex === idx
            //       ? 'bg-gradient-to-r from-orange-400 to-orange-600 text-white shadow-lg shadow-orange-500/50'
            //       : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
            //   }`}
            // >
            //   {prod.name}
            // </motion.button>
          ))}
        </div>
      </motion.div> */}

      {/* Footer */}
      <Footer />
    </>
  )
}
