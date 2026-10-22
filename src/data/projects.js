export const projects = [
  {
    slug: "visacheck-ai",
    number: "01",
    name: "VisaCheck AI",
    category: "AI · FULL STACK",
    summary: "An AI-assisted visa eligibility verification experience designed to make travel requirements easier to understand.",
    description:
      "VisaCheck is a concept for helping travelers organize their information and understand visa eligibility requirements. The application combines a React interface, a Node.js API, MongoDB persistence, and a separate Python-based AI component.",
    problem:
      "Visa rules can be confusing, and travelers may struggle to understand which requirements apply to their situation.",
    solution:
      "Build a guided eligibility flow with clear input steps, a structured result view, and an explainable summary of the factors considered.",
    role: "Frontend and full-stack development",
    stack: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Python"],
    image: "/images/visacheck-preview.png",
    github: "https://github.com/fayzannnn",
    demo: "",
    highlights: [
      "Designed a guided multi-step eligibility interface.",
      "Planned a REST API and MongoDB-backed user history.",
      "Separated AI inference from the main Node.js application.",
    ],
  },
  {
    slug: "royal-fitness",
    number: "02",
    name: "Royal Fitness",
    category: "FULL STACK",
    summary: "A MERN fitness club management app with Razorpay payments, Google sign-in, trainer management and an admin dashboard.",
    description:
      "A full MERN web application that brings gym operations into one place: memberships and payments, trainer management, real-time reviews, a chatbot, Excel export and an admin dashboard, in a dark athletic theme. The Express API is deployed on Render and the React frontend on Vercel.",
    problem:
      "Managing member information and bookings across separate workflows can make daily gym operations harder to track.",
    solution:
      "Organize the main workflows into a clear dashboard with reusable forms, lists, and status indicators.",
    role: "Full-stack development",
    stack: ["React", "Node.js", "Express", "MongoDB", "Razorpay"],
    image: "/images/fitness-club-preview.png",
    github: "https://github.com/fayzannnn",
    demo: "",
    highlights: [
      "Integrated Razorpay payments and Google OAuth sign-in.",
      "Built admin dashboards with trainer management and Excel export.",
      "Deployed the Express backend to Render and the React frontend to Vercel.",
    ],
  },
  {
    slug: "developer-ui-lab",
    number: "03",
    name: "Developer UI Lab",
    category: "FRONTEND",
    summary: "A collection of responsive UI experiments, reusable components, and interaction patterns.",
    description:
      "A frontend playground for practicing responsive layouts, accessibility, component composition, and polished interaction states.",
    problem:
      "Small interface experiments are useful for learning, but they are easier to demonstrate when presented consistently.",
    solution:
      "Create a focused gallery of experiments with a short explanation of the goal and implementation choices behind each one.",
    role: "Frontend development",
    stack: ["React", "JavaScript", "Tailwind CSS", "CSS"],
    image: "/images/ui-lab-preview.png",
    github: "https://github.com/fayzannnn",
    demo: "",
    highlights: [
      "Built reusable interface patterns.",
      "Practiced responsive and keyboard-accessible interactions.",
      "Kept layout and content data separate from presentation.",
    ],
  },
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
