import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Loader from './components/Loader.jsx'
import CustomCursor from './components/CustomCursor.jsx'
import ProgressBar from './components/ProgressBar.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Timeline from './components/Timeline.jsx'
import Certifications from './components/Certifications.jsx'
import Achievements from './components/Achievements.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import BackToTop from './components/BackToTop.jsx'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  useEffect(() => {
    // GSAP-driven parallax for ambient hero blobs — each element moves at
    // its own speed (data-speed) as the page scrolls, layered on top of the
    // Framer Motion entrance animations used everywhere else.
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.gsap-parallax').forEach((el) => {
        const speed = Number(el.getAttribute('data-speed')) || 0.3
        gsap.to(el, {
          yPercent: speed * 60,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        })
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <>
      <Loader />
      <CustomCursor />
      <ProgressBar />
      <Navbar />
      <main className="bg-base">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Timeline />
        <Certifications />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
