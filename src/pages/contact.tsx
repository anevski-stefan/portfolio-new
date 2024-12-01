import ContactForm from '@/components/contact/ContactForm'
import { motion } from 'framer-motion'
import SEO from '@/components/layout/SEO'

export default function Contact() {
  return (
    <>
      <SEO title="Contact - Stefan Anevski" />
      <section className="py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl font-bold mb-4">Get in Touch</h1>
          <p className="text-foreground/80 max-w-md mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>

        <ContactForm />
      </section>
    </>
  )
} 