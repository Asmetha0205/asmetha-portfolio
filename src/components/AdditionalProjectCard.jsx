import { motion } from 'framer-motion'
import { Github, ExternalLink, Lock } from 'lucide-react'

/**
 * Small elegant card for additional / side projects.
 * GitHub button is hidden when no valid URL is provided.
 */
export default function AdditionalProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      whileHover={{ y: -5 }}
      className="rounded-2xl overflow-hidden flex flex-col group border border-white/[0.08] bg-base-raised glow-border"
    >
      {/* cover */}
      <div className="relative h-36 m-2 rounded-xl overflow-hidden bg-base">
        <img
          src={project.cover}
          alt={`${project.title} cover artwork`}
          loading="lazy"
          decoding="async"
          width="800"
          height="450"
          className="w-full h-full object-cover rounded-xl transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 shadow-[inset_0_0_30px_6px_rgba(34,211,238,0.2)]" />
        <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-base-raised via-transparent to-transparent" />
      </div>

      <div className="px-5 pb-5 pt-3 flex flex-col flex-1">
        <h3 className="font-display text-[1.05rem] font-semibold leading-snug text-ink mb-2">
          {project.title}
        </h3>

        <p className="text-sm text-ink/75 leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* tech badges */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[11px] font-mono px-2.5 py-1 rounded-full border border-white/15 text-ink/65 bg-white/[0.05]"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Action links — GitHub only when a valid URL exists; live site when provided */}
        <div className="mt-auto flex flex-col gap-2">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              data-cursor-hover
              className="inline-flex items-center justify-center gap-2 text-xs font-medium text-ink px-4 py-2.5 rounded-full border border-white/20 bg-white/[0.05] hover:bg-white/10 hover:border-accent-cyan/50 transition-all"
            >
              <Github size={13} /> GitHub Repository
            </a>
          ) : (
            <div className="inline-flex items-center justify-center gap-2 text-xs text-ink/40 px-4 py-2.5 rounded-full border border-white/[0.08] cursor-not-allowed select-none">
              <Lock size={11} /> Repository Coming Soon
            </div>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              data-cursor-hover
              aria-label={`Visit live website for ${project.title}`}
              className="inline-flex items-center justify-center gap-2 text-xs font-medium text-ink px-4 py-2.5 rounded-full border border-white/20 bg-white/[0.05] hover:bg-white/10 hover:border-accent-cyan/50 transition-all"
            >
              <ExternalLink size={13} /> Visit Website
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}
