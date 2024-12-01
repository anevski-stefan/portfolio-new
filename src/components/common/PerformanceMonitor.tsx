import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function PerformanceMonitor() {
  const [fps, setFps] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') return

    let frameCount = 0
    let lastTime = performance.now()

    const updateFPS = () => {
      const currentTime = performance.now()
      frameCount++

      if (currentTime - lastTime > 1000) {
        setFps(Math.round((frameCount * 1000) / (currentTime - lastTime)))
        frameCount = 0
        lastTime = currentTime
      }

      requestAnimationFrame(updateFPS)
    }

    const frameId = requestAnimationFrame(updateFPS)
    return () => cancelAnimationFrame(frameId)
  }, [])

  if (process.env.NODE_ENV !== 'development') return null

  return (
    <motion.div
      initial={{ x: 100 }}
      animate={{ x: isVisible ? 0 : 100 }}
      className="fixed bottom-4 right-4 bg-background/80 backdrop-blur-sm p-2 rounded-lg border border-foreground/10"
    >
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="absolute -left-6 top-1/2 -translate-y-1/2 bg-background/80 p-1 rounded-l-lg border border-foreground/10"
      >
        {isVisible ? '→' : '←'}
      </button>
      <p className="text-sm font-mono">FPS: {fps}</p>
    </motion.div>
  )
} 