'use client'

import { motion } from 'framer-motion'
import { Product } from '@/data/products'

interface FreshnessProps {
  product: Product
}

export default function Freshness({ product }: FreshnessProps) {
  return (
    <section className="relative py-24 bg-gray-950 overflow-hidden">
      {/* Animated background accent */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{ background: product.gradient }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h2
            className="text-5xl md:text-6xl font-black mb-8 leading-tight"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {product.freshnessSection.title}
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto font-light"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            {product.freshnessSection.description}
          </motion.p>

          {/* Decorative elements */}
          <motion.div
            className="mt-12 flex justify-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            {product.buyNowSection.processingParams.map((param, idx) => (
              <motion.div
                key={idx}
                className="px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full text-sm font-medium text-orange-300"
                whileHover={{ scale: 1.05, borderColor: 'rgba(255, 122, 0, 0.6)' }}
              >
                {param}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
