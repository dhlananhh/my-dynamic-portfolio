export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  imageUrl: string;
  videoUrl?: string;
  githubUrl: string;
  tools: string[];
  category: string;
  slug: string;
  projectStartDate: Date;
  projectStatus: string;
  liveDemoUrl?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  company?: string;
  avatarUrl?: string;
}

export const projectsData: Project[] = [
  {
    id: "1",
    title: "Ecommerce Full-stack Website",
    slug: "ecommerce-website",
    shortDescription: "Online ecommerce website, with chatbot integration.",
    description: "This project serves as one of my personal projects.",
    imageUrl: "/images/ecommerce-project.png",
    githubUrl: "https://github.com/dhlananhh/quickcart/",
    tools: [ "Next.js", "TailwindCSS", "Clerk", "MongoDB" ],
    category: "Web",
    projectStartDate: new Date("2025-05-27"),
    projectStatus: "In Progress",
    liveDemoUrl: "https://quickcart-gs.vercel.app/"
  },
  {
    id: "2",
    title: "Green Grocery Full-stack Website",
    slug: "green-grocery-website",
    shortDescription: "Online green grocery website.",
    description: "This project serves as one of my personal projects.",
    imageUrl: "",
    githubUrl: "https://github.com/dhlananhh/green_grocery/",
    tools: [ "Next.js", "TailwindCSS", "Clerk", "MongoDB", "Node.js" ],
    category: "Web",
    projectStartDate: new Date("2025-05-27"),
    projectStatus: "In Progress",
    liveDemoUrl: "https://greencart-gs.vercel.app"
  },
  {
    id: "3",
    title: "Online Bookstore Frontend Project",
    slug: "online-bookstore-project-frontend",
    shortDescription: "Online bookstore system, with chatbot integration.",
    description: "This project serves as a final report exam on software architecture. I am a member of this project, as a frontend coder, building and integrating chatbot into the bookstore system.",
    imageUrl: "/images/bookstore-project.png",
    githubUrl: "https://github.com/minhlq2003/bookstore-frontend-nextjs",
    tools: [ "Next.js", "TailwindCSS", "TypeScript" ],
    category: "Web",
    projectStartDate: new Date("2025-01-11"),
    projectStatus: "Completed",
    liveDemoUrl: "https://bookstore-frontend-nextjs.vercel.app/"
  },
  {
    id: "4",
    title: "Online Bookstore Backend Project",
    slug: "online-bookstore-project-backend",
    shortDescription: "Backend services for the online bookstore system.",
    description: "This project serves as a final report exam on software architecture, focusing on the backend part.",
    imageUrl: "/images/bookstore-project.png",
    githubUrl: "https://github.com/HieuTrungMc/bookstore-backend-nodejs",
    tools: [ "Node.js", "Express.js", "Prisma", "MariaDB" ],
    category: "Web",
    projectStartDate: new Date("2025-01-11"),
    projectStatus: "Completed",
  },
  {
    id: "5",
    title: "Bookstore Chatbot",
    slug: "bookstore-chatbot",
    shortDescription: "An integrated chatbot for customer assistance and book search.",
    description: "This project serves as a final report exam on software architecture. I am a member of this project, as a frontend coder, building and integrating chatbot into the bookstore system.",
    imageUrl: "/images/bookstore-project.png",
    githubUrl: "https://github.com/dhlananhh/bookstore_chatbot",
    tools: [ "Python", "HTML", "CSS", "JavaScript", "MariaDB" ],
    category: "AI",
    projectStartDate: new Date("2025-01-11"),
    projectStatus: "Completed",
  },
  {
    id: "6",
    title: "Portfolio Website Project",
    slug: "portfolio-website-project",
    shortDescription: "My personal 3D Portfolio Website to showcase my skills and projects.",
    description: "This project serves as one of my personal projects.",
    imageUrl: "/images/my-portfolio-website-project.png",
    githubUrl: "https://github.com/dhlananhh/my-3d-portfolio",
    tools: [ "Next.js", "TailwindCSS", "TypeScript", "Radix UI", "Shadcn UI" ],
    category: "Web",
    projectStartDate: new Date("2025-01-11"),
    projectStatus: "Completed",
    liveDemoUrl: "https://my-3d-portfolio-wine.vercel.app/"
  },
  {
    id: "7",
    title: "RAG System with Gemini & MongoDB",
    slug: "rag-system-with-gemini-and-mongodb-atlas",
    shortDescription: "RAG system using Google's Gemini and MongoDB Atlas for efficient vector search.",
    description: "This project serves as one of my personal projects.",
    imageUrl: "/images/rag_system.png",
    githubUrl: "https://github.com/dhlananhh/Build_RAG_System_with_Gemini_and_MongoDB",
    tools: [ "Python", "GenAI", "MongoDB" ],
    category: "AI",
    projectStartDate: new Date("2025-01-11"),
    projectStatus: "Completed",
  },
  {
    id: "8",
    title: "RAG System with Gemini & ChromaDB",
    slug: "rag-system-with-gemini-and-chromadb",
    shortDescription: "RAG system using Gemini Flash and ChromaDB to query PDF documents.",
    description: "This project serves as one of my personal projects.",
    imageUrl: "/images/rag_system.png",
    githubUrl: "https://github.com/dhlananhh/Build_RAG_System_with_Gemini_and_ChromaDB",
    tools: [ "Python", "GenAI", "ChromaDB" ],
    category: "AI",
    projectStartDate: new Date("2025-01-11"),
    projectStatus: "Completed",
  },
  {
    id: "9",
    title: "Educational App",
    slug: "educational-app",
    shortDescription: "An interactive educational mobile application for learning.",
    description: "This project serves as one of my personal projects.",
    imageUrl: "",
    githubUrl: "https://github.com/dhlananhh/Educational-App",
    tools: [ "React Native", "TypeScript" ],
    category: "Mobile",
    projectStartDate: new Date("2024-11-01"),
    projectStatus: "Completed",
  },
];

export const testimonialsData: Testimonial[] = [
  {
    id: "1",
    quote: "Lan Anh's coding ability and meticulousness have been a great help to our dev team. The quality exceeded expectations!",
    author: "Jane Doe",
    company: "Senior Engineer, Big Game Studio",
    avatarUrl: "/images/jane-doe.png",
  },
  {
    id: "2",
    quote: "Working with Lan Anh was very professional and efficient. She not only has good technical skills but also has the ability to work in a team, and adapt to new environments wonderfully.",
    author: "John Smith",
    company: "Head of IT of ABC company",
    avatarUrl: "/images/john-smith.png",
  },
];
