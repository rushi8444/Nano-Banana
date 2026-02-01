'use client'

import { motion } from 'framer-motion'
import { Product } from '@/data/products'

interface ProductDetailsProps {
  product: Product
}

export default function ProductDetails({ product }: ProductDetailsProps) {
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
    <section className="relative py-24 bg-gradient-to-b from-black to-gray-950 overflow-hidden">
      {/* Gradient accent */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ background: product.gradient }}
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
        >
          {/* Left: Details */}
          <motion.div variants={itemVariants}>
            <h3 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              {product.detailsSection.title}
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              {product.detailsSection.description}
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 gap-4 mb-8">
              {product.features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="flex items-center gap-4 p-4 bg-gradient-to-r from-orange-500/10 to-transparent rounded-lg border border-orange-500/20 hover:border-orange-500/40 transition"
                >
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-orange-400 to-orange-600" />
                  <span className="font-medium text-gray-200">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 gap-4"
          >
            {product.stats.map((stat, idx) => (
              <motion.div
                key={idx}
                className="p-6 bg-gray-900/50 backdrop-blur rounded-2xl border border-orange-500/10 hover:border-orange-500/30 transition"
                whileHover={{ y: -5 }}
              >
                <p className="text-gray-400 text-sm font-medium mb-2">{stat.label}</p>
                <p className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                  {stat.val}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
