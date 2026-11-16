import { motion } from 'framer-motion'
import { Github } from 'lucide-react'

export default function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      whileHover={{ y: -8 }}
      className="glass glow-border rounded-2xl overflow-hidden flex flex-col group"
    >
      <div className="relative h-44 m-2 rounded-xl overflow-hidden bg-base-raised">
        <img
          src={project.cover}
          alt={`${project.title} cover artwork`}
          loading="lazy"
          decoding="async"
          width="800"
          height="450"
          className="w-full h-full object-cover rounded-xl transition-transform duration-700 ease-out group-hover:scale-110"
        />
        {/* subtle glow that intensifies on hover, layered above the artwork */}
        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 shadow-[inset_0_0_40px_10px_rgba(139,92,246,0.35)]" />
        {/* gradient overlay for text readability against varied artwork */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-base via-base/10 to-transparent" />
      </div>

      <div className="p-6 pt-4 flex flex-col flex-1">
        <h3 className="font-display text-lg font-medium leading-snug mb-3">{project.title}</h3>
        <p className="text-sm text-ink-dim leading-relaxed mb-5 flex-1">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[11px] font-mono px-2.5 py-1 rounded-full border border-white/10 text-ink-faint"
            >
              {t}
            </span>
          ))}
        </div>

        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          data-cursor-hover
          className="mt-auto inline-flex items-center justify-center gap-2 text-sm px-4 py-2.5 rounded-full border border-white/10 hover:bg-white/5 hover:border-accent-cyan/40 transition-colors"
        >
          <Github size={14} /> GitHub Repository
        </a>
      </div>
    </motion.article>
  )
}
