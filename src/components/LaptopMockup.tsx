import { useEffect, useState } from "react"

type DeviceMockupProps = {
  image: string | null
  alt: string
  title: string
  fit?: "contain" | "cover"
}

export function LaptopMockup({ image, alt, title }: DeviceMockupProps) {
  return (
    <figure className="mx-auto w-full max-w-[640px]">
      <div className="rounded-[1.6rem] bg-gradient-to-b from-[#E7EEF6] to-[#C5D0DE] px-4 pt-8 pb-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] sm:px-7">
        <div className="[perspective:1400px]">
          <div className="origin-bottom [transform:rotateX(8deg)]">
            <div className="rounded-t-[0.9rem] bg-gradient-to-b from-[#243652] to-[#10233F] px-2.5 pt-2.5 pb-3 shadow-[0_18px_28px_-18px_rgba(9,20,34,0.85)]">
              <div className="mb-2 flex justify-center" aria-hidden="true">
                <span className="h-1.5 w-1.5 rounded-full bg-[#7E97B8]" />
              </div>
              <div className="aspect-[11/5] overflow-hidden rounded-[0.2rem] bg-white">
                <Screen image={image} alt={alt} title={title} fit="contain" />
              </div>
            </div>
            <div className="h-1.5 bg-gradient-to-b from-[#2C4C78] to-[#10233F]" aria-hidden="true" />
            <div className="rounded-b-xl bg-gradient-to-b from-[#D7E0EB] to-[#B7C4D4] px-5 pt-2.5 pb-3" aria-hidden="true">
              <div className="grid grid-cols-12 gap-1">
                {Array.from({ length: 24 }, (_, key) => (
                  <span key={key} className="h-1.5 rounded-[2px] bg-[#C3CEDB] shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]" />
                ))}
              </div>
              <span className="mx-auto mt-2 block h-2.5 w-16 rounded-full bg-[#A9B8C9]" />
            </div>
          </div>
        </div>
        <div className="mx-auto -mt-1 h-3 w-[78%] rounded-full bg-[#10233F]/20 blur-md" aria-hidden="true" />
      </div>
    </figure>
  )
}

export function Screen({ image, alt, title, fit = "contain" }: DeviceMockupProps) {
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    setFailed(false)
  }, [image])

  if (!image || failed) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-1 overflow-hidden bg-[#F4F7FB] px-3 text-center sm:gap-2 sm:px-6">
        <p className="font-display text-sm leading-tight text-[#10233F] sm:text-xl">Screenshot not yet provided</p>
        <p className="text-[11px] leading-snug text-[#243B5A] sm:max-w-xs sm:text-sm sm:leading-relaxed">
          Add an image for {title} in src/data/projects.ts. This placeholder is not the application.
        </p>
      </div>
    )
  }

  return (
    <img
      src={image}
      alt={alt}
      className={`h-full w-full ${fit === "cover" ? "object-cover object-top" : "object-contain object-center"}`}
      onError={() => setFailed(true)}
    />
  )
}
