import pythonPreview from "../assets/certificates/python-for-beginners.jpg"

export type Certificate = {
  id: string
  title: string
  issuer: string
  issueDate: string
  recipient: string
  verificationCode: string
  credentialUrl: string
  fileUrl: string
  previewUrl: string
  category: string
}

export const certificates: Certificate[] = [
  {
    id: "python-for-beginners",
    title: "Python for Beginners E-Certificate",
    issuer: "University of Moratuwa Open Learning Platform",
    issueDate: "27 February 2025",
    recipient: "H.A.P.P. Ariyarathna",
    verificationCode: "VZlk8ddqRH",
    credentialUrl: "https://open.uom.lk/verify",
    fileUrl: "/certificates/python-for-beginners.pdf",
    previewUrl: pythonPreview,
    category: "Course",
  },
]
