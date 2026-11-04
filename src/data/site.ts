export const site = {
  name: "Pasan Ariyarathna",
  greeting: "Hi, I'm",
  role: "AI Engineer | Machine Learning | Software Development",
  location: "Kalutara, Sri Lanka",
  tagline: "Intelligent applications, built with care.",
  email: "priyasanka19@gmail.com",
  phone: "+94 77 644 9632",
  phoneHref: "tel:+94776449632",
  linkedin: "https://www.linkedin.com/in/pasan-ariyarathna/",
  github: "https://github.com/PasanAriyarathna",
  tryhackme: "https://tryhackme.com/p/Pasan05",
  cvUrl: "/cv/Pasan-Ariyarathna.pdf",
} as const

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "Who Am I" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "certificates", label: "Certificates" },
  { id: "contact", label: "Contact" },
] as const

export const formEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT?.trim() ?? ""
