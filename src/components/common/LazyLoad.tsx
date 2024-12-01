import { ReactNode, Suspense } from 'react'
import { motion } from 'framer-motion'

interface LazyLoadProps {
  children: ReactNode
}

function LoadingFallback() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full h-[200px] bg-foreground/5 rounded-lg animate-pulse"
    />
  )
}

export default function LazyLoad({ children }: LazyLoadProps) {
  return (
    <Suspense fallback={<LoadingFallback />}>
      {children}
    </Suspense>
  )
} 