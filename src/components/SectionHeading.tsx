type SectionHeadingProps = {
  eyebrow: string
  title: string
  lede?: string
  tone?: "light" | "dark"
}

export function SectionHeading({ eyebrow, title, lede, tone = "light" }: SectionHeadingProps) {
  const eyebrowClass = tone === "dark" ? "text-sky" : "text-blue"
  const titleClass = tone === "dark" ? "text-white" : "text-navy"
  const ledeClass = tone === "dark" ? "text-ice/90" : "text-navy/75"

  return (
    <div className="max-w-2xl">
      <p className={`text-xs font-semibold tracking-[0.2em] uppercase ${eyebrowClass}`}>{eyebrow}</p>
      <h2 className={`mt-3 font-display text-4xl leading-tight md:text-5xl ${titleClass}`}>{title}</h2>
      {lede ? <p className={`mt-4 text-lg leading-relaxed ${ledeClass}`}>{lede}</p> : null}
    </div>
  )
}
