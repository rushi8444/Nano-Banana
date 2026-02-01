'use client'

import { motion } from 'framer-motion'
import { Product } from '@/data/products'

interface BuyNowSectionProps {
  product: Product
  onNextFlavor?: () => void
}

export default function BuyNowSection({ product, onNextFlavor }: BuyNowSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section className="relative py-32 bg-black overflow-hidden">
      {/* Gradient background */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ background: product.gradient }}
      />

      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Price Section */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                {product.buyNowSection.price}
              </span>
            </h2>
            <p className="text-xl text-gray-400">{product.buyNowSection.unit}</p>
          </motion.div>

          {/* Purchase Card */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-gray-900 to-gray-950 border border-orange-500/20 rounded-3xl p-8 md:p-12 mb-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Left Column */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-orange-400 mb-4">
                  Processing
                </h3>
                <ul className="space-y-3">
                  {product.buyNowSection.processingParams.map((param, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-center gap-3 text-gray-200"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <span className="w-2 h-2 rounded-full bg-orange-500" />
                      {param}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Right Column */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-orange-400 mb-4">
                  Delivery & Returns
                </h3>
                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                  >
                    <p className="text-xs text-gray-400 mb-1">Delivery Promise</p>
                    <p className="text-gray-200 text-sm leading-relaxed">
                      {product.buyNowSection.deliveryPromise}
                    </p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <p className="text-xs text-gray-400 mb-1">Return Policy</p>
                    <p className="text-gray-200 text-sm leading-relaxed">
                      {product.buyNowSection.returnPolicy}
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: '0 0 40px rgba(255, 122, 0, 0.4)' }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 px-8 py-4 bg-gradient-to-r from-orange-400 to-orange-600 text-white font-bold rounded-xl text-lg hover:shadow-2xl transition-all duration-300"
              >
                Add to Cart
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 px-8 py-4 border-2 border-orange-500/50 text-orange-400 font-bold rounded-xl text-lg hover:border-orange-500 hover:bg-orange-500/5 transition-all duration-300"
              >
                Subscribe & Save 15%
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Next Product CTA */}
          {onNextFlavor && (
            <motion.button
              variants={itemVariants}
              onClick={onNextFlavor}
              className="w-full group relative px-8 py-6 overflow-hidden rounded-2xl bg-black border-2 border-gray-700 text-center font-bold text-xl hover:border-orange-500/50 transition-all duration-300"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                whileHover={{ scale: 1.1 }}
              />
              <span className="relative z-10 text-white group-hover:text-orange-300 transition">
                Explore Next Flavor →
              </span>
            </motion.button>
          )}
        </motion.div>
      </div>
    </section>
  )
}
