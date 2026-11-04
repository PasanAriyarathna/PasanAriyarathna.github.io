import { Screen } from "./LaptopMockup"

type PhoneMockupProps = {
  image: string | null
  alt: string
  title: string
}

export function PhoneMockup({ image, alt, title }: PhoneMockupProps) {
  return (
    <figure className="mx-auto w-full max-w-[640px]">
      <div className="flex items-end justify-center rounded-[1.6rem] bg-gradient-to-b from-[#E7EEF6] to-[#C5D0DE] px-6 pt-8 pb-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]">
        <div className="w-[min(100%,230px)]">
          <div className="rounded-[1.8rem] bg-gradient-to-b from-[#243652] to-[#10233F] p-2 shadow-[0_22px_32px_-18px_rgba(9,20,34,0.8)]">
            <div className="relative aspect-[9/19.5] overflow-hidden rounded-[1.35rem] bg-[#091422]">
              <span className="absolute top-2 left-1/2 z-10 h-4 w-16 -translate-x-1/2 rounded-full bg-[#0C1828]" aria-hidden="true" />
              <Screen image={image} alt={alt} title={title} fit="cover" />
            </div>
          </div>
          <div className="mx-auto mt-3 h-3 w-3/4 rounded-full bg-[#10233F]/20 blur-md" aria-hidden="true" />
        </div>
      </div>
    </figure>
  )
}
