import { useScroll, useTransform, MotionValue } from 'framer-motion'
import { useEffect, useState } from 'react'

export function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance])
}

export function useParallaxScroll() {
  const [elementTop, setElementTop] = useState(0)
  const [clientHeight, setClientHeight] = useState(0)
  const { scrollY } = useScroll()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setClientHeight(window.innerHeight)
    }
  }, [])

  const initial = elementTop - clientHeight
  const final = elementTop + clientHeight

  return {
    transformY: useTransform(scrollY, [initial, final], [0, -100]),
    opacity: useTransform(scrollY, [initial, final], [0.3, 1])
  }
} 