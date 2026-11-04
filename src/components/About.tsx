import { site } from "../data/site"
import { interests } from "../data/skills"
import { Skills } from "./Skills"

export function About() {
  return (
    <section id="about" className="section-anchor relative overflow-hidden py-20 md:py-28" style={{ background: "#F4F7FB" }}>
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-28"
        aria-hidden="true"
        style={{ background: "linear-gradient(180deg, #091422 0%, rgba(9,20,34,0) 100%)" }}
      />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <p className="text-xs font-semibold tracking-[0.22em] text-[#3E5C86] uppercase">Who Am I</p>
        <h2 className="mt-3 max-w-3xl font-display text-4xl leading-tight text-[#10233F] md:text-5xl">
          Building at the intersection of AI and software.
        </h2>
        <div className="mt-4 h-px w-24 bg-[#2C4C78]" aria-hidden="true" />

        <div className="mt-10 grid items-start gap-10 lg:grid-cols-[1.45fr_0.7fr]">
          <div className="space-y-5 text-base leading-relaxed text-[#243B5A] md:text-lg">
            <p>
              I'm a final-year Information Technology undergraduate passionate about AI Engineering and Software
              Development. I build practical applications using Python, React, TypeScript, LLMs, RAG, and multi-agent
              systems to solve real-world problems. Through my projects, I explore the intersection of AI and software
              engineering by building intelligent applications, backend APIs, and full-stack solutions.
            </p>
            <p>
              I'm always eager to learn, innovate, and take on new technical challenges. Explore my projects, check out
              my code on{" "}
              <a className="font-medium text-[#10233F] underline decoration-[#7E97B8] underline-offset-4" href={site.github}>
                GitHub
              </a>
              , and let's{" "}
              <a className="font-medium text-[#10233F] underline decoration-[#7E97B8] underline-offset-4" href="#contact">
                connect
              </a>{" "}
              to build something impactful together.
            </p>
          </div>
          <aside className="border border-[#D5DEEA] border-t-[3px] border-t-[#2C4C78] bg-white p-6 shadow-[0_18px_40px_-28px_rgba(16,35,63,0.45)]">
            <h3 className="text-xs font-semibold tracking-[0.18em] text-[#3E5C86] uppercase">Focus</h3>
            <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-[#10233F]">
              {interests.map((item) => (
                <li key={item} className="border-l-2 border-[#7E97B8] pl-3">
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        </div>
        <Skills />
      </div>
    </section>
  )
}
