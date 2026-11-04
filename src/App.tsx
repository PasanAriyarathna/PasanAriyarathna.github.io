import { About } from "./components/About"
import { Certificates } from "./components/Certificates"
import { Contact } from "./components/Contact"
import { Education } from "./components/Education"
import { Experience } from "./components/Experience"
import { Footer } from "./components/Footer"
import { Hero } from "./components/Hero"
import { Navbar } from "./components/Navbar"
import { ProjectShowcase } from "./components/ProjectShowcase"

export default function App() {
  return (
    <>
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:bg-ice focus:px-3 focus:py-2 focus:text-navy"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <ProjectShowcase />
        <Experience />
        <Education />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
