import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import { Tools, Services, Showcase, Process, Why, About, Faq } from './components/Sections'
import { Contact } from './components/Contact'
import Footer from './components/Footer'
import FloatingActions from './components/FloatingActions'

export default function App() {
  // Direct links such as /#contact: the page renders after the browser's own anchor jump, so scroll once it is ready.
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1))
    if (!id) return
    const t = setTimeout(() => document.getElementById(id)?.scrollIntoView(), 60)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      <a href="#main" className="skip-link">Skip to main content</a>
      <Header />
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero />
        <Tools />
        <Services />
        <Showcase />
        <Process />
        <Why />
        <About />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}
