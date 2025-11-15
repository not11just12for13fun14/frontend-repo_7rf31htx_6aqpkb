import { useRef } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import Spline from '@splinetool/react-spline'

function ProjectCard({ p }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rx = useTransform(y, [ -50, 50 ], [ 8, -8 ])
  const ry = useTransform(x, [ -50, 50 ], [ -8, 8 ])

  const handleMove = (e) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const relX = e.clientX - (rect.left + rect.width / 2)
    const relY = e.clientY - (rect.top + rect.height / 2)
    x.set(Math.max(-50, Math.min(50, relX / (rect.width / 2) * 50)))
    y.set(Math.max(-50, Math.min(50, relY / (rect.height / 2) * 50)))
  }

  const handleLeave = () => {
    x.set(0); y.set(0)
  }

  return (
    <motion.a
      href={p.link}
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX: rx, rotateY: ry, transformStyle: 'preserve-3d' }}
      className="group block p-0 rounded-2xl ring-1 ring-slate-200 bg-white shadow-sm hover:shadow-xl transition-shadow will-change-transform"
    >
      <div className="relative h-44 rounded-t-2xl overflow-hidden" style={{ transform: 'translateZ(20px)' }}>
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/80" />
      </div>
      <div className="p-6">
        <h3 className="font-semibold text-slate-900 group-hover:text-indigo-700 transition-colors">{p.name}</h3>
        <p className="mt-2 text-sm text-slate-600">{p.blurb}</p>
        <p className="mt-3 text-xs text-slate-500">{p.stack.join(' • ')}</p>
      </div>
    </motion.a>
  )
}

export default function Projects() {
  const projects = [
    {
      name: 'AI Document Assistant',
      stack: ['Spring Boot', 'React', 'OpenAI', 'Pinecone'],
      blurb: 'Chat with your docs using embeddings, RAG, and secure auth.',
      link: '#'
    },
    {
      name: 'Cloud‑Native E‑commerce',
      stack: ['Java', 'Kafka', 'PostgreSQL', 'AWS'],
      blurb: 'Event‑driven microservices with resilient payments and search.',
      link: '#'
    },
    {
      name: 'Mobile Health Tracker',
      stack: ['React Native', 'NestJS', 'GraphQL'],
      blurb: 'Realtime metrics, push notifications, and offline sync.',
      link: '#'
    }
  ]

  return (
    <section id="projects" className="relative py-20 bg-white">
      <div className="pointer-events-none absolute inset-x-0 -top-10 h-40 bg-gradient-to-b from-indigo-50/60 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Projects</h2>
        <p className="mt-3 text-slate-600 max-w-2xl">Interactive 3D previews and tilt effects make these feel alive.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 [perspective:1200px]">
          {projects.map((p) => (
            <ProjectCard key={p.name} p={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
