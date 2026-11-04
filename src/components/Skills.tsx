import { Brain, Code2, Database, Monitor, Server, Sparkles, Wrench, type LucideIcon } from "lucide-react"
import { skillGroups, type SkillGroup } from "../data/skills"

const icons: Record<SkillGroup["icon"], LucideIcon> = {
  brain: Brain,
  spark: Sparkles,
  code: Code2,
  monitor: Monitor,
  server: Server,
  database: Database,
  wrench: Wrench,
}

export function Skills() {
  return (
    <div className="mt-16 border-t border-[#D5DEEA] pt-14">
      <p className="text-xs font-semibold tracking-[0.22em] text-[#3E5C86] uppercase">Toolkit</p>
      <h3 className="mt-3 font-display text-3xl text-[#10233F] md:text-4xl">Technical skills</h3>
      <div className="mt-4 h-px w-24 bg-[#2C4C78]" aria-hidden="true" />

      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => {
          const Icon = icons[group.icon]
          const wide = group.id === "tools"
          return (
            <li
              key={group.id}
              className={`border border-[#D5DEEA] border-t-[3px] border-t-[#2C4C78] bg-white p-5 shadow-[0_18px_40px_-28px_rgba(16,35,63,0.45)] ${
                wide ? "sm:col-span-2 lg:col-span-3" : ""
              }`}
            >
              <div className={wide ? "lg:flex lg:items-start lg:gap-10" : undefined}>
                <div className={`flex items-center gap-3 ${wide ? "lg:w-56 lg:shrink-0" : ""}`}>
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center bg-[#E7EEF6] text-[#2C4C78]">
                    <Icon size={18} aria-hidden="true" />
                  </span>
                  <h4 className="font-medium text-[#10233F]">{group.title}</h4>
                </div>
                <ul
                  className={`mt-4 grid gap-y-2 ${
                    wide ? "sm:grid-cols-2 lg:mt-2 lg:flex-1 lg:grid-cols-3" : ""
                  }`}
                >
                  {group.skills.map((skill) => (
                    <li key={skill} className="border-l-2 border-[#7E97B8] pl-3 text-sm leading-relaxed text-[#243B5A]">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
