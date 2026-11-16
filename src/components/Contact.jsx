
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, MapPin, Send, Check, AlertCircle } from 'lucide-react'
import { profile } from '../data/content.js'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mwpbojwj'

const infoItems = [
  {
    icon: Mail,
    label: 'Email',
    value: profile.email,
    href: `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}`,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: profile.linkedinHandle,
    href: profile.linkedin,
  },
  {
    icon: Github,
    label: 'GitHub',
    value: profile.githubHandle,
    href: profile.github,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: profile.location,
    href: null,
  },
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (status === 'submitting') return

    setStatus('submitting')

    try {
      const formData = new FormData(e.currentTarget)

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      })

      const result = await response.json()

      if (response.ok) {
        setStatus('success')
        setForm({
          name: '',
          email: '',
          subject: '',
          message: '',
        })
      } else {
        console.error('Formspree error:', result)
        setStatus('error')
      }
    } catch (error) {
      console.error('Contact form error:', error)
      setStatus('error')
    }
  }

  return (
    <section
      id="contact"
      className="relative py-32 bg-base-alt overflow-hidden"
    >
      {/* Ambient background */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-accent-purple/15 rounded-full blur-[100px] animate-float-slow" />

      <div className="absolute bottom-10 left-10 w-72 h-72 bg-accent-blue/15 rounded-full blur-[100px] animate-float-slow [animation-delay:-4s]" />

      <div className="container-px relative">

        {/* Section heading */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-xs text-accent-cyan tracking-[0.25em] uppercase mb-4"
        >
          Contact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-heading mb-12"
        >
          Let's build something
        </motion.h2>

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12">

          {/* Contact information */}
          <div className="space-y-4">

            {infoItems.map(({ icon: Icon, label, value, href }, i) => {
              const content = (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={href ? { x: 6 } : {}}
                  className="glass rounded-2xl p-5 flex items-center gap-4"
                >
                  <div className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center text-accent-cyan shrink-0">
                    <Icon size={18} />
                  </div>

                  <div className="min-w-0">
                    <div className="text-xs font-mono uppercase tracking-widest text-ink-faint">
                      {label}
                    </div>

                    <div className="text-sm text-ink break-all">
                      {value}
                    </div>
                  </div>
                </motion.div>
              )

              return href ? (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor-hover
                >
                  {content}
                </a>
              ) : (
                <div key={label}>{content}</div>
              )
            })}

          </div>

          {/* Contact form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8 space-y-5"
          >

            {/* Name */}
            <div>
              <label
                htmlFor="contact-name"
                className="text-xs font-mono uppercase tracking-widest text-ink-faint"
              >
                Name
              </label>

              <input
                id="contact-name"
                name="name"
                required
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                type="text"
                placeholder="Your name"
                disabled={status === 'submitting'}
                className="mt-2 w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-ink outline-none focus:border-accent-cyan/60 transition-colors disabled:opacity-60"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="contact-email"
                className="text-xs font-mono uppercase tracking-widest text-ink-faint"
              >
                Email
              </label>

              <input
                id="contact-email"
                name="_replyto"
                required
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                type="email"
                placeholder="you@example.com"
                disabled={status === 'submitting'}
                className="mt-2 w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-ink outline-none focus:border-accent-cyan/60 transition-colors disabled:opacity-60"
              />
            </div>

            <div>
              <label
                htmlFor="contact-subject"
                className="text-xs font-mono uppercase tracking-widest text-ink-faint"
              >
                Subject
              </label>

              <input
                id="contact-subject"
                name="subject"
                required
                value={form.subject}
                onChange={(e) =>
                  setForm({ ...form, subject: e.target.value })
                }
                type="text"
                placeholder="What would you like to discuss?"
                disabled={status === 'submitting'}
                className="mt-2 w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-ink outline-none focus:border-accent-cyan/60 transition-colors"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="contact-message"
                className="text-xs font-mono uppercase tracking-widest text-ink-faint"
              >
                Message
              </label>

              <textarea
                id="contact-message"
                name="message"
                required
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                rows={4}
                placeholder="Tell me about your project..."
                disabled={status === 'submitting'}
                className="mt-2 w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-ink outline-none focus:border-accent-cyan/60 transition-colors resize-none disabled:opacity-60"
              />
            </div>

            {/* Success message */}
            {status === 'success' && (
              <div
                role="status"
                className="flex items-center gap-2 text-sm text-green-400"
              >
                <Check size={17} />
                Thank you! Your message has been submitted successfully.
              </div>
            )}

            {/* Error message */}
            {status === 'error' && (
              <div
                role="alert"
                className="flex items-start gap-2 text-sm text-red-400"
              >
                <AlertCircle size={17} className="shrink-0 mt-0.5" />
                Something went wrong. Please try again or email me directly.
              </div>
            )}

            {/* Submit button */}
            <button
              type="submit"
              data-cursor-hover
              disabled={status === 'submitting'}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-accent-gradient text-base font-medium text-sm hover:scale-[1.01] active:scale-[0.99] transition-transform disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {status === 'submitting' ? (
                <>
                  <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                  Sending...
                </>
              ) : status === 'success' ? (
                <>
                  <Check size={16} />
                  Message Sent
                </>
              ) : (
                <>
                  <Send size={16} />
                  Send Message
                </>
              )}
            </button>

          </motion.form>
        </div>
      </div>
    </section>
  )
}
