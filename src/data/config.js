// ────────────────────────────────────────────────────────────
// Everything content-related lives here so sections stay dumb
// and this file stays the one place to edit copy/config.
// ────────────────────────────────────────────────────────────

export const GITHUB_USERNAME = "AnujrajShrestha";

export const IDENTITY = {
  name: "Anuj Shrestha",
  handle: "Anuj",
  location: "Butwal,Deepnagar, Nepal",
  roles: [
    "Student",
    "AI-ML Engineer",
    "GenAI / RAG Builder",
    "Frontend Developer",
    "Computer Vision Tinkerer",
  ],
  tagline:
    "I build software that reasons — LLM pipelines,Machine learning/Deep learning models, retrieval systems and the full-stack scaffolding that ships them.",
  bio: [
    "I'm Anuj — I got into engineering the usual way: breaking things in Python, then wanting to know why they broke. That curiosity turned into a habit of shipping — small tools, ML experiments, half-finished ideas that occasionally turn into finished ones.",
    "Most of my time right now goes into generative AI — retrieval-augmented pipelines, agent scaffolding, and the unglamorous plumbing (evals, latency, cost) that decides whether an LLM demo survives contact with real users. The rest goes into full-stack work: FastAPI on the backend, React on the front, and enough DevOps to deploy it without holding my breath.",
    "This page isn't a static résumé. It reads my GitHub directly, so what you see below is whatever I actually shipped last — not what I remembered to update.",
  ],
  quote: "Consistency beats talent when talent doesn't stay consistent.",
  status: "open to internships / collaborations",
};

export const SOCIALS = [
  { label: "github.com/AnujrajShrestha", href: `https://github.com/${GITHUB_USERNAME}`, icon: "github" },
  { label: "facebook.com/anuj.shrestha.0.1", href: "https://www.facebook.com/anuj.shrestha.0.1", icon: "facebook" },
  { label: "instagram.com/anuj.shrestha.0.1", href: "https://www.instagram.com/anuj.shrestha.0.1", icon: "instagram" },
];

export const NAV_LINKS = [
  { id: "about", label: "about" },
  { id: "stacks", label: "Teach Stacks" },
  { id: "projects", label: "projects" },
  { id: "activity", label: "activity" },
  { id: "contact", label: "contact" },
];

// Order here = priority order when pinned repos aren't distinguishable
// via the API (unauthenticated REST can't read pins), so this acts as
// a manual "pin" fallback. Anything not listed just sorts by push date.
export const PINNED_FALLBACK = ["GenAI", "Portfolio", "Data_Science", "CardioSift-Diagnostic"];

export const PROJECT_FILTERS = [
  { key: "all", label: "all" },
  { key: "ai", label: "AI / ML", match: ["python", "jupyter notebook"] },
  { key: "web", label: "web", match: ["javascript", "typescript", "html", "css"] },
];

export const TECH_STACKS = [
  {
    category: "Frontend",
    items: ["HTML", "CSS", "JavaScript","tailwindcss","famer-motion","typescript", "GSAP", "React"],
  },
  {
    category: "Backend",
    items: ["Express.js", "Node.js", "FastAPI"],
  },
  {
    category: "Database",
    items: ["MongoDB", "SQL", "PostgreSQL"],
  },
  {
    category: "Deployment & Tools",
    items: ["Vercel", "Render", "Git", "GitHub", "Postman"],
  },
  {
    category: "Data Science & AI",
    items: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Scikit-Learn", "TensorFlow", "GenAI", "Agentic AI", "SciPy"],
  },
  {
    category: "Programming Languages",
    items: ["JavaScript", "Python", "C", "C++", "PHP"],
  },
];

export const TERMINAL_HELP = `Available commands:
  whoami          identity
  about           jump to about
  tech_stacks     jump to stacks
  projects        list + jump to repositories
  contact         jump to contact
  social          list social links
  contributions   show activity stats
  ls              list repositories (live from GitHub)
  sync            force a GitHub re-sync
  date            print current date
  sudo hire-me    ;)
  clear           clear the terminal`;
