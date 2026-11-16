import { useEffect, useState } from 'react'

export default function ProgressBar() {
  const [scale, setScale] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement
      const max = scrollHeight - clientHeight
      setScale(max > 0 ? scrollTop / max : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] z-[70] bg-transparent">
      <div
        className="h-full bg-accent-gradient origin-left"
        style={{ transform: `scaleX(${scale})`, transition: 'transform 0.1s linear' }}
      />
    </div>
  )
}
