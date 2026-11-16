import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ChevronDown, ArrowRight } from 'lucide-react'
import HeroCanvas from './HeroCanvas.jsx'
import useTypingEffect from '../hooks/useTypingEffect.js'
import { profile } from '../data/content.js'

export default function Hero() {
  const typed = useTypingEffect(profile.taglines)

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-base">
      {/* Ambient blobs — reduced opacity/size on mobile so they don't swamp text */}
      <div
        data-speed="0.3"
        className="gsap-parallax absolute -top-40 -left-40
          w-[22rem] h-[22rem] md:w-[36rem] md:h-[36rem]
          rounded-full bg-accent-blue/10 md:bg-accent-blue/20
          blur-[90px] md:blur-[120px] animate-blob"
      />
      <div
        data-speed="0.55"
        className="gsap-parallax absolute top-1/3 -right-40
          w-[18rem] h-[18rem] md:w-[30rem] md:h-[30rem]
          rounded-full bg-accent-purple/10 md:bg-accent-purple/20
          blur-[80px] md:blur-[120px] animate-blob [animation-delay:-6s]"
      />
      <div
        data-speed="0.15"
        className="gsap-parallax absolute bottom-0 left-1/3
          w-[16rem] h-[16rem] md:w-[26rem] md:h-[26rem]
          rounded-full bg-accent-cyan/5 md:bg-accent-cyan/10
          blur-[70px] md:blur-[120px] animate-blob [animation-delay:-11s]"
      />

      <HeroCanvas />

      {/*
        Layout:
        - mobile  : single column, text on top, AST circle below
        - md+     : two-column side-by-side grid (unchanged)
      */}
      <div className="relative z-10 container-px w-full grid md:grid-cols-[1.1fr_0.9fr] items-center gap-8 md:gap-12 pt-24 pb-16 md:pt-24 md:pb-0">

        {/* ── Text column ── */}
        <div>
          {/* eyebrow label */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-mono text-xs md:text-sm text-accent-cyan tracking-[0.25em] uppercase mb-4"
          >
            Portfolio / 2026
          </motion.p>

          {/* Name — tighter clamp floor on mobile so full name fits in ~375 px */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-semibold leading-[1.08] tracking-tight
              text-[clamp(1.75rem,8vw,4.5rem)]"
          >
            <span className="text-gradient">Asmetha</span> Sureshbabu
            <br /> Thoppe
          </motion.h1>

          {/* Animated role text */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-4 md:mt-6 h-7 md:h-8 font-mono text-base md:text-xl"
          >
            <span className="text-ink">{typed}</span>
            <span className="inline-block w-[2px] h-5 bg-accent-cyan ml-1 align-middle animate-pulse" />
          </motion.div>

          {/* Role highlights
              - mobile  : vertical list, full text visible, strong contrast
              - md+     : horizontal wrapping pills (unchanged)
          */}
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-5 md:mt-6
              flex flex-col gap-y-2
              md:flex-row md:flex-wrap md:gap-x-6 md:gap-y-2
              text-sm text-ink/80"
          >
            {profile.roles.map((role) => (
              <li key={role} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-purple shrink-0" />
                {role}
              </li>
            ))}
          </motion.ul>

          {/* CTA buttons
              - mobile  : full-width stacked column
              - md+     : horizontal flex-wrap row (unchanged)
          */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-8 md:mt-10
              flex flex-col gap-3
              sm:flex-row sm:flex-wrap sm:gap-4"
          >
            <a
              href="#projects"
              data-cursor-hover
              className="group inline-flex items-center justify-center gap-2
                px-6 py-3 rounded-full bg-accent-gradient
                font-medium text-sm text-base
                hover:scale-[1.03] active:scale-[0.98] transition-transform
                sm:w-auto w-full"
            >
              View Projects
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              data-cursor-hover
              className="inline-flex items-center justify-center gap-2
                px-6 py-3 rounded-full glass text-sm
                hover:border-accent-cyan/50 transition-colors
                sm:w-auto w-full"
            >
              View Resume
            </a>
            <a
              href="#contact"
              data-cursor-hover
              className="inline-flex items-center justify-center gap-2
                px-6 py-3 rounded-full border border-white/10 text-sm
                hover:bg-white/5 transition-colors
                sm:w-auto w-full"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Social icons */}
          
{/* Social icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-5 mb-6 md:mb-8 flex items-center gap-4"
        >
          {[
            { icon: Github, href: profile.github, label: 'GitHub' },
            { icon: Linkedin, href: profile.linkedin, label: 'LinkedIn' },
            {
              icon: Mail,
              href: `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}`,
              label: 'Email',
            },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              data-cursor-hover
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-ink/70 hover:text-accent-cyan hover:-translate-y-1 transition-all"
            >
              <Icon size={16} />
            </a>
          ))}
        </motion.div>

        </div>

        {/* ── AST circle ──
            - mobile  : smaller, centered below text, mx-auto keeps it in flow
            - md+     : original size, right column
        */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative mx-auto
            w-40 h-40
            sm:w-52 sm:h-52
            md:w-72 md:h-72"
        >
          <div className="absolute inset-0 rounded-full bg-accent-gradient blur-2xl opacity-25 animate-pulse" />
          <div className="relative w-full h-full rounded-full glass border border-white/10 flex items-center justify-center overflow-hidden animate-float">
            <span className="font-display font-semibold text-gradient
              text-3xl sm:text-4xl md:text-5xl">
              AST
            </span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        data-cursor-hover
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2
          flex flex-col items-center gap-2 text-ink/40 z-10"
      >
        <span className="font-mono text-[10px] tracking-widest uppercase">Scroll</span>
        <motion.span animate={{ y: [0, 8, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
          <ChevronDown size={18} />
        </motion.span>
      </motion.a>
    </section>
  )
}
