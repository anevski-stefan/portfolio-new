import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface ProgressiveImageProps {
  src: string
  alt: string
  className?: string
  width?: number
  height?: number
}

export default function ProgressiveImage({
  src,
  alt,
  className = '',
  width,
  height
}: ProgressiveImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [currentSrc, setCurrentSrc] = useState(
    `${src}?w=40&q=10` 
  )

  useEffect(() => {
    const img = new window.Image()
    img.src = src
    img.onload = () => {
      setCurrentSrc(src)
      setIsLoading(false)
    }
  }, [src])

  return (
    <motion.div
      animate={{
        filter: isLoading ? 'blur(20px)' : 'blur(0px)',
      }}
      transition={{ duration: 0.3 }}
      className="relative"
    >
      <Image
        src={currentSrc}
        alt={alt}
        className={className}
        width={width}
        height={height}
        quality={isLoading ? 10 : 75}
        priority={false}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </motion.div>
  )
} 