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
      <nav className="fixed top-0 left-0 right-0 h-16 bg-background dark:bg-[#171717] border-b border-foreground/10 dark:border-[#171717] z-50">
        <div className="h-full max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link 
            href="/" 
            className="text-xl font-semibold tracking-tight text-foreground hover:opacity-80 transition-opacity"
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
                        ? 'text-foreground' 
                        : 'text-foreground/60 hover:text-foreground'
                      }`}
                  >
                    {label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-foreground" />
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Mobile Menu Button */}
          <motion.button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-foreground/5 rounded-lg transition-colors"
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isMenuOpen ? 'close' : 'open'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="text-foreground"
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
              className="md:hidden absolute top-16 inset-x-4 bg-background border border-foreground/10 rounded-2xl shadow-lg overflow-hidden"
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
                            ? 'bg-foreground/5 text-foreground' 
                            : 'hover:bg-foreground/5 text-foreground/60 hover:text-foreground'
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
    </>
  )
} 