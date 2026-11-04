import heartRisk from "../assets/projects/explainable-heart-risk.png"
import ceygreenDashboard from "../assets/projects/ceygreen-dashboard.png"
import ceygreenSecondary from "../assets/projects/ceygreen-secondary.png"
import civic from "../assets/projects/civic-issue-prioritizer.png"
import microserve from "../assets/projects/microservice.png"
import tutor from "../assets/projects/multiagent-tutor.png"
import navix from "../assets/projects/navix.png"

export type DeviceType = "laptop" | "phone"

export type Project = {
  id: string
  title: string
  category: string
  summary: string
  problem: string
  features: string[]
  technologies: string[]
  deviceType: DeviceType
  image: string | null
  additionalImages: string[]
  repositoryUrl: string
  liveDemoUrl: string
  demoVideoUrl: string
  documentationUrl: string
  role: string
}

export const projects: Project[] = [
  {
    id: "heart-risk",
    title: "Explainable Heart Risk Prediction",
    category: "AI / Machine Learning / Explainable AI",
    summary:
      "A machine-learning pipeline that estimates heart-disease risk and explains each prediction in plain language.",
    problem:
      "A clinical risk score is hard to trust when the model cannot show which factors drove the result.",
    features: [
      "Machine-learning pipeline on a 50,000-record dataset, covering preprocessing, training, and evaluation.",
      "Binary particle swarm optimization selected 7 features from 20 clinical features.",
      "Compared Logistic Regression, Naive Bayes, K-Nearest Neighbours, and Random Forest.",
      "Reported Logistic Regression test F1-score of 0.917.",
      "FastAPI exposes predictions together with SHAP feature contributions.",
      "Groq/Llama turns those contributions into plain-language explanations.",
    ],
    technologies: ["Python", "scikit-learn", "PSO", "SHAP", "FastAPI", "Groq/Llama"],
    deviceType: "laptop",
    image: heartRisk,
    additionalImages: [],
    repositoryUrl: "https://github.com/PasanAriyarathna/Explainable-Heart-Risk-Prediction",
    liveDemoUrl: "",
    demoVideoUrl: "",
    documentationUrl: "",
    role: "Designed and built the prediction pipeline, SHAP explanations, and FastAPI service.",
  },
  {
    id: "civic-issue-prioritizer",
    title: "Civic Issue Prioritizer",
    category: "AI-powered application / Software Development",
    summary:
      "A multimodal platform that turns citizen infrastructure reports into prioritized, trackable municipal cases.",
    problem:
      "Municipal grievance portals collect unprioritized, duplicate reports and give citizens little visibility into what happens next.",
    features: [
      "Guided citizen reporting with photo evidence and Sri Lanka geocoding.",
      "Gemini vision triage for defects such as potholes, water leaks, exposed lines, and waste dumping.",
      "Risk score based on safety, urgency, community impact, and duplicate volume.",
      "Clustering of repeated reports into a single incident.",
      "Municipal view for dispatch, plus before-and-after resolution evidence.",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Gemini", "Supabase", "Leaflet"],
    deviceType: "laptop",
    image: civic,
    additionalImages: [],
    repositoryUrl: "https://github.com/PasanAriyarathna/civic-issue-prioritizer",
    liveDemoUrl: "https://civic-issue-prioritizer.vercel.app",
    demoVideoUrl: "",
    documentationUrl: "",
    role: "Primary author, with contributions from collaborators.",
  },
  {
    id: "multiagent-tutor",
    title: "Multi-Agent Tutor",
    category: "Generative AI / RAG / Multi-agent systems",
    summary:
      "A tutoring system that explains a topic, quizzes the learner, and assigns remedial practice on weak concepts.",
    problem:
      "A single chat reply is difficult to check, and it does not adapt when a beginner misunderstands one specific idea.",
    features: [
      "Six agents: Router, Explainer, Quiz, Evaluation, Remedial, and Report.",
      "Retrieval-Augmented Generation over lesson PDFs using FAISS and HuggingFace embeddings.",
      "Code-aware evaluation of student answers.",
      "Remedial practice aimed at the concepts a learner missed.",
      "Structured progress reports.",
    ],
    technologies: ["Python", "Streamlit", "Groq", "Llama", "FAISS", "HuggingFace", "RAG"],
    deviceType: "laptop",
    image: tutor,
    additionalImages: [],
    repositoryUrl: "https://github.com/PasanAriyarathna/multiagent-tutor",
    liveDemoUrl: "",
    demoVideoUrl: "https://youtu.be/dTARbcYNXts",
    documentationUrl: "",
    role: "Sole author.",
  },
  {
    id: "navix",
    title: "NaviX",
    category: "AI / Software Development",
    summary:
      "A voice-guided travel companion for Sri Lanka, combining live maps, weather, and an AI tour guide.",
    problem:
      "Travellers need heritage context, weather, and directions without spending the whole trip looking at a screen.",
    features: [
      "Live map of nearby heritage sites.",
      "Multi-agent tour guidance with OpenAI and a Gemini fallback.",
      "Speech recognition and text-to-speech for hands-free use.",
      "Weather-aware travel tips.",
      "Searchable catalogue of Sri Lankan destinations.",
    ],
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Cloudflare Workers",
      "Cloudflare D1",
      "Google Maps",
      "OpenWeather",
      "OpenAI",
      "Gemini",
    ],
    deviceType: "laptop",
    image: navix,
    additionalImages: [],
    repositoryUrl: "https://github.com/PasanAriyarathna/NaviX",
    liveDemoUrl: "https://navix-frontend.pages.dev",
    demoVideoUrl: "",
    documentationUrl: "",
    role: "Team contributor. My work covered mobile navigation, Docker-based local setup, and integrating those pieces into the app.",
  },
  {
    id: "microserve",
    title: "MicroServe",
    category: "Android / Local services marketplace",
    summary:
      "A native Android marketplace that connects local customers with service providers for jobs, bids, and in-app payment.",
    problem:
      "Finding reliable local skilled labor is fragmented across chat groups and word of mouth, with no structured way to discover work or pay for it.",
    features: [
      "Nine service categories, from plumbing and electrical work to cleaning, gardening, and carpentry.",
      "Customers post requests, review bids, and confirm when the work is complete.",
      "Providers browse open jobs, place bids, and track assigned work.",
      "M-Points wallet and escrow for payment.",
      "Sri Lanka locations, with English, Sinhala, and Tamil.",
      "Admin tools for users, services, transactions, and platform escrow.",
    ],
    technologies: ["Kotlin", "Android", "Firebase Auth", "Cloud Firestore", "Cloud Functions", "Material Design"],
    deviceType: "phone",
    image: microserve,
    additionalImages: [],
    repositoryUrl: "https://github.com/vikumkodikara/MicroServe",
    liveDemoUrl: "",
    demoVideoUrl: "https://youtu.be/fo4XVmgOnIo",
    documentationUrl: "",
    role: "Team contributor. My work covered service requests and provider services in Firebase, M-Points payment and escrow including Cloud Functions, billing and job completion, ratings, and the province, district, and city location picker.",
  },
  {
    id: "ceygreen",
    title: "CeyGreen",
    category: "Cloud-native software / Greenhouse management",
    summary:
      "A cloud-native greenhouse platform for climate telemetry, plant-disease diagnosis, and treatment advice.",
    problem:
      "Greenhouse operators need climate data, a diagnosis, and a suitable remedy in one system rather than separate tools.",
    features: [
      "Dashboard for temperature, humidity, soil moisture, and light.",
      "Plant disease diagnosis with scan history.",
      "Treatment recommendations with search, alternatives, and farmer ratings.",
      "Marketplace, community forum, and sales analytics as part of the wider platform.",
    ],
    technologies: ["React", "TypeScript", "Spring Boot", "PostgreSQL", "Kafka", "Docker", "GitHub Actions", "Azure"],
    deviceType: "laptop",
    image: ceygreenDashboard,
    additionalImages: [ceygreenSecondary],
    repositoryUrl: "https://github.com/vikumkodikara/CeyGreen",
    liveDemoUrl: "http://172.198.138.134:3000",
    demoVideoUrl: "https://youtu.be/_WHYDPJGgfQ",
    documentationUrl: "",
    role: "Team contributor on the treatment service and its interface: REST endpoints, PostgreSQL remedy data and migrations, search, alternative remedies, farmer ratings, Kafka events, and API-key plus JWT checks. Also worked with the project's Docker Compose and GitHub Actions workflow.",
  },
]
