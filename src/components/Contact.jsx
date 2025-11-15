import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    // In a real setup, send to backend/email service
    await new Promise((r) => setTimeout(r, 1000))
    setStatus('Thanks! I will get back to you shortly.')
  }

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Get in touch</h2>
        <p className="mt-3 text-slate-600 max-w-2xl">Open to full‑time roles and impactful freelance engagements.</p>

        <form onSubmit={onSubmit} className="mt-10 grid gap-6 sm:grid-cols-2">
          <input required placeholder="Your name" className="w-full px-4 py-3 rounded-xl ring-1 ring-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none bg-white" />
          <input required type="email" placeholder="Email" className="w-full px-4 py-3 rounded-xl ring-1 ring-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none bg-white" />
          <textarea required placeholder="Message" className="sm:col-span-2 w-full px-4 py-3 rounded-xl ring-1 ring-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none bg-white min-h-[120px]" />
          <div className="sm:col-span-2 flex items-center gap-4">
            <button type="submit" className="px-5 py-3 rounded-lg bg-indigo-600 text-white font-semibold shadow-lg shadow-indigo-600/20 hover:bg-indigo-700 transition-colors">Send message</button>
            <p className="text-sm text-slate-600">{status}</p>
          </div>
        </form>
      </div>
    </section>
  )
}
