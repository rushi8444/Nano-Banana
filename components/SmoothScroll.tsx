'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'

export function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: true,
      touchMultiplier: 2,
      wheelMultiplier: 1,
    })

    let animationId: number

    function raf(time: number) {
      lenis.raf(time)
      animationId = requestAnimationFrame(raf)
    }

    animationId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(animationId)
      lenis.destroy()
    }
  }, [])

  return null
}
