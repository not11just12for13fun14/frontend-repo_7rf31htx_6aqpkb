import SectionSplines from './SectionSplines'

export default function Experience() {
  const items = [
    {
      role: 'Full‑Stack Software Engineer',
      org: 'Product Company',
      period: '2023 — Present',
      bullets: [
        'Built scalable microservices with Java & Spring Boot (REST, JPA, Kafka).',
        'Cut deployment time by 40% by automating CI/CD with GitHub Actions.',
        'Collaborated with design and data teams to drive +25% user engagement.'
      ]
    },
    {
      role: 'Software Engineer',
      org: 'Tech Consultancy',
      period: '2022 — 2023',
      bullets: [
        'Developed React/React Native apps integrated with cloud services.',
        'Improved process efficiency by 30% through workflow automation.',
        'Delivered AI‑assisted features using LLM APIs and vector search.'
      ]
    }
  ]

  return (
    <section id="experience" className="relative py-20 bg-slate-50 overflow-hidden">
      <SectionSplines items={[
        { top: 'top-10', right: 'right-8', size: 'h-24 w-24' },
        { bottom: 'bottom-10', left: 'left-16', size: 'h-32 w-32' },
      ]} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Experience</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {items.map((job) => (
            <article key={job.role} className="p-6 rounded-2xl ring-1 ring-slate-200 bg-white">
              <header className="flex items-baseline justify-between">
                <h3 className="font-semibold text-slate-900">{job.role} — <span className="text-indigo-600">{job.org}</span></h3>
                <p className="text-sm text-slate-500">{job.period}</p>
              </header>
              <ul className="mt-4 space-y-2 text-slate-600">
                {job.bullets.map((b, i) => (
                  <li key={i} className="text-sm">• {b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
