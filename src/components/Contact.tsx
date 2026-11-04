import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react"
import { useState, type FormEvent } from "react"
import { formEndpoint, site } from "../data/site"

type Fields = {
  name: string
  email: string
  subject: string
  message: string
}

type Errors = Partial<Record<keyof Fields, string>>

const emptyFields: Fields = { name: "", email: "", subject: "", message: "" }

const channels = [
  { label: "GitHub", href: site.github },
  { label: "LinkedIn", href: site.linkedin },
  { label: "TryHackMe", href: site.tryhackme },
]

export function Contact() {
  const [fields, setFields] = useState<Fields>(emptyFields)
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")
  const [statusMessage, setStatusMessage] = useState("")

  function update(key: keyof Fields, value: string) {
    setFields((current) => ({ ...current, [key]: value }))
    setErrors((current) => ({ ...current, [key]: undefined }))
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextErrors = validate(fields)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      setStatus("error")
      setStatusMessage("Please correct the highlighted fields.")
      return
    }

    if (!formEndpoint) {
      const body = [`Name: ${fields.name.trim()}`, `Email: ${fields.email.trim()}`, "", fields.message.trim()].join("\n")
      setStatus("success")
      setStatusMessage(`Your email app should open with this message addressed to ${site.email}. Send it from there.`)
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(fields.subject.trim())}&body=${encodeURIComponent(body)}`
      return
    }

    setStatus("sending")
    setStatusMessage("")
    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: fields.name.trim(),
          email: fields.email.trim(),
          _replyto: fields.email.trim(),
          subject: fields.subject.trim(),
          message: fields.message.trim(),
        }),
      })
      if (!response.ok) {
        setStatus("error")
        setStatusMessage(`The message could not be sent. Please email ${site.email} directly.`)
        return
      }
      setFields(emptyFields)
      setStatus("success")
      setStatusMessage("Message sent. Thank you — I will get back to you.")
    } catch {
      setStatus("error")
      setStatusMessage(`The message could not be sent. Please email ${site.email} directly.`)
    }
  }

  return (
    <section id="contact" className="section-anchor border-t border-[#D5DEEA] bg-[#F4F7FB] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="text-xs font-semibold tracking-[0.22em] text-[#3E5C86] uppercase">Contact</p>
        <h2 className="mt-3 max-w-3xl font-display text-4xl leading-tight text-[#10233F] md:text-5xl">Let's talk.</h2>
        <div className="mt-4 h-px w-24 bg-[#2C4C78]" aria-hidden="true" />
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#243B5A]">
          I welcome notes about AI, machine learning, software development, internships, and collaboration.
        </p>

        <div className="mt-10 grid items-start gap-6 lg:grid-cols-[0.82fr_1.18fr]">
          <aside className="border border-[#D5DEEA] border-t-[3px] border-t-[#2C4C78] bg-white p-6 shadow-[0_18px_40px_-28px_rgba(16,35,63,0.45)] md:p-8">
            <p className="text-xs font-semibold tracking-[0.18em] text-[#3E5C86] uppercase">Reach me</p>
            <ul className="mt-5 space-y-4">
              <li>
                <a className="group flex items-start gap-3" href={`mailto:${site.email}`}>
                  <Mail className="mt-0.5 shrink-0 text-[#2C4C78]" size={18} aria-hidden="true" />
                  <span>
                    <span className="block text-xs font-semibold tracking-[0.14em] text-[#3E5C86] uppercase">Email</span>
                    <span className="mt-1 block text-sm text-[#10233F] underline decoration-[#7E97B8] underline-offset-4 group-hover:text-[#2C4C78]">
                      {site.email}
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a className="group flex items-start gap-3" href={site.phoneHref}>
                  <Phone className="mt-0.5 shrink-0 text-[#2C4C78]" size={18} aria-hidden="true" />
                  <span>
                    <span className="block text-xs font-semibold tracking-[0.14em] text-[#3E5C86] uppercase">Phone</span>
                    <span className="mt-1 block text-sm text-[#10233F] underline decoration-[#7E97B8] underline-offset-4 group-hover:text-[#2C4C78]">
                      {site.phone}
                    </span>
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 shrink-0 text-[#2C4C78]" size={18} aria-hidden="true" />
                <span>
                  <span className="block text-xs font-semibold tracking-[0.14em] text-[#3E5C86] uppercase">Location</span>
                  <span className="mt-1 block text-sm text-[#10233F]">{site.location}</span>
                </span>
              </li>
            </ul>
            <ul className="mt-7 flex flex-wrap gap-2">
              {channels.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-[#2C4C78] px-3.5 py-2 text-sm font-medium text-[#10233F] hover:bg-[#10233F] hover:text-white"
                  >
                    {link.label}
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          <form
            onSubmit={onSubmit}
            noValidate
            className="border border-[#D5DEEA] border-t-[3px] border-t-[#2C4C78] bg-white p-6 shadow-[0_18px_40px_-28px_rgba(16,35,63,0.45)] md:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field
                id="contact-name"
                label="Name"
                value={fields.name}
                error={errors.name}
                onChange={(value) => update("name", value)}
                autoComplete="name"
              />
              <Field
                id="contact-email"
                label="Email"
                type="email"
                value={fields.email}
                error={errors.email}
                onChange={(value) => update("email", value)}
                autoComplete="email"
              />
            </div>
            <div className="mt-4">
              <Field
                id="contact-subject"
                label="Subject"
                value={fields.subject}
                error={errors.subject}
                onChange={(value) => update("subject", value)}
              />
            </div>
            <div className="mt-4">
              <label htmlFor="contact-message" className="text-sm font-medium text-[#10233F]">
                Message
              </label>
              <textarea
                id="contact-message"
                value={fields.message}
                onChange={(event) => update("message", event.target.value)}
                rows={6}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "contact-message-error" : undefined}
                className="mt-2 w-full border border-[#D5DEEA] bg-[#F4F7FB] px-3 py-2.5 text-[#10233F] outline-none focus:border-[#2C4C78]"
              />
              {errors.message ? (
                <p id="contact-message-error" className="mt-1 text-sm text-[#8A3A3A]">
                  {errors.message}
                </p>
              ) : null}
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-6 rounded-full bg-[#10233F] px-5 py-3 text-sm font-semibold text-white hover:bg-[#2C4C78] disabled:opacity-60"
            >
              {status === "sending" ? "Sending…" : "Send message"}
            </button>
            {statusMessage ? (
              <p role="alert" className={`mt-4 text-sm leading-relaxed ${status === "success" ? "text-[#2C4C78]" : "text-[#8A3A3A]"}`}>
                {statusMessage}
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  )
}

function Field({
  id,
  label,
  value,
  error,
  onChange,
  type = "text",
  autoComplete,
}: {
  id: string
  label: string
  value: string
  error?: string
  onChange: (value: string) => void
  type?: string
  autoComplete?: string
}) {
  const errorId = `${id}-error`
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-[#10233F]">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        autoComplete={autoComplete}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className="mt-2 w-full border border-[#D5DEEA] bg-[#F4F7FB] px-3 py-2.5 text-[#10233F] outline-none focus:border-[#2C4C78]"
      />
      {error ? (
        <p id={errorId} className="mt-1 text-sm text-[#8A3A3A]">
          {error}
        </p>
      ) : null}
    </div>
  )
}

function validate(fields: Fields): Errors {
  const errors: Errors = {}
  if (fields.name.trim().length < 2) errors.name = "Please enter your name."
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) errors.email = "Enter a valid email address."
  if (fields.subject.trim().length < 2) errors.subject = "Please add a subject."
  if (fields.message.trim().length < 10) errors.message = "Please write a message of at least 10 characters."
  return errors
}
