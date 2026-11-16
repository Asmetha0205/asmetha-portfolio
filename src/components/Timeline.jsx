
import { motion } from 'framer-motion'
import { timeline } from '../data/content.js'

export default function Timeline() {
  return (
    <section id="timeline" className="relative py-32 bg-base">
      <div className="container-px">

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-xs text-accent-cyan tracking-[0.25em] uppercase mb-4"
        >
          Journey
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-heading mb-16"
        >
          How it's unfolded
        </motion.h2>

        <div className="relative max-w-4xl mx-auto">

          {/* Central timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2" />

          <div className="space-y-16">

            {timeline.map((entry, i) => {
              const alignRight = i % 2 === 1

              return (
                <motion.div
                  key={entry.year}
                  initial={{ opacity: 0, x: alignRight ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5 }}
                  className={`relative pl-12 md:pl-0 md:w-1/2 ${
                    alignRight
                      ? 'md:ml-auto md:pl-12'
                      : 'md:pr-12'
                  }`}
                >

                  {/* Purple timeline marker */}
                  <span
                  className="absolute left-4 md:left-auto top-1 w-3 h-3 rounded-full bg-accent-gradient shadow-[0_0_0_4px_rgba(139,92,246,0.15)]"
                  style={
                    alignRight
                      ? { left: '-1.6rem' }
                      : { right: '-1.6rem' }
                  }
                />

                  {/* Milestone card */}
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-7 text-left backdrop-blur-sm shadow-lg transition-all duration-300 hover:border-accent-cyan/30 hover:bg-white/[0.05]">

                    {/* Year */}
                    <div className="font-mono text-accent-cyan text-sm tracking-wider mb-4">
                      {entry.year}
                    </div>

                    {/* Milestone descriptions */}
                    <ul className="space-y-3 text-sm text-ink/75 leading-relaxed">
                      {entry.items.map((item, index) => (
                        <li key={index} className="flex gap-2">
                          <span className="text-accent-cyan mt-1 shrink-0">
                            ✦
                          </span>

                          <span
                            className={
                              typeof item === 'object' && item.highlight
                                ? 'font-bold text-white'
                                : ''
                            }
                          >
                            {typeof item === 'string' ? item : item.text}
                          </span>
                        </li>
                      ))}
                    </ul>

                  </div>

                </motion.div>
              )
            })}

          </div>
        </div>
      </div>
    </section>
  )
}
