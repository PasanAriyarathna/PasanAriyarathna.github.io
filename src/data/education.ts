export type EducationRecord = {
  id: string
  institution: string
  qualification: string
  period: string
  status: string
  location: string
}

export const education: EducationRecord[] = [
  {
    id: "horizon",
    institution: "Horizon Campus",
    qualification: "BSc (Hons) in Information Technology",
    period: "2023 – Present",
    status: "Undergraduate",
    location: "Sri Lanka",
  },
]
