import { ReactNode, useState } from 'react'
import Navigation from './Navigation'
import AnimatedBackground from '../home/AnimatedBackground'
import ThemeToggle from './ThemeToggle'
import { useEffect } from 'react'

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
      <div className="min-h-screen">
        <AnimatedBackground />
        <Navigation />
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-6 pt-16">
          {children}
        </div>
        <ThemeToggle />
      </div>
    </>
  )
} 