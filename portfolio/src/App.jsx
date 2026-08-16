import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Education from './components/Education.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  return (
    <div className="app">
      <div className="ambient" />
      <div className="grid-lines" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
    </div>
  )
}
