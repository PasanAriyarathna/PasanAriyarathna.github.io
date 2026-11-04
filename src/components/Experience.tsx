import { ArrowUpRight } from "lucide-react"
import { competitions, experience, type TimelineItem } from "../data/experience"

export function Experience() {
  return (
    <section id="experience" className="section-anchor border-t border-[#D5DEEA] bg-[#F4F7FB] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="text-xs font-semibold tracking-[0.22em] text-[#3E5C86] uppercase">Experience & Competitions</p>
        <h2 className="mt-3 max-w-3xl font-display text-4xl leading-tight text-[#10233F] md:text-5xl">
          Where I have worked and competed.
        </h2>
        <div className="mt-4 h-px w-24 bg-[#2C4C78]" aria-hidden="true" />
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#243B5A]">
          A trainee role in an examination division, then two AI competitions.
        </p>
        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <Timeline heading="Experience" items={experience} />
          <Timeline heading="Competitions" items={competitions} />
        </div>
      </div>
    </section>
  )
}

function Timeline({ heading, items }: { heading: string; items: TimelineItem[] }) {
  return (
    <div>
      <h3 className="font-display text-3xl text-[#10233F]">{heading}</h3>
      <div className="mt-3 h-px w-16 bg-[#2C4C78]" aria-hidden="true" />
      <ol className="mt-6 space-y-4">
        {items.map((item) => (
          <li key={item.id}>
            <article className="border border-[#D5DEEA] border-t-[3px] border-t-[#2C4C78] bg-white p-6 shadow-[0_18px_40px_-28px_rgba(16,35,63,0.45)]">
              {item.period ? (
                <p className="text-xs font-semibold tracking-[0.16em] text-[#3E5C86] uppercase">{item.period}</p>
              ) : null}
              <h4 className="mt-2 font-display text-2xl leading-snug text-[#10233F]">{item.title}</h4>
              {item.organization ? <p className="mt-1 text-sm text-[#3E5C86]">{item.organization}</p> : null}
              <p className="mt-3 leading-relaxed text-[#243B5A]">{item.summary}</p>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-[#243B5A]">
                {item.points.map((point) => (
                  <li key={point} className="border-l-2 border-[#7E97B8] pl-3">
                    {point}
                  </li>
                ))}
              </ul>
              {item.documentUrl && item.documentLabel ? (
                <a
                  href={item.documentUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-[#10233F] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#2C4C78]"
                >
                  {item.documentLabel}
                  <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              ) : null}
            </article>
          </li>
        ))}
      </ol>
    </div>
  )
}
