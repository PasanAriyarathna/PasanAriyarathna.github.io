import { ArrowUpRight } from "lucide-react"
import { useEffect, useMemo, useRef, useState } from "react"
import { certificates, type Certificate } from "../data/certificates"

export function Certificates() {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [activeId, setActiveId] = useState<string | null>(null)
  const [category, setCategory] = useState("All")

  const categories = useMemo(() => {
    const names = certificates.map((item) => item.category).filter((item) => item.length > 0)
    return ["All", ...new Set(names)]
  }, [])

  const showFilter = new Set(certificates.map((item) => item.category).filter(Boolean)).size >= 2
  const visible = certificates.filter((item) => category === "All" || item.category === category)
  const active = certificates.find((item) => item.id === activeId) ?? null

  useEffect(() => {
    const dialog = dialogRef.current
    if (!activeId || !dialog || dialog.open) return
    dialog.showModal()
  }, [activeId])

  function close() {
    dialogRef.current?.close()
  }

  return (
    <section id="certificates" className="section-anchor border-t border-[#D5DEEA] bg-[#F4F7FB] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="text-xs font-semibold tracking-[0.22em] text-[#3E5C86] uppercase">Certificates</p>
        <h2 className="mt-3 max-w-3xl font-display text-4xl leading-tight text-[#10233F] md:text-5xl">Credentials</h2>
        <div className="mt-4 h-px w-24 bg-[#2C4C78]" aria-hidden="true" />
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#243B5A]">
          Each frame opens the certificate file. A verification link is shown only when one was supplied.
        </p>
        {showFilter ? (
          <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter certificates">
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                aria-pressed={category === item}
                onClick={() => setCategory(item)}
                className={`rounded-full px-3 py-2 text-sm font-medium ${
                  category === item
                    ? "bg-[#10233F] text-white"
                    : "border border-[#2C4C78] text-[#10233F] hover:bg-[#10233F] hover:text-white"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        ) : null}
        {certificates.length === 0 ? (
          <EmptyState message="Certificates will appear here once they are added in src/data/certificates.ts." />
        ) : visible.length === 0 ? (
          <EmptyState message="No certificates match this category." />
        ) : (
          <ul className="mt-10 space-y-8">
            {visible.map((item) => (
              <li key={item.id} className="grid items-center gap-8 lg:grid-cols-[1.35fr_0.75fr]">
                <CertificateFrame certificate={item} onOpen={() => setActiveId(item.id)} />
                <CertificateDetails certificate={item} onOpen={() => setActiveId(item.id)} />
              </li>
            ))}
          </ul>
        )}
      </div>
      <dialog
        ref={dialogRef}
        onClose={() => setActiveId(null)}
        className="w-[min(980px,calc(100%-2rem))] border border-[#D5DEEA] bg-[#F4F7FB] p-0 text-[#10233F] backdrop:bg-[#091422]/75"
      >
        {active ? (
          <div>
            <div className="flex items-start justify-between gap-4 border-b border-[#D5DEEA] px-5 py-4">
              <div>
                <h3 className="font-display text-2xl">{active.title}</h3>
                <p className="mt-1 text-sm text-[#243B5A]">
                  {active.issuer} · {active.issueDate}
                </p>
                {active.verificationCode ? (
                  <p className="mt-1 text-sm text-[#243B5A]">Verification code: {active.verificationCode}</p>
                ) : null}
              </div>
              <button
                type="button"
                onClick={close}
                className="rounded-full bg-[#10233F] px-4 py-2 text-sm font-semibold text-white hover:bg-[#2C4C78]"
              >
                Close
              </button>
            </div>
            {active.fileUrl ? (
              <div className="bg-gradient-to-b from-[#E7EEF6] to-[#C5D0DE] p-4 sm:p-6">
                <div className="bg-[#10233F] p-2 sm:p-3">
                  <iframe
                    title={`Preview of ${active.title}`}
                    src={`${active.fileUrl}#toolbar=0&navpanes=0`}
                    className="aspect-[1.414/1] w-full bg-[#F4F1EA]"
                  />
                </div>
              </div>
            ) : (
              <p className="px-5 py-8 text-[#243B5A]">No certificate file has been added for this record.</p>
            )}
            <div className="flex flex-wrap gap-3 border-t border-[#D5DEEA] px-5 py-4">
              {active.fileUrl ? (
                <a
                  href={active.fileUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#10233F] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#2C4C78]"
                >
                  Open PDF
                  <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              ) : null}
              {active.credentialUrl ? (
                <a
                  href={active.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-[#2C4C78] px-4 py-2.5 text-sm font-semibold text-[#10233F] hover:bg-[#10233F] hover:text-white"
                >
                  Verification page
                  <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              ) : null}
            </div>
          </div>
        ) : null}
      </dialog>
    </section>
  )
}

function CertificateFrame({ certificate, onOpen }: { certificate: Certificate; onOpen: () => void }) {
  return (
    <button type="button" onClick={onOpen} className="w-full text-left" aria-label={`View ${certificate.title}`}>
      <figure className="rounded-[1.5rem] bg-gradient-to-b from-[#E7EEF6] to-[#C5D0DE] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] sm:p-6">
        <div className="bg-[#10233F] p-2.5 shadow-[0_22px_36px_-22px_rgba(9,20,34,0.8)] sm:p-3.5">
          <div className="bg-[#F4F1EA] p-2 sm:p-3">
            <img
              src={certificate.previewUrl}
              alt={`${certificate.title} awarded to ${certificate.recipient}`}
              className="aspect-[1.414/1] w-full object-contain"
            />
          </div>
        </div>
      </figure>
    </button>
  )
}

function CertificateDetails({ certificate, onOpen }: { certificate: Certificate; onOpen: () => void }) {
  return (
    <article className="border border-[#D5DEEA] border-t-[3px] border-t-[#2C4C78] bg-white p-6 shadow-[0_18px_40px_-28px_rgba(16,35,63,0.45)] md:p-7">
      <p className="text-xs font-semibold tracking-[0.18em] text-[#3E5C86] uppercase">{certificate.category || "Certificate"}</p>
      <h3 className="mt-3 font-display text-3xl leading-snug text-[#10233F]">{certificate.title}</h3>
      <p className="mt-3 leading-relaxed text-[#243B5A]">{certificate.issuer}</p>
      <p className="mt-2 text-sm text-[#3E5C86]">{certificate.recipient}</p>
      <p className="mt-4 border-l-2 border-[#7E97B8] pl-3 text-sm text-[#243B5A]">{certificate.issueDate}</p>
      {certificate.verificationCode ? (
        <p className="mt-4 text-sm text-[#243B5A]">Verification code: {certificate.verificationCode}</p>
      ) : null}
      <div className="mt-6 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={onOpen}
          className="inline-flex items-center gap-1.5 rounded-full bg-[#10233F] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#2C4C78]"
        >
          View certificate
          <ArrowUpRight size={15} aria-hidden="true" />
        </button>
        {certificate.credentialUrl ? (
          <a
            href={certificate.credentialUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-[#2C4C78] px-4 py-2.5 text-sm font-semibold text-[#10233F] hover:bg-[#10233F] hover:text-white"
          >
            Verify credential
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        ) : null}
      </div>
    </article>
  )
}

function EmptyState({ message }: { message: string }) {
  return (
    <div className="mt-10 border border-dashed border-[#7E97B8] bg-white px-6 py-12 text-center">
      <p className="font-display text-2xl text-[#10233F]">No certificates to show</p>
      <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-[#243B5A]">{message}</p>
    </div>
  )
}
