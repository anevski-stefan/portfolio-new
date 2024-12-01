import { ReactNode, useState } from 'react'
import Navigation from './Navigation'
import AnimatedBackground from '../home/AnimatedBackground'
import dynamic from 'next/dynamic'
import { useEffect } from 'react'

const DynamicPerformanceMonitor = dynamic(() => import('../common/PerformanceMonitor'), { ssr: false })

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <>
      {isMounted && (
        <>
          <DynamicPerformanceMonitor />
        </>
      )}
      <div className="min-h-screen">
        <AnimatedBackground />
        <Navigation />
        <div className="transition-all duration-300 ml-[64px] lg:ml-[256px] min-h-screen">
          {children}
        </div>
      </div>
    </>
  )
} 