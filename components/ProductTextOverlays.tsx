'use client'

import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Product } from '@/data/products'

interface ProductTextOverlaysProps {
  product: Product
}

export default function ProductTextOverlays({ product }: ProductTextOverlaysProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  })

  // Create smoothed progress values with better timing
  const opacity1 = useTransform(scrollYProgress, [0, 0.12, 0.28], [1, 1, 0])
  const opacity2 = useTransform(scrollYProgress, [0.12, 0.35, 0.50], [0, 1, 0])
  const opacity3 = useTransform(scrollYProgress, [0.42, 0.65, 0.78], [0, 1, 0])
  const opacity4 = useTransform(scrollYProgress, [0.72, 0.92, 1], [0, 1, 0.5])

  // Y-offset transforms for smooth entry/exit
  const yOffset1 = useTransform(scrollYProgress, [0, 0.28], [40, -10])
  const yOffset2 = useTransform(scrollYProgress, [0.12, 0.50], [40, -10])
  const yOffset3 = useTransform(scrollYProgress, [0.42, 0.78], [40, -10])
  const yOffset4 = useTransform(scrollYProgress, [0.72, 1], [40, -10])

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 flex items-center justify-center pointer-events-none h-[600vh]"
    >
      <div className="sticky top-1/2 -translate-y-1/2 w-full h-screen flex items-center justify-center">
        {/* Section 1 */}
        <motion.div
          style={{ opacity: opacity1, y: yOffset1 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-8"
        >
          <h1 className="text-7xl md:text-8xl font-black mb-4 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">
            {product.section1.title}
          </h1>
          <p className="text-2xl md:text-3xl font-light text-gray-300 max-w-2xl">
            {product.section1.subtitle}
          </p>
        </motion.div>

        {/* Section 2 */}
        <motion.div
          style={{ opacity: opacity2, y: yOffset2 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-8"
        >
          <h2 className="text-6xl md:text-7xl font-bold mb-4 leading-tight">
            {product.section2.title}
          </h2>
          <p className="text-xl md:text-2xl font-light text-gray-400 max-w-3xl">
            {product.section2.subtitle}
          </p>
        </motion.div>

        {/* Section 3 */}
        <motion.div
          style={{ opacity: opacity3, y: yOffset3 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-8"
        >
          <h2 className="text-6xl md:text-7xl font-bold mb-4 leading-tight">
            {product.section3.title}
          </h2>
          <p className="text-xl md:text-2xl font-light text-gray-400 max-w-3xl">
            {product.section3.subtitle}
          </p>
        </motion.div>

        {/* Section 4 */}
        <motion.div
          style={{ opacity: opacity4, y: yOffset4 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-8"
        >
          <h2 className="text-6xl md:text-7xl font-bold mb-4 leading-tight">
            {product.section4.title}
          </h2>
          {product.section4.subtitle && (
            <p className="text-xl md:text-2xl font-light text-gray-400 max-w-3xl">
              {product.section4.subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </div>
  )
}
