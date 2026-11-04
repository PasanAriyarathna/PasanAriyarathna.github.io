import { ArrowUpRight } from "lucide-react"
import { navItems, site } from "../data/site"

const channels = [
  { label: "GitHub", href: site.github },
  { label: "LinkedIn", href: site.linkedin },
  { label: "TryHackMe", href: site.tryhackme },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[#D5DEEA] bg-[#10233F] text-white">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.25fr_0.9fr_auto] md:items-start">
          <div>
            <p className="max-w-[14rem] font-display text-3xl leading-tight">{site.name}</p>
            <div className="mt-4 h-px w-16 bg-[#7E97B8]" aria-hidden="true" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#D5DEEA]">{site.tagline}</p>
          </div>
          <nav aria-label="Footer">
            <p className="text-xs font-semibold tracking-[0.18em] text-[#7E97B8] uppercase">Explore</p>
            <ul className="mt-4 grid grid-cols-2 gap-x-8 gap-y-2.5 text-sm">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a className="text-[#D5DEEA] hover:text-white" href={`#${item.id}`}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-[#7E97B8] uppercase">Connect</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {channels.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-[#7E97B8] px-3.5 py-2 text-sm font-medium text-white hover:bg-white hover:text-[#10233F]"
                  >
                    {link.label}
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-[#2C4C78] pt-5 text-center text-xs tracking-wide text-[#7E97B8]">
          © {year} {site.name}
        </div>
      </div>
    </footer>
  )
}
