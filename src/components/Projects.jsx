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
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Projects</h2>
        <p className="mt-3 text-slate-600 max-w-2xl">Selected builds showcasing end‑to‑end delivery across backend, frontend, cloud, and AI.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <a key={p.name} href={p.link} className="group p-6 rounded-2xl ring-1 ring-slate-200 bg-gradient-to-br from-white to-slate-50 hover:shadow-lg transition-shadow">
              <div className="h-40 rounded-xl bg-gradient-to-br from-indigo-200/60 to-fuchsia-200/60 ring-1 ring-inset ring-white/60" />
              <h3 className="mt-5 font-semibold text-slate-900 group-hover:text-indigo-700 transition-colors">{p.name}</h3>
              <p className="mt-2 text-sm text-slate-600">{p.blurb}</p>
              <p className="mt-3 text-xs text-slate-500">{p.stack.join(' • ')}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
