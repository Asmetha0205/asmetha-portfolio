import { motion } from 'framer-motion'
import useCounter from '../hooks/useCounter.js'
import { about } from '../data/content.js'

function Stat({ label, value, decimals = 0, suffix = '' }) {
  const [ref, count] = useCounter(value, { decimals })
  return (
    <div ref={ref} className="glass rounded-2xl px-6 py-8 text-center">
      <div className="font-display text-4xl font-semibold text-gradient">
        {count.toFixed(decimals)}
        {suffix}
      </div>
      <div className="mt-2 text-xs font-mono uppercase tracking-widest text-ink-faint">{label}</div>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="relative py-32 bg-base-alt">
      <div className="container-px grid lg:grid-cols-[1fr_1fr] gap-16 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-xs text-accent-cyan tracking-[0.25em] uppercase mb-4"
          >
            About
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-heading mb-8"
          >
            The person behind the code
          </motion.h2>

          <div className="space-y-5 text-ink-dim leading-relaxed">
            {about.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                {p}
              </motion.p>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5">
          {about.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Stat {...stat} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
