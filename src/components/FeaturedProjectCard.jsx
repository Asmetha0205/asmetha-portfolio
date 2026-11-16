import { motion } from 'framer-motion'
import { Github } from 'lucide-react'

/**
 * Large alternating showcase card for featured projects.
 * Even-indexed: image right / text left.
 * Odd-indexed:  image left  / text right.
 */
export default function FeaturedProjectCard({ project, index }) {
  const isEven = index % 2 === 0

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: 0.05 }}
      className="relative rounded-3xl overflow-hidden border border-white/[0.08] bg-base-raised"
    >
      {/* per-card accent tint */}
      <div
        className={`absolute inset-0 pointer-events-none ${
          isEven
            ? 'bg-gradient-to-br from-accent-blue/[0.06] via-transparent to-accent-purple/[0.06]'
            : 'bg-gradient-to-br from-accent-purple/[0.06] via-transparent to-accent-cyan/[0.06]'
        }`}
      />
      {/* glow border on hover */}
      <div className="glow-border absolute inset-0 rounded-3xl pointer-events-none" />

      <div
        className={`relative grid gap-0 ${
          isEven ? 'lg:grid-cols-[1.1fr_0.9fr]' : 'lg:grid-cols-[0.9fr_1.1fr]'
        }`}
      >
        {/* ── text column ── */}
        <div
          className={`flex flex-col justify-center p-8 md:p-10 lg:p-12 ${
            isEven ? 'lg:order-1' : 'lg:order-2'
          }`}
        >
          {/* index indicator */}
          <span className="font-mono text-xs text-accent-cyan tracking-[0.25em] uppercase mb-4">
            Project {String(index + 1).padStart(2, '0')}
          </span>

          <h3 className="font-display text-2xl md:text-3xl font-semibold leading-tight text-ink mb-5">
            {project.title}
          </h3>

          <p className="text-sm md:text-[0.95rem] text-ink leading-[1.75] mb-7 opacity-80">
            {project.description}
          </p>

          {/* tech badges */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs font-mono px-3 py-1 rounded-full border border-white/20 text-ink/70 bg-white/[0.06]"
              >
                {t}
              </span>
            ))}
          </div>

          {/* action button */}
          {project.github ? (
            <div className="flex flex-wrap gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                data-cursor-hover
                className="inline-flex items-center gap-2 text-sm font-medium text-ink px-5 py-2.5 rounded-full border border-white/20 bg-white/[0.05] hover:bg-white/10 hover:border-accent-cyan/50 transition-all"
              >
                <Github size={14} /> GitHub Repository
              </a>
            </div>
          ) : null}
        </div>

        {/* ── image column ── */}
        <div
          className={`relative min-h-[240px] md:min-h-[300px] lg:min-h-0 ${
            isEven ? 'lg:order-2' : 'lg:order-1'
          } group overflow-hidden`}
        >
          {/* gradient seam */}
          <div
            className={`absolute inset-y-0 w-20 z-10 pointer-events-none ${
              isEven
                ? 'left-0 bg-gradient-to-r from-base-raised to-transparent'
                : 'right-0 bg-gradient-to-l from-base-raised to-transparent'
            }`}
          />

          <img
            src={project.cover}
            alt={`${project.title} cover artwork`}
            loading="lazy"
            decoding="async"
            width="800"
            height="450"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* hover glow */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 shadow-[inset_0_0_60px_10px_rgba(139,92,246,0.25)] pointer-events-none" />
        </div>
      </div>
    </motion.article>
  )
}
