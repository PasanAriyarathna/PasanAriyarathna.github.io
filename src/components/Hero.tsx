import { motion, useReducedMotion } from "framer-motion"
import portrait from "../assets/profile/pasan-portrait.png"
import { site } from "../data/site"

const socials = [
  { label: "Email", href: `mailto:${site.email}`, icon: "mail" },
  { label: "LinkedIn", href: site.linkedin, icon: "linkedin" },
  { label: "GitHub", href: site.github, icon: "github" },
] as const

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <section id="home" className="section-anchor relative isolate min-h-[100svh] overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(180deg, #F7F9FC 0%, #E4EDF6 24%, #8EA6C2 52%, #1B3A64 76%, #091422 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute top-[30%] left-1/2 h-[78%] w-[min(94vw,680px)] -translate-x-1/2 rounded-t-[999px] border border-white/70"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.55) 0%, rgba(213,222,234,0.28) 42%, rgba(16,35,63,0.05) 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute top-[43%] left-1/2 h-[min(68vw,500px)] w-[min(68vw,500px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#10233F]/15"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-[43%] left-1/2 h-[min(50vw,360px)] w-[min(50vw,360px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/80"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[48%]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, rgba(255,255,255,0.2) 0px, rgba(255,255,255,0.2) 1px, transparent 1px, transparent 26px)",
          maskImage: "linear-gradient(to bottom, transparent, #000 32%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent, #000 32%)",
        }}
      />
      <div
        className="pointer-events-none absolute -left-20 top-[16%] h-72 w-72 rounded-full opacity-80 blur-3xl"
        aria-hidden="true"
        style={{ background: "radial-gradient(circle, #FFFFFF 0%, rgba(255,255,255,0) 70%)" }}
      />

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col px-5 pt-20 pb-24 sm:px-8">
        <motion.h1
          className="relative z-10 text-center font-display leading-[0.9] font-semibold tracking-wide text-[#10233F] uppercase"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <span className="block text-[clamp(2.15rem,6.2vw,5.6rem)]">Hi, I'm Pasan</span>
          <span className="relative mt-1 inline-block text-[clamp(1.65rem,5.4vw,4.7rem)] whitespace-nowrap">
            IT Undergraduate
            <span className="absolute right-[2%] -bottom-1 left-[2%] h-[2px] bg-[#10233F]" aria-hidden="true" />
          </span>
        </motion.h1>

        <motion.img
          src={portrait}
          alt="Portrait of Pasan Ariyarathna"
          className="relative z-20 mx-auto mt-2 h-[min(46vh,480px)] w-auto max-w-[min(84vw,390px)] object-contain object-bottom sm:mt-3 sm:h-[min(54vh,600px)] sm:max-w-[min(72vw,440px)] lg:h-[min(58vh,660px)] lg:max-w-[480px]"
          style={{
            maskImage:
              "linear-gradient(to bottom, #000 0%, #000 74%, transparent 100%), linear-gradient(to right, transparent 0%, #000 7%, #000 93%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, #000 0%, #000 74%, transparent 100%), linear-gradient(to right, transparent 0%, #000 7%, #000 93%, transparent 100%)",
            maskComposite: "intersect",
            WebkitMaskComposite: "source-in",
          }}
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        />

        <p className="pointer-events-none absolute top-[58%] right-[7%] z-30 hidden w-52 text-[0.95rem] leading-relaxed text-white lg:block">
          Passionate about AI Engineering and Software Development.
        </p>
        <div className="absolute inset-x-5 bottom-5 z-30 flex flex-col gap-3 sm:inset-x-8 sm:bottom-7">
          <p className="max-w-[15rem] text-sm leading-relaxed text-white sm:absolute sm:bottom-16 sm:left-0 sm:max-w-[11rem] lg:hidden">
            Passionate about AI Engineering and Software Development.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <ul className="order-2 flex items-center gap-3 sm:order-1">
              {socials.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    aria-label={item.label}
                    {...(item.href.startsWith("http")
                      ? { target: "_blank", rel: "noreferrer" }
                      : {})}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full shadow-[0_8px_20px_-10px_rgba(0,0,0,0.6)]"
                  >
                    <SocialIcon name={item.icon} />
                  </a>
                </li>
              ))}
            </ul>
            <div className="order-1 flex flex-wrap gap-2 sm:order-2">
              <a
                href="#contact"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-white px-4 text-sm font-semibold text-[#10233F] shadow-[0_10px_24px_-14px_rgba(0,0,0,0.7)]"
              >
                Get in Touch
              </a>
              <a
                href={site.cvUrl}
                download="Pasan-Ariyarathna.pdf"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/80 bg-white/10 px-4 text-sm font-semibold text-white backdrop-blur-sm"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SocialIcon({ name }: { name: "mail" | "linkedin" | "github" }) {
  if (name === "mail") {
    return (
      <svg viewBox="0 0 44 44" className="h-11 w-11" aria-hidden="true">
        <circle cx="22" cy="22" r="22" fill="#ffffff" />
        <path fill="#4285F4" d="M12.2 16.2h19.6v12.4c0 .8-.7 1.5-1.5 1.5H13.7c-.8 0-1.5-.7-1.5-1.5V16.2z" />
        <path fill="#EA4335" d="M12.2 16.2 22 23.4l9.8-7.2H12.2z" />
        <path fill="#34A853" d="M12.2 16.2v12.4c0 .8.7 1.5 1.5 1.5h1.1V20.4L12.2 16.2z" />
        <path fill="#FBBC05" d="M31.8 16.2v12.4c0 .8-.7 1.5-1.5 1.5h-1.1V20.4l2.6-4.2z" />
        <path fill="#ffffff" d="M16.4 19.2 22 23.4l5.6-4.2v7.6h-11.2v-7.6z" />
        <path fill="#C5221F" d="M16.4 19.2 22 23.4l5.6-4.2" />
      </svg>
    )
  }

  if (name === "linkedin") {
    return (
      <svg viewBox="0 0 44 44" className="h-11 w-11" aria-hidden="true">
        <circle cx="22" cy="22" r="22" fill="#0A66C2" />
        <path
          fill="#ffffff"
          d="M16.2 18.6H12.8V31h3.4V18.6zM14.5 13a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM31.2 23.6c0-3.3-1.8-4.9-4.1-4.9-1.9 0-2.7 1-3.2 1.8h-.1v-1.5h-3.3c0 1.1 0 12 0 12h3.3v-6.7c0-.4 0-.7.1-1 .3-.7.9-1.4 2-1.4 1.4 0 2 1.1 2 2.6V31h3.3v-7.4z"
        />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 44 44" className="h-11 w-11" aria-hidden="true">
      <circle cx="22" cy="22" r="22" fill="#ffffff" />
      <path
        fill="#161B22"
        d="M22 12.2c-5.4 0-9.8 4.4-9.8 9.8 0 4.3 2.8 8 6.7 9.3.5.1.7-.2.7-.5v-1.7c-2.7.6-3.3-1.2-3.3-1.2-.4-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.2-.2-4.4-1.1-4.4-4.8 0-1.1.4-1.9 1-2.6-.1-.3-.4-1.3.1-2.6 0 0 .8-.3 2.7 1a9.3 9.3 0 0 1 4.9 0c1.9-1.3 2.7-1 2.7-1 .5 1.3.2 2.3.1 2.6.6.7 1 1.5 1 2.6 0 3.7-2.3 4.6-4.4 4.8.3.3.6.8.6 1.7v2.5c0 .3.2.6.7.5 3.9-1.3 6.7-5 6.7-9.3 0-5.4-4.4-9.8-9.8-9.8z"
      />
    </svg>
  )
}
