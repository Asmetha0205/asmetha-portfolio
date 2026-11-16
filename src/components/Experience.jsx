
import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin } from 'lucide-react'

const experiences = [
  {
    role: 'Software Development Intern',
    company: 'Beaumont Solutions LLC',
    duration: 'July – September 2026',
    location: 'Remote',

    description:
      'Gained practical experience in AI-assisted software development through website debugging, code analysis, and technical research. Worked with Claude Code to investigate website behaviour, reproduce expected functionality, and support development workflows.',

    highlights: [
      'Debugged a website clone by analysing recorded user-interaction replays and reproducing expected behaviour',
      'Used Claude Code for code analysis, website debugging, and AI-assisted development workflows',
      'Researched and presented technical topics',
    ],

    tags: [
      'Claude Code',
      'Website Debugging',
      'Code Analysis',
      'AI-Assisted Development',
      'Technical Research',
    ],
  },
]

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-base overflow-hidden scroll-mt-24"    
      >
      {/* Ambient background accents */}
      <div className="absolute top-0 right-0 w-[28rem] h-[28rem] rounded-full bg-accent-purple/[0.06] blur-[110px] pointer-events-none" />

      <div className="absolute bottom-0 left-0 w-[22rem] h-[22rem] rounded-full bg-accent-blue/[0.05] blur-[100px] pointer-events-none" />

      <div className="container-px relative">

        {/* Section heading */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-xs text-accent-cyan tracking-[0.25em] uppercase mb-4"
        >
          Experience · Professional Journey
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-heading mb-5"
        >
          Where I’ve made an impact.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="!text-slate-400 text-sm md:text-base leading-relaxed max-w-2xl mb-12"
        >
          Gaining hands-on experience in professional software engineering —
          building, debugging, and collaborating in real-world environments.
        </motion.p>

        {/* Experience card */}
        <div className="w-full">

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="relative w-full rounded-2xl border border-white/[0.09] bg-base-raised overflow-hidden glow-border"
            >

              {/* Gradient accent */}
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-accent-gradient" />

              <div className="grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr]">

                {/* LEFT COLUMN: Internship details */}
                <div className="relative p-6 md:p-9 lg:p-11 flex flex-col justify-start">
                  {/* Timeline marker */}
                  <div className="flex items-center gap-3 mb-8">
                    <span className="w-3 h-3 rounded-full bg-accent-purple shadow-[0_0_15px_rgba(139,92,246,0.7)]" />

                    <span className="h-px flex-1 bg-gradient-to-r from-accent-purple/50 to-transparent" />
                  </div>

                  {/* Experience label */}
                  <div className="flex items-center gap-2 mb-4">
                    <Briefcase
                      size={17}
                      className="text-accent-cyan shrink-0"
                    />

                    <span className="font-mono text-xs tracking-[0.18em] uppercase text-accent-cyan">
                      Professional Experience
                    </span>
                  </div>

                  {/* Role */}
                  <h3 className="font-display text-2xl md:text-3xl lg:text-[2rem] font-semibold text-white leading-tight mb-3">
                    {exp.role}
                  </h3>

                  {/* Company */}
                  <p className="font-display text-lg md:text-xl font-medium text-accent-cyan mb-7">
                    {exp.company}
                  </p>

                  {/* Duration and location */}
                  <div className="flex flex-wrap gap-2">

                    <span className="inline-flex items-center gap-2 text-xs font-mono text-slate-300 bg-white/[0.05] border border-white/10 px-3 py-2 rounded-full">
                      <Calendar
                        size={13}
                        className="text-accent-cyan"
                      />
                      {exp.duration}
                    </span>

                    <span className="inline-flex items-center gap-2 text-xs font-mono text-slate-300 bg-white/[0.05] border border-white/10 px-3 py-2 rounded-full">
                      <MapPin
                        size={13}
                        className="text-accent-purple"
                      />
                      {exp.location}
                    </span>

                  </div>
                </div>

                {/* RIGHT COLUMN: Description and contributions */}
                <div className="relative p-6 md:p-9 lg:p-11 md:border-l border-t md:border-t-0 border-white/[0.08] flex flex-col justify-start">
                  {/* Overview */}
                  <div className="mb-8">

                    <p className="font-mono text-xs text-accent-cyan tracking-[0.22em] uppercase mb-4">
                      Overview
                    </p>

                    <p className="!text-slate-300 text-sm md:text-base leading-relaxed">
                      {exp.description}
                    </p>

                  </div>

                  {/* Key contributions */}
                  <div className="mb-7">

                    <p className="font-mono text-xs text-accent-cyan tracking-[0.22em] uppercase mb-5">
                      Key Contributions
                    </p>

                    <ul className="space-y-4">

                      {exp.highlights.map((item, index) => (
                        <li
                          key={item}
                          className="flex items-start gap-4 text-sm md:text-[15px] text-slate-300 leading-relaxed"
                        >
                          <span className="font-mono text-xs text-accent-purple pt-0.5 shrink-0">
                            0{index + 1}
                          </span>

                          <span>{item}</span>
                        </li>
                      ))}

                    </ul>

                  </div>

                  {/* Technology and skill tags */}
                  <div className="flex flex-wrap gap-2 pt-5 border-t border-white/[0.08]">

                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-3 py-1.5 rounded-full border border-white/15 text-slate-300 bg-white/[0.04] hover:border-accent-cyan/50 hover:text-accent-cyan transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}

                  </div>

                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}
