import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { skillCategories } from '../data/content.js'

export default function Skills() {
  const [active, setActive] = useState(0)
  const category = skillCategories[active]

  return (
    <section id="skills" className="relative py-32 bg-base">
      <div className="container-px">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-xs text-accent-cyan tracking-[0.25em] uppercase mb-4"
        >
          Skills
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-heading mb-12"
        >
          Tools I reach for
        </motion.h2>

        <div className="flex flex-wrap gap-3 mb-12">
          {skillCategories.map((cat, i) => (
            <button
              key={cat.title}
              onClick={() => setActive(i)}
              data-cursor-hover
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                active === i
                  ? 'bg-accent-gradient text-base'
                  : 'glass text-ink-dim hover:text-ink'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className="grid md:grid-cols-2 gap-x-12 gap-y-6"
          >
            {category.skills.map((skill, i) => (
              <div key={skill.name}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-ink">{skill.name}</span>
                  <span className="font-mono text-ink-faint">{skill.level}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-accent-gradient"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: i * 0.05, ease: 'easeOut' }}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
