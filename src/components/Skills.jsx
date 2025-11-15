import SectionSplines from './SectionSplines'

export default function Skills() {
  const skills = [
    {
      title: 'Backend',
      items: ['Java', 'Spring Boot', 'REST APIs', 'Microservices', 'JPA/Hibernate']
    },
    {
      title: 'Frontend',
      items: ['React.js', 'React Native', 'TypeScript', 'Tailwind CSS', 'Vite']
    },
    {
      title: 'Cloud & DevOps',
      items: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'CI/CD (GitLab, GitHub Actions)']
    },
    {
      title: 'AI/ML',
      items: ['LLM Integration', 'Vector Search', 'LangChain', 'Python', 'OpenAI']
    }
  ]

  return (
    <section id="skills" className="relative py-20 bg-white overflow-hidden">
      <SectionSplines items={[
        { top: 'top-8', left: 'left-8', size: 'h-24 w-24' },
        { bottom: 'bottom-8', right: 'right-12', size: 'h-28 w-28' },
      ]} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Skills</h2>
        <p className="mt-3 text-slate-600 max-w-2xl">A balanced stack across backend, frontend, cloud, and AI to ship end‑to‑end solutions.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 relative">
          {skills.map((group) => (
            <div key={group.title} className="p-6 rounded-2xl ring-1 ring-slate-200 bg-gradient-to-br from-white to-slate-50 backdrop-blur">
              <h3 className="font-semibold text-slate-900">{group.title}</h3>
              <ul className="mt-3 space-y-2 text-slate-600">
                {group.items.map((s) => (
                  <li key={s} className="text-sm">• {s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
