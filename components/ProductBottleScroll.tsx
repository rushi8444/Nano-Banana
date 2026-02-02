'use client'

import { useEffect, useRef } from 'react'
import { useScroll } from 'framer-motion'
import { Product } from '@/data/products'

interface ProductBottleScrollProps {
  product: Product
}

export default function ProductBottleScroll({ product }: ProductBottleScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const lastTimeRef = useRef(0)
  const lastProgressRef = useRef(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  // Sync video with scroll - super smooth version
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    let animationFrameId: number

    const syncVideoWithScroll = () => {
      scrollYProgress.get() // Get current scroll progress
      
      // We'll update using a direct listener instead
      const unsubscribe = scrollYProgress.onChange((progress) => {
        if (video.readyState >= 2) { // HAVE_CURRENT_DATA or better
          const targetTime = Math.max(0, Math.min(progress * video.duration, video.duration - 0.01))
          
          // Only update if there's meaningful change to avoid constant seeking
          if (Math.abs(video.currentTime - targetTime) > 0.05) {
            video.currentTime = targetTime
          }
        }
      })

      return unsubscribe
    }

    const unsubscribe = syncVideoWithScroll()

    return () => {
      unsubscribe?.()
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [scrollYProgress])

  return (
    <div ref={containerRef} className="h-[600vh] w-full relative">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">
        <video
          ref={videoRef}
          src={`${product.folderPath}/animation.mp4`}
          className="w-full h-full object-cover"
          style={{ display: 'block' }}
          muted
          playsInline
          preload="auto"
          crossOrigin="anonymous"
          onPlay={(e) => {
            e.preventDefault()
            videoRef.current?.pause()
          }}
        />
      </div>
    </div>
  )
}
