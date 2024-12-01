import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
]

export default function Navigation() {
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 h-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 z-50">
        <div className="h-full max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link 
            href="/" 
            className="text-xl font-semibold tracking-tight hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            Stefan Anevski
          </Link>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-12">
            {navItems.map(({ href, label }) => {
              const isActive = router.pathname === href
              return (
                <li key={href}>
                  <Link 
                    href={href}
                    className={`relative py-5 text-base tracking-wide font-medium transition-colors
                      ${isActive 
                        ? 'text-black dark:text-white' 
                        : 'text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white'
                      }`}
                  >
                    {label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-black dark:bg-white" />
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Mobile Menu Button */}
          <motion.button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isMenuOpen ? 'close' : 'open'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: {
                  duration: 0.2
                }
              }}
              exit={{ 
                opacity: 0,
                y: -20,
                transition: {
                  duration: 0.2
                }
              }}
              className="md:hidden absolute top-16 inset-x-4 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg overflow-hidden"
            >
              <motion.ul 
                initial="closed"
                animate="open"
                exit="closed"
                variants={{
                  open: {
                    transition: { staggerChildren: 0.07, delayChildren: 0.1 }
                  },
                  closed: {
                    transition: { staggerChildren: 0.05, staggerDirection: -1 }
                  }
                }}
                className="p-4 space-y-2"
              >
                {navItems.map(({ href, label }) => {
                  const isActive = router.pathname === href
                  return (
                    <motion.li 
                      key={href}
                      variants={{
                        open: {
                          y: 0,
                          opacity: 1,
                          transition: {
                            y: { stiffness: 1000, velocity: -100 }
                          }
                        },
                        closed: {
                          y: 20,
                          opacity: 0,
                          transition: {
                            y: { stiffness: 1000 }
                          }
                        }
                      }}
                    >
                      <Link 
                        href={href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`block px-4 py-3 rounded-lg transition-colors
                          ${isActive 
                            ? 'bg-gray-100 dark:bg-gray-800 text-black dark:text-white' 
                            : 'hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white'
                          }`}
                      >
                        {label}
                      </Link>
                    </motion.li>
                  )
                })}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      <div className="h-16" />
    </>
  )
} 