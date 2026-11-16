import { motion } from 'framer-motion'
import { featuredProjects, hackathonProjects, additionalProjects } from '../data/content.js'
import FeaturedProjectCard from './FeaturedProjectCard.jsx'
import HackathonCard from './HackathonCard.jsx'
import AdditionalProjectCard from './AdditionalProjectCard.jsx'

// ─── Shared section-label component ─────────────────────────────────────────
// primary=true → full section-heading size; false → slightly smaller sub-heading
function SectionLabel({ eyebrow, heading, primary = false }) {
  return (
    <div className="mb-12">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-mono text-xs text-accent-cyan tracking-[0.25em] uppercase mb-4"
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={primary ? 'section-heading text-ink' : 'font-display font-semibold tracking-tight text-[clamp(1.6rem,4vw,2.4rem)] text-ink'}
      >
        {heading}
      </motion.h2>
    </div>
  )
}

// ─── Thin divider between sections ──────────────────────────────────────────
function SectionDivider() {
  return (
    <motion.div
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent origin-left"
    />
  )
}

// ─── Main Projects section ───────────────────────────────────────────────────
export default function Projects() {
  return (
    <section id="projects" className="relative bg-base-alt overflow-hidden">
      {/* Ambient blobs shared across the whole section */}
      <div className="absolute top-0 left-1/4 w-[32rem] h-[32rem] rounded-full bg-accent-purple/[0.07] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-[28rem] h-[28rem] rounded-full bg-accent-blue/[0.06] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[24rem] h-[24rem] rounded-full bg-accent-cyan/[0.05] blur-[120px] pointer-events-none" />

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION A — Featured Projects
      ═══════════════════════════════════════════════════════════════════ */}
      <div className="container-px py-32">
        <SectionLabel eyebrow="Featured Work" heading="Projects" primary />

        <div className="flex flex-col gap-8">
          {featuredProjects.map((project, i) => (
            <FeaturedProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>

      <SectionDivider />

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION B — Hackathon Projects
      ═══════════════════════════════════════════════════════════════════ */}
      <div className="container-px py-24">
        <SectionLabel eyebrow="Competitive Innovation" heading="Hackathons & Innovation" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hackathonProjects.map((project, i) => (
            <HackathonCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>

      <SectionDivider />

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION C — Additional Projects
      ═══════════════════════════════════════════════════════════════════ */}
      <div className="container-px py-24 pb-32">
        <SectionLabel eyebrow="More Work" heading="Additional Projects" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {additionalProjects.map((project, i) => (
            <AdditionalProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
