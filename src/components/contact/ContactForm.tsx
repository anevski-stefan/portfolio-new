import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiUser, FiSend } from 'react-icons/fi'
import emailjs from '@emailjs/browser'
import { emailConfig } from '@/utils/email'

const MAX_SUBMISSIONS = 10; // Maximum allowed submissions
const TIME_FRAME = 60 * 60 * 1000; // 1 hour in milliseconds

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    honeypot: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [isRateLimited, setIsRateLimited] = useState(false)

  useEffect(() => {
    // Check local storage for submission data
    const submissionData: number[] = JSON.parse(localStorage.getItem('submissionData') || '[]');
    const now = Date.now();

    // Filter out submissions that are older than the time frame
    const recentSubmissions = submissionData.filter((timestamp: number) => now - timestamp < TIME_FRAME);

    // Update local storage with recent submissions
    localStorage.setItem('submissionData', JSON.stringify(recentSubmissions));

    // Check if the user is rate-limited
    if (recentSubmissions.length >= MAX_SUBMISSIONS) {
      setIsRateLimited(true);
      // Disable the button for 1 hour
      setTimeout(() => setIsRateLimited(false), TIME_FRAME);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (isRateLimited) {
      alert('You have reached the maximum number of submissions. Please try again later.');
      return;
    }

    setIsSubmitting(true)
    setStatus('idle')

    if (formData.honeypot) {
      setIsSubmitting(false)
      return;
    }

    try {
      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
          subject: `Portfolio Contact: Message from ${formData.name} (${formData.email})`
        },
        emailConfig.publicKey
      )

      setStatus('success')
      setFormData({ name: '', email: '', message: '', honeypot: '' })

      // Update local storage with the new submission timestamp
      const submissionData: number[] = JSON.parse(localStorage.getItem('submissionData') || '[]');
      submissionData.push(Date.now());
      localStorage.setItem('submissionData', JSON.stringify(submissionData));
    } catch {
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto space-y-6"
    >
      <div>
        <label className="flex items-center gap-2 mb-2 text-foreground/80">
          <FiUser />
          Name
        </label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          className="w-full p-3 rounded-lg border border-foreground/10 bg-background focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="flex items-center gap-2 mb-2 text-foreground/80">
          <FiMail />
          Email
        </label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          className="w-full p-3 rounded-lg border border-foreground/10 bg-background focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="flex items-center gap-2 mb-2 text-foreground/80">
          Message
        </label>
        <textarea
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
          rows={5}
          className="w-full p-3 rounded-lg border border-foreground/10 bg-background focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {status === 'success' && (
        <div className="p-4 bg-green-100 text-green-700 rounded-lg">
          Message sent successfully!
        </div>
      )}

      {status === 'error' && (
        <div className="p-4 bg-red-100 text-red-700 rounded-lg">
          Failed to send message. Please try again.
        </div>
      )}

      <motion.button
        type="submit"
        disabled={isSubmitting || isRateLimited}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full p-3 rounded-lg bg-foreground text-background flex items-center justify-center gap-2 disabled:opacity-50"
      >
        {isSubmitting ? 'Sending...' : <><FiSend /> Send Message</>}
      </motion.button>
    </motion.form>
  )
} 