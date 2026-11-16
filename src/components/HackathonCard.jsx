import { motion } from 'framer-motion'
import { Github, Trophy } from 'lucide-react'

/**
 * Compact card for hackathon / innovation projects.
 * Shows the hackathon event as a badge above the title.
 */
export default function HackathonCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      whileHover={{ y: -6 }}
      className="rounded-2xl overflow-hidden flex flex-col group border border-white/[0.08] bg-base-raised glow-border"
    >
      {/* cover image */}
      <div className="relative h-40 m-2 rounded-xl overflow-hidden bg-base">
        <img
          src={project.cover}
          alt={`${project.title} cover artwork`}
          loading="lazy"
          decoding="async"
          width="800"
          height="450"
          className="w-full h-full object-cover rounded-xl transition-transform duration-700 ease-out group-hover:scale-110"
        />
        {/* glow on hover */}
        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 shadow-[inset_0_0_40px_8px_rgba(139,92,246,0.3)]" />
        <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-base-raised via-transparent to-transparent" />
      </div>

      <div className="px-5 pb-5 pt-2 flex flex-col flex-1">
        {/* hackathon badge */}
        <div className="flex items-center gap-2 mb-3">
          <Trophy size={12} className="text-accent-cyan shrink-0" />
          <span className="font-mono text-[11px] font-medium text-accent-cyan tracking-widest uppercase">
            {project.hackathon}
          </span>
        </div>

        <h3 className="font-display text-lg font-semibold leading-snug text-ink mb-1">
          {project.title}
        </h3>

        {project.subtitle && (
          <p className="text-xs font-mono text-ink/50 mb-3">{project.subtitle}</p>
        )}

        <p className="text-sm text-ink/75 leading-relaxed mb-5 flex-1">
          {project.description}
        </p>

        {/* tech badges */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[11px] font-mono px-2.5 py-1 rounded-full border border-white/15 text-ink/65 bg-white/[0.05]"
            >
              {t}
            </span>
          ))}
        </div>

        {project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            data-cursor-hover
            className="mt-auto inline-flex items-center justify-center gap-2 text-xs font-medium text-ink px-4 py-2.5 rounded-full border border-white/20 bg-white/[0.05] hover:bg-white/10 hover:border-accent-cyan/50 transition-all"
          >
            <Github size={13} /> GitHub Repository
          </a>
        ) : (
          <div className="mt-auto inline-flex items-center justify-center gap-2 text-xs text-ink/40 px-4 py-2.5 rounded-full border border-white/[0.08] cursor-not-allowed select-none">
            Repository Unavailable
          </div>
        )}
      </div>
    </motion.article>
  )
}
