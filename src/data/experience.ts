export type TimelineItem = {
  id: string
  title: string
  organization: string
  period: string
  summary: string
  points: string[]
  documentUrl?: string
  documentLabel?: string
}

export const experience: TimelineItem[] = [
  {
    id: "uovt-trainee",
    title: "Non-Academic Staff Trainee",
    organization: "Examination Division, University of Vocational Technology, Rathmalana",
    period: "September 2022 – March 2023",
    summary: "Supported daily work in the examination division.",
    points: [
      "Supported daily examination-division operations, coordinating with colleagues and completing tasks accurately within deadlines.",
      "Developed communication, teamwork, time-management, and problem-solving skills in a professional environment.",
    ],
    documentUrl: "/certificates/service-letter.pdf",
    documentLabel: "Service letter",
  },
]

export const competitions: TimelineItem[] = [
  {
    id: "cursor-buildathon",
    title: "Cursor Buildathon — Gemini Track",
    organization: "",
    period: "",
    summary: "Placed 10th among participating teams.",
    points: [
      "Participated with an AI-driven solution built using AI-assisted development.",
    ],
  },
  {
    id: "ai-challenge-2026",
    title: "AI Challenge Sri Lanka 2026 — AI Buildathon",
    organization: "Syntax Squad",
    period: "",
    summary: "Certificate of Participation.",
    points: [
      "Participated as a member of Syntax Squad.",
      "Contributed to an AI-driven project focused on real-world challenges.",
      "Received a Certificate of Participation.",
    ],
    documentUrl: "/certificates/ai-challenge-2026.pdf",
    documentLabel: "View certificate",
  },
]
