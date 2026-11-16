import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'About',      href: '#about'       },
  { label: 'Experience', href: '#experience'  },
  { label: 'Skills',     href: '#skills'      },
  { label: 'Projects',   href: '#projects'    },
  { label: 'Journey',    href: '#timeline'    },
  { label: 'Contact',    href: '#contact'     },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'py-3' : 'py-6'
      }`}
    >
      <div className="container-px flex items-center justify-between gap-6">
        <a
          href="#hero"
          data-cursor-hover
          className="shrink-0 font-display text-lg font-semibold tracking-tight"
        >
          AST<span className="text-accent-cyan">.</span>
        </a>

        <nav className={`hidden md:flex items-center gap-8 px-6 py-3 rounded-full transition-all ${scrolled ? 'glass' : ''}`}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-cursor-hover
              className="text-sm text-ink-dim hover:text-ink transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setOpen(true)}
          data-cursor-hover
          aria-label="Open menu"
          className="shrink-0 md:hidden w-10 h-10 rounded-full glass flex items-center justify-center"
        >
          <Menu size={18} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-base/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
          >
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="absolute top-6 right-6 w-10 h-10 rounded-full glass flex items-center justify-center"
            >
              <X size={18} />
            </button>
            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i }}
                className="font-display text-2xl text-ink"
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
