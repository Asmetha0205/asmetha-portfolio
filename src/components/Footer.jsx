export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/5 bg-base">
      <div className="container-px flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ink-faint">
        <span>&copy; {new Date().getFullYear()} Asmetha Sureshbabu Thoppe. All rights reserved.</span>
        <span>
          Made with <span className="text-accent-purple">&#10084;</span> by Asmetha
        </span>
      </div>
    </footer>
  )
}
