import { motion } from 'framer-motion'
import { Trophy } from 'lucide-react'
import { achievements } from '../data/content.js'

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-32 bg-base">
      <div className="container-px">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-xs text-accent-cyan tracking-[0.25em] uppercase mb-4"
        >
          Achievements
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-heading mb-12"
        >
          Moments worth noting
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((text, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass rounded-2xl p-6"
            >
              <Trophy size={20} className="text-accent-cyan mb-4" />
              <p className="text-sm text-ink-dim leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
