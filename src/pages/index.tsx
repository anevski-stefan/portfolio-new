import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

export default function Home() {
  const [text1, setText1] = useState('')
  const [text2, setText2] = useState('')
  const line1 = "Hello, I'm Stefan Anevski"
  const line2 = "Full Stack Software Engineer"
  const [index1, setIndex1] = useState(0)
  const [index2, setIndex2] = useState(0)
  const [showSecondLine, setShowSecondLine] = useState(false)
  const [showButtons, setShowButtons] = useState(false)

  useEffect(() => {
    if (index1 < line1.length) {
      const timeout = setTimeout(() => {
        setText1(current => current + line1.charAt(index1))
        setIndex1(index1 + 1)
      }, 85)
      return () => clearTimeout(timeout)
    } else if (!showSecondLine) {
      setTimeout(() => setShowSecondLine(true), 500)
    }
  }, [index1])

  useEffect(() => {
    if (showSecondLine && index2 < line2.length) {
      const timeout = setTimeout(() => {
        setText2(current => current + line2.charAt(index2))
        setIndex2(index2 + 1)
      }, 85)
      return () => clearTimeout(timeout)
    } else if (index2 === line2.length) {
      setTimeout(() => setShowButtons(true), 500)
    }
  }, [index2, showSecondLine])

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center justify-center min-h-[80vh]"
    >
      <div className="text-center max-w-4xl mx-auto px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-6 tracking-tight text-gray-900 dark:text-gray-100">
          {text1}
          {index1 === line1.length ? (
            <span className="text-indigo-600 dark:text-indigo-400">.</span>
          ) : (
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.7, repeat: Infinity, ease: 'easeInOut' }}
              className="inline-block ml-1 -translate-y-1 text-indigo-600 dark:text-indigo-400"
            >
              |
            </motion.span>
          )}
        </h1>
        
        {showSecondLine && (
          <div className="overflow-hidden">
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="text-xl sm:text-2xl md:text-3xl font-light tracking-wide text-gray-600 dark:text-gray-400"
            >
              {text2}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.7, repeat: Infinity, ease: 'easeInOut' }}
                className="inline-block ml-1 -translate-y-1 text-indigo-600 dark:text-indigo-400"
              >
                |
              </motion.span>
            </motion.p>
          </div>
        )}

        {showButtons && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="mt-12 flex flex-wrap justify-center gap-6"
          >
            <motion.a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-8 py-3 rounded-lg bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
            >
              <FiGithub className="text-xl" />
              <span>GitHub</span>
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-8 py-3 rounded-lg bg-[#0077B5] hover:bg-[#006399] text-white transition-colors"
            >
              <FiLinkedin className="text-xl" />
              <span>LinkedIn</span>
            </motion.a>

            <motion.a
              href="mailto:your.email@example.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-8 py-3 rounded-lg border-2 border-gray-900 dark:border-gray-100 text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
            >
              <FiMail className="text-xl" />
              <span>Contact</span>
            </motion.a>
          </motion.div>
        )}
      </div>
    </motion.section>
  )
}
