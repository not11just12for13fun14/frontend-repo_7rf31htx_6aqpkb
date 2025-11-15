import { useState } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

const NavLink = ({ href, children, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="text-sm md:text-base text-slate-700 hover:text-indigo-600 transition-colors"
  >
    {children}
  </a>
)

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3 group">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500 ring-4 ring-indigo-100 shadow-lg" />
            <div className="leading-tight">
              <p className="font-semibold text-slate-900 group-hover:text-indigo-700 transition-colors">Full‑Stack Engineer</p>
              <p className="text-xs text-slate-500">Java • Spring Boot • Cloud • AI</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <div className="h-6 w-px bg-slate-200" />
            <div className="flex items-center gap-3">
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-slate-100 text-slate-600"><Github size={18} /></a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-slate-100 text-slate-600"><Linkedin size={18} /></a>
              <a href="#contact" className="p-2 rounded-md hover:bg-slate-100 text-slate-600"><Mail size={18} /></a>
            </div>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-md hover:bg-slate-100 text-slate-700">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-3 space-y-3">
            <NavLink href="#about" onClick={close}>About</NavLink>
            <div />
            <NavLink href="#skills" onClick={close}>Skills</NavLink>
            <div />
            <NavLink href="#experience" onClick={close}>Experience</NavLink>
            <div />
            <NavLink href="#projects" onClick={close}>Projects</NavLink>
            <div />
            <NavLink href="#contact" onClick={close}>Contact</NavLink>
          </div>
        </div>
      )}
    </header>
  )
}
