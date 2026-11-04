import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react"
import { navItems, site } from "../data/site"

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState<string>(navItems[0].id)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const nodes = navItems
      .map((item) => document.getElementById(item.id))
      .filter((node): node is HTMLElement => node !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target.id) setActive(visible.target.id)
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0.1, 0.25, 0.5] },
    )

    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  const light = !scrolled

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 ${
        light ? "bg-transparent" : "border-b border-sky/40 bg-navy"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#home" className={`font-display text-xl italic ${light ? "text-navy" : "text-white"}`}>
          <span className="sm:hidden">Pasan</span>
          <span className="hidden sm:inline">{site.name}</span>
        </a>
        <nav className="hidden items-center gap-5 xl:flex" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={active === item.id ? "true" : undefined}
              className={`border-b-2 pb-1 text-sm ${
                light
                  ? active === item.id
                    ? "border-blue text-navy"
                    : "border-transparent text-navy/70 hover:text-navy"
                  : active === item.id
                    ? "border-sky text-white"
                    : "border-transparent text-ice/80 hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          className={`inline-flex h-11 w-11 items-center justify-center rounded-full border xl:hidden ${
            light ? "border-navy/15 bg-white/70 text-navy" : "border-sky/40 text-white"
          }`}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open ? (
        <nav
          id="mobile-menu"
          className={`border-t px-5 py-4 xl:hidden ${
            light ? "border-sky bg-white text-navy" : "border-sky/30 bg-navy text-white"
          }`}
          aria-label="Mobile"
        >
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={active === item.id ? "true" : undefined}
                  className={`block border-l-2 px-3 py-3 text-base ${
                    light
                      ? active === item.id
                        ? "border-blue text-navy"
                        : "border-transparent text-navy/80"
                      : active === item.id
                        ? "border-sky text-white"
                        : "border-transparent text-ice"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  )
}
