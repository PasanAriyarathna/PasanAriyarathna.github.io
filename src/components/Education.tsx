import { education } from "../data/education"

export function Education() {
  return (
    <section id="education" className="section-anchor border-t border-[#D5DEEA] bg-[#F4F7FB] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="text-xs font-semibold tracking-[0.22em] text-[#3E5C86] uppercase">Education</p>
        <h2 className="mt-3 max-w-3xl font-display text-4xl leading-tight text-[#10233F] md:text-5xl">Academic profile</h2>
        <div className="mt-4 h-px w-24 bg-[#2C4C78]" aria-hidden="true" />
        <ol className="mt-10 grid gap-4">
          {education.map((record) => (
            <li key={record.id}>
              <article className="border border-[#D5DEEA] border-t-[3px] border-t-[#2C4C78] bg-white p-6 shadow-[0_18px_40px_-28px_rgba(16,35,63,0.45)] md:p-8">
                <p className="text-xs font-semibold tracking-[0.18em] text-[#3E5C86] uppercase">{record.status}</p>
                <h3 className="mt-3 font-display text-3xl leading-snug text-[#10233F] md:text-4xl">{record.qualification}</h3>
                <p className="mt-2 text-lg text-[#243B5A]">{record.institution}</p>
                <p className="mt-4 border-l-2 border-[#7E97B8] pl-3 text-sm text-[#243B5A]">
                  {record.period}
                  {record.location ? ` · ${record.location}` : ""}
                </p>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
