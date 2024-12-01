import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion, AnimatePresence } from 'framer-motion'
import { FiHome, FiUser, FiCode, FiMail, FiChevronLeft } from 'react-icons/fi'
import { useState } from 'react'

const navItems = [
  { href: '/', label: 'Home', icon: FiHome },
  { href: '/about', label: 'About', icon: FiUser },
  { href: '/projects', label: 'Projects', icon: FiCode },
  { href: '/contact', label: 'Contact', icon: FiMail },
]

export default function Navigation() {
  const router = useRouter()
  const [isExpanded, setIsExpanded] = useState(true)

  return (
    <motion.nav 
      initial={false}
      animate={{ 
        width: isExpanded ? 256 : 64,
        transition: { duration: 0.3, ease: "easeInOut" }
      }}
      className="fixed left-0 top-0 h-screen bg-white/80 dark:bg-black/80 backdrop-blur-lg border-r border-gray-200 dark:border-gray-800 z-50 overflow-hidden"
    >
      <div className="flex flex-col h-full py-8 w-64">
        <div className="px-6 mb-8 flex items-center justify-between">
          <AnimatePresence mode="wait">
            {isExpanded && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-xl font-semibold"
              >
                SA
              </motion.span>
            )}
          </AnimatePresence>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
          >
            <motion.div
              animate={{ rotate: isExpanded ? 0 : 180 }}
              transition={{ duration: 0.3 }}
            >
              <FiChevronLeft size={20} />
            </motion.div>
          </motion.button>
        </div>
        
        <ul className="flex-1 px-3">
          {navItems.map(({ href, label, icon: Icon }) => {
            const isActive = router.pathname === href
            return (
              <li key={href} className="mb-2">
                <Link 
                  href={href}
                  className={`flex items-center px-3 py-3 rounded-lg transition-colors whitespace-nowrap
                    ${isActive 
                      ? 'bg-gray-100 dark:bg-gray-800 text-black dark:text-white' 
                      : 'hover:bg-gray-50 dark:hover:bg-gray-900 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white'
                    }`}
                >
                  <Icon size={20} />
                  <AnimatePresence mode="wait">
                    {isExpanded && (
                      <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.2 }}
                        className="ml-4"
                      >
                        {label}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </motion.nav>
  )
} 