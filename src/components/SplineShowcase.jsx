import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const scenes = [
  {
    title: 'Playful Tech Orb',
    subtitle: 'Interactive 3D accent',
    scene: 'https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode'
  },
  {
    title: 'Floating Shapes',
    subtitle: 'Soft gradients & motion',
    scene: 'https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode'
  },
  {
    title: 'Creative Gizmo',
    subtitle: 'Looping animation',
    scene: 'https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode'
  },
  {
    title: 'Neon Particle',
    subtitle: 'Mesmerizing movement',
    scene: 'https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode'
  }
]

function Card({ item, i }) {
  return (
    <motion.div
      className="snap-center shrink-0 w-[320px] sm:w-[380px] lg:w-[420px]"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.4, delay: i * 0.05 }}
    >
      <div className="relative h-64 rounded-2xl overflow-hidden ring-1 ring-black/10 shadow-md bg-white">
        <Spline scene={item.scene} />
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/70" />
      </div>
      <div className="px-1">
        <h3 className="mt-4 font-semibold text-slate-900">{item.title}</h3>
        <p className="text-sm text-slate-600">{item.subtitle}</p>
      </div>
    </motion.div>
  )
}

export default function SplineShowcase() {
  const scroller = useRef(null)

  useEffect(() => {
    const el = scroller.current
    if (!el) return
    let id
    let dir = 1
    const step = () => {
      el.scrollLeft += 0.5 * dir
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 2) dir = -1
      if (el.scrollLeft <= 2) dir = 1
      id = requestAnimationFrame(step)
    }
    id = requestAnimationFrame(step)
    return () => cancelAnimationFrame(id)
  }, [])

  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 -right-16 h-64 w-64 rounded-full bg-fuchsia-300/30 blur-3xl" />
        <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-indigo-300/30 blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">3D Gallery</h2>
            <p className="mt-3 text-slate-600 max-w-2xl">A row of interactive 3D cards designed to keep attention with motion, depth, and subtle gradients.</p>
          </div>
        </div>

        <div ref={scroller} className="mt-10 flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none]">
          {/* hide scrollbar chrome */}
          <style>{`.hide-scroll::-webkit-scrollbar{display:none}`}</style>
          {scenes.concat(scenes).map((item, i) => (
            <Card key={i} item={item} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
