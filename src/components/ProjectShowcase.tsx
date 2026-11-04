import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react"
import { useState, type KeyboardEvent } from "react"
import { projects, type Project } from "../data/projects"
import { LaptopMockup } from "./LaptopMockup"
import { PhoneMockup } from "./PhoneMockup"

export function ProjectShowcase() {
  const [index, setIndex] = useState(0)
  const [shot, setShot] = useState(0)
  const [direction, setDirection] = useState(1)
  const reduce = useReducedMotion()
  const project = projects[index]
  const shots = [project.image, ...project.additionalImages].filter((item): item is string => Boolean(item))
  const currentImage = shots[shot] ?? null
  const countLabel = `${String(index + 1).padStart(2, "0")} / ${String(projects.length).padStart(2, "0")}`

  function step(delta: number) {
    setDirection(delta > 0 ? 1 : -1)
    setShot(0)
    setIndex((current) => (current + delta + projects.length) % projects.length)
  }

  function goTo(next: number) {
    if (next === index) return
    setDirection(next > index ? 1 : -1)
    setShot(0)
    setIndex(next)
  }

  function onKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (event.key === "ArrowRight") {
      event.preventDefault()
      step(1)
    } else if (event.key === "ArrowLeft") {
      event.preventDefault()
      step(-1)
    }
  }

  return (
    <section id="projects" className="section-anchor border-t border-[#D5DEEA] bg-[#F4F7FB] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="text-xs font-semibold tracking-[0.22em] text-[#3E5C86] uppercase">Projects</p>
        <h2 className="mt-3 max-w-3xl font-display text-4xl leading-tight text-[#10233F] md:text-5xl">Selected work</h2>
        <div className="mt-4 h-px w-24 bg-[#2C4C78]" aria-hidden="true" />
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#243B5A]">
          One project at a time. Use the arrows, the dots, or the left and right keys.
        </p>
        <div
          className="relative mt-10 focus-visible:outline focus-visible:outline-[#2C4C78]"
          tabIndex={0}
          onKeyDown={onKeyDown}
          aria-label="Project showcase. Use the left and right arrow keys to change projects."
        >
          <p className="sr-only" aria-live="polite">
            Showing project {index + 1} of {projects.length}: {project.title}
          </p>
          <button
            type="button"
            className="absolute top-1/3 left-0 z-10 hidden h-11 w-11 items-center justify-center rounded-full bg-[#10233F] text-white hover:bg-[#2C4C78] lg:inline-flex"
            onClick={() => step(-1)}
            aria-label="Previous project"
          >
            <ArrowLeft size={18} aria-hidden="true" />
          </button>
          <button
            type="button"
            className="absolute top-1/3 right-0 z-10 hidden h-11 w-11 items-center justify-center rounded-full bg-[#10233F] text-white hover:bg-[#2C4C78] lg:inline-flex"
            onClick={() => step(1)}
            aria-label="Next project"
          >
            <ArrowRight size={18} aria-hidden="true" />
          </button>
          <div className="lg:px-14">
            <AnimatePresence mode="wait" initial={false}>
              <motion.article
                key={project.id}
                initial={reduce ? false : { opacity: 0, x: direction * 28 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reduce ? undefined : { opacity: 0, x: direction * -28 }}
                transition={{ duration: 0.28 }}
                className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10"
              >
                <div>
                  {project.deviceType === "phone" ? (
                    <PhoneMockup image={currentImage} alt={`${project.title} screenshot`} title={project.title} />
                  ) : (
                    <LaptopMockup image={currentImage} alt={`${project.title} screenshot`} title={project.title} />
                  )}
                  {shots.length > 1 ? (
                    <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                      <span className="text-xs font-semibold tracking-[0.14em] text-[#3E5C86] uppercase">Screenshots</span>
                      {shots.map((src, shotIndex) => (
                        <button
                          key={src}
                          type="button"
                          onClick={() => setShot(shotIndex)}
                          aria-label={`Show screenshot ${shotIndex + 1} of ${project.title}`}
                          aria-current={shotIndex === shot ? "true" : undefined}
                          className={`h-12 w-16 overflow-hidden border ${shotIndex === shot ? "border-[#2C4C78]" : "border-[#D5DEEA]"}`}
                        >
                          <img src={src} alt="" className="h-full w-full object-cover object-top" />
                        </button>
                      ))}
                    </div>
                  ) : null}
                </div>
                <ProjectDetails project={project} />
              </motion.article>
            </AnimatePresence>
          </div>
          <div className="mt-8 flex items-center justify-between gap-4">
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#10233F] text-white hover:bg-[#2C4C78] lg:hidden"
              onClick={() => step(-1)}
              aria-label="Previous project"
            >
              <ArrowLeft size={18} aria-hidden="true" />
            </button>
            <div className="flex flex-1 flex-col items-center gap-3">
              <p className="font-display text-lg tracking-wide text-[#10233F]" aria-hidden="true">
                {countLabel}
              </p>
              <div className="flex items-center gap-2">
                {projects.map((item, itemIndex) => (
                  <button
                    key={item.id}
                    type="button"
                    aria-current={itemIndex === index ? "true" : undefined}
                    aria-label={`Show ${item.title}`}
                    onClick={() => goTo(itemIndex)}
                    className={`relative before:absolute before:-inset-x-1.5 before:-inset-y-4 before:content-[''] ${
                      itemIndex === index ? "h-2.5 w-8 bg-[#10233F]" : "h-2.5 w-2.5 bg-[#D5DEEA] hover:bg-[#7E97B8]"
                    }`}
                  />
                ))}
              </div>
            </div>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#10233F] text-white hover:bg-[#2C4C78] lg:hidden"
              onClick={() => step(1)}
              aria-label="Next project"
            >
              <ArrowRight size={18} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProjectDetails({ project }: { project: Project }) {
  return (
    <div className="border border-[#D5DEEA] border-t-[3px] border-t-[#2C4C78] bg-white p-6 shadow-[0_18px_40px_-28px_rgba(16,35,63,0.45)] md:p-7">
      <p className="text-xs font-semibold tracking-[0.18em] text-[#3E5C86] uppercase">{project.category}</p>
      <h3 className="mt-3 font-display text-3xl leading-tight text-[#10233F] md:text-4xl">{project.title}</h3>
      <p className="mt-4 leading-relaxed text-[#243B5A]">{project.summary}</p>
      <h4 className="mt-6 text-sm font-semibold tracking-[0.14em] text-[#10233F] uppercase">Problem</h4>
      <p className="mt-2 leading-relaxed text-[#243B5A]">{project.problem}</p>
      <h4 className="mt-6 text-sm font-semibold tracking-[0.14em] text-[#10233F] uppercase">Key features</h4>
      <ul className="mt-2 space-y-2 text-sm leading-relaxed text-[#243B5A]">
        {project.features.map((feature) => (
          <li key={feature} className="border-l-2 border-[#7E97B8] pl-3">
            {feature}
          </li>
        ))}
      </ul>
      <h4 className="mt-6 text-sm font-semibold tracking-[0.14em] text-[#10233F] uppercase">Technologies</h4>
      <ul className="mt-2 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <li key={tech} className="border border-[#D5DEEA] bg-[#F4F7FB] px-2.5 py-1 text-xs font-medium text-[#10233F]">
            {tech}
          </li>
        ))}
      </ul>
      <h4 className="mt-6 text-sm font-semibold tracking-[0.14em] text-[#10233F] uppercase">My contribution</h4>
      <p className="mt-2 leading-relaxed text-[#243B5A]">{project.role}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        {project.repositoryUrl ? (
          <a
            href={project.repositoryUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-[#10233F] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#2C4C78]"
          >
            GitHub
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        ) : null}
        {project.liveDemoUrl ? (
          <a
            href={project.liveDemoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-[#2C4C78] px-4 py-2.5 text-sm font-semibold text-[#10233F] hover:bg-[#10233F] hover:text-white"
          >
            Live demo
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        ) : null}
        {project.demoVideoUrl ? (
          <a
            href={project.demoVideoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-[#2C4C78] px-4 py-2.5 text-sm font-semibold text-[#10233F] hover:bg-[#10233F] hover:text-white"
          >
            Demo video
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        ) : null}
        {project.documentationUrl ? (
          <a
            href={project.documentationUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-[#2C4C78] px-4 py-2.5 text-sm font-semibold text-[#10233F] hover:bg-[#10233F] hover:text-white"
          >
            Documentation
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        ) : null}
      </div>
    </div>
  )
}
