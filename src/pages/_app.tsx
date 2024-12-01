import type { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'
import Layout from '@/components/layout/Layout'
import PageTransition from '@/components/layout/PageTransition'
import { ThemeProvider } from '@/context/ThemeContext'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  if (isLoading) return null

  return (
    <ThemeProvider>
      <Layout>
        <AnimatePresence mode="wait">
          <PageTransition key={router.asPath}>
            <Component {...pageProps} />
          </PageTransition>
        </AnimatePresence>
      </Layout>
    </ThemeProvider>
  )
}
