import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import SplineShowcase from './components/SplineShowcase'

function App() {
  return (
    <div className="bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <SplineShowcase />
        <Projects />
        <CTA />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold">Professional Summary</h2>
        <p className="mt-4 text-slate-700 max-w-3xl leading-relaxed">
          Full-Stack Software Engineer with 2+ years of experience architecting, building, and deploying scalable applications and AI-driven solutions. Expertise in Java, Spring Boot, React.js, React Native, cloud platforms (AWS, Azure), and CI/CD pipelines (GitLab, GitHub Actions). Delivered measurable improvements — increased process efficiency by 30%, reduced deployment time by 40%, and boosted user engagement by 25%. Proficient in agile methodologies and cross-team collaboration to drive project success.
        </p>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section className="py-16 bg-gradient-to-br from-indigo-600 to-fuchsia-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <h3 className="text-2xl md:text-3xl font-bold">Let’s build something impactful together.</h3>
        <div className="flex gap-3">
          <a href="#projects" className="px-5 py-3 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur font-semibold">See my work</a>
          <a href="#contact" className="px-5 py-3 rounded-lg bg-white text-indigo-700 font-semibold">Hire me</a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-10 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Full‑Stack Software Engineer — Java • Spring Boot • Cloud • AI
      </div>
    </footer>
  )
}

export default App
