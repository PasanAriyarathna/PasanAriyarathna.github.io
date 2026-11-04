export type SkillGroup = {
  id: string
  title: string
  icon: "brain" | "spark" | "code" | "monitor" | "server" | "database" | "wrench"
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    id: "aiml",
    title: "AI / ML",
    icon: "brain",
    skills: ["Python", "scikit-learn", "SHAP", "Particle Swarm Optimization", "Machine learning"],
  },
  {
    id: "genai",
    title: "Generative AI",
    icon: "spark",
    skills: [
      "LLM APIs (Gemini, OpenAI, Groq/Llama)",
      "Multi-agent systems",
      "Retrieval-Augmented Generation",
      "Embeddings",
      "FAISS",
      "HuggingFace",
    ],
  },
  {
    id: "programming",
    title: "Programming",
    icon: "code",
    skills: ["Python", "JavaScript", "TypeScript", "Java", "Kotlin", "SQL", "C"],
  },
  {
    id: "web",
    title: "Web Development",
    icon: "monitor",
    skills: ["React", "Next.js", "Streamlit", "Vite", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    id: "backend",
    title: "Backend / API",
    icon: "server",
    skills: ["FastAPI", "Spring Boot", "REST APIs", "JWT authentication", "API-key authentication"],
  },
  {
    id: "databases",
    title: "Databases",
    icon: "database",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Supabase", "Firebase / Firestore", "Redis"],
  },
  {
    id: "tools",
    title: "Tools & Technologies",
    icon: "wrench",
    skills: ["Git / GitHub", "Docker", "Docker Compose", "GitHub Actions", "Linux", "Unit and integration testing"],
  },
]

export const interests = [
  "Artificial Intelligence and Machine Learning",
  "Generative AI and Large Language Models",
  "Retrieval-Augmented Generation",
  "Multi-agent AI systems",
  "Full-stack software development",
  "Backend API development",
  "Explainable AI",
  "Cloud-native application development",
]
