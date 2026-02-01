'use client'

import { useEffect, useRef, useState } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'
import { Product } from '@/data/products'

interface ProductBottleScrollProps {
  product: Product
}

// Smooth easing function for frame interpolation
const easeInOutCubic = (t: number) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2

export default function ProductBottleScroll({ product }: ProductBottleScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [frameCount, setFrameCount] = useState(0)
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const imagesRef = useRef<Map<number, HTMLImageElement>>(new Map())
  const rafRef = useRef<number | null>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  // Preload images
  useEffect(() => {
    const preloadImages = async () => {
      const frameImages = new Map<number, HTMLImageElement>()
      const framesToLoad = 200

      for (let i = 1; i <= framesToLoad; i++) {
        const img = new Image()
        img.src = `/images/mango/ezgif-frame-${String(i).padStart(3, '0')}.jpg`
        img.loading = 'eager'
        await new Promise((resolve) => {
          img.onload = resolve
          img.onerror = resolve
        })
        frameImages.set(i - 1, img)
      }

      imagesRef.current = frameImages
      setImagesLoaded(true)
    }

    preloadImages()
  }, [product])

  // Draw canvas
  useEffect(() => {
    if (!canvasRef.current || !imagesLoaded) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const containerWidth = containerRef.current?.clientWidth || window.innerWidth
    const containerHeight = window.innerHeight

    canvas.width = containerWidth
    canvas.height = containerHeight

    // Enable high-quality rendering
    ctx.imageSmoothingEnabled = true
    ctx.imageSmoothingQuality = 'high'

    const unsubscribe = scrollYProgress.onChange((progress) => {
      // Cancel any pending animation frame
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }

      // Use requestAnimationFrame for smooth rendering
      rafRef.current = requestAnimationFrame(() => {
        // Calculate frame index with smooth interpolation
        const exactFrameIndex = progress * 199.99 // Allows for smooth interpolation
        const currentFrameIndex = Math.floor(exactFrameIndex)
        const nextFrameIndex = Math.min(currentFrameIndex + 1, 199)
        const interpolation = exactFrameIndex - currentFrameIndex
        
        // Clamp the current frame to valid range
        const clampedFrameIndex = Math.max(0, Math.min(currentFrameIndex, 199))
        
        setFrameCount(clampedFrameIndex)

        const currentImage = imagesRef.current.get(clampedFrameIndex)
        const nextImage = imagesRef.current.get(nextFrameIndex)

        if (currentImage && currentImage.complete) {
          ctx.clearRect(0, 0, canvas.width, canvas.height)

          const imgAspect = currentImage.width / currentImage.height
          const canvasAspect = canvas.width / canvas.height

          let drawWidth = canvas.width
          let drawHeight = canvas.height
          let offsetX = 0
          let offsetY = 0

          if (imgAspect > canvasAspect) {
            drawWidth = canvas.height * imgAspect
            offsetX = (canvas.width - drawWidth) / 2
          } else {
            drawHeight = canvas.width / imgAspect
            offsetY = (canvas.height - drawHeight) / 2
          }

          // Draw current frame
          ctx.globalAlpha = 1
          ctx.drawImage(currentImage, offsetX, offsetY, drawWidth, drawHeight)

          // Blend with next frame for smoother transition
          if (interpolation > 0.05 && nextImage && nextImage.complete) {
            ctx.globalAlpha = interpolation * 0.4 // Subtle blending
            ctx.drawImage(nextImage, offsetX, offsetY, drawWidth, drawHeight)
            ctx.globalAlpha = 1 // Reset
          }
        }
      })
    })

    return () => {
      unsubscribe()
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [imagesLoaded, scrollYProgress])

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = canvasRef.current.parentElement?.clientWidth || window.innerWidth
        canvasRef.current.height = window.innerHeight
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div ref={containerRef} className="h-[600vh] w-full relative">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">
        <canvas
          ref={canvasRef}
          className="w-full h-full object-contain"
          style={{ display: 'block' }}
        />

        {/* Frame counter (debug) */}
        {/* <div className="absolute bottom-8 right-8 text-white text-sm font-light opacity-50 pointer-events-none">
          {frameCount + 1} / 200
        </div> */}
      </div>
    </div>
  )
}
