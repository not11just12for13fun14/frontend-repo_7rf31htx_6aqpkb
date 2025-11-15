import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] grid place-items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/95 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900"
          >
            Full‑Stack Software Engineer
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-lg sm:text-xl text-slate-700"
          >
            Java, Spring Boot, React.js, React Native, Cloud & AI Solutions
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-4 text-slate-600 max-w-2xl"
          >
            Full-Stack Software Engineer with 2+ years of experience architecting, building, and deploying scalable applications and AI-driven solutions. Delivered measurable improvements: +30% process efficiency, −40% deployment time, +25% user engagement.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="#projects" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-indigo-600 text-white font-semibold shadow-lg shadow-indigo-600/20 hover:bg-indigo-700 transition-colors">
              View Projects
            </a>
            <a href="#contact" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-white text-slate-900 font-semibold ring-1 ring-slate-200 hover:ring-slate-300 transition">
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
