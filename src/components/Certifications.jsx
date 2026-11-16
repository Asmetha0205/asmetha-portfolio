import { motion } from 'framer-motion'
import { Award } from 'lucide-react'
import { certifications } from '../data/content.js'

function CertCard({ cert, i }) {
  const clickable = Boolean(cert.url)

  const card = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: (i % 3) * 0.08 }}
      whileHover={{ y: -6 }}
      className={`group relative glass glow-border rounded-2xl p-6 flex items-start gap-4 h-full transition-shadow duration-500 ${
        clickable ? 'hover:shadow-[0_0_40px_-12px_rgba(139,92,246,0.55)]' : ''
      }`}
    >
      <div className="w-11 h-11 rounded-xl bg-accent-gradient flex items-center justify-center shrink-0">
        <Award size={18} className="text-base" />
      </div>
      <div className="min-w-0">
        <h3 className="font-medium leading-snug">{cert.name}</h3>
        <p className="text-xs text-ink-faint font-mono mt-1">{cert.issuer}</p>
        {cert.meta && <p className="text-xs text-ink-faint font-mono mt-1">{cert.meta}</p>}
        {clickable && (
          <span className="inline-block mt-3 text-xs font-mono text-accent-cyan opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
            View Certificate ↗
          </span>
        )}
      </div>
    </motion.div>
  )

  if (!clickable) return card

  return (
    <a
      href={cert.url}
      target="_blank"
      rel="noreferrer"
      data-cursor-hover
      aria-label={`View certificate: ${cert.name}`}
      className="block h-full rounded-2xl"
    >
      {card}
    </a>
  )
}

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-32 bg-base-alt">
      <div className="container-px">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-xs text-accent-cyan tracking-[0.25em] uppercase mb-4"
        >
          Certifications
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-heading mb-12"
        >
          Credentials earned
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, i) => (
            <CertCard key={cert.name} cert={cert} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
