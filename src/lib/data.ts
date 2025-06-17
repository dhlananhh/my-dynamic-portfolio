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
  keyFeatures?: string[];
  galleryImages?: string[];
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
    shortDescription: "A modern, full-featured e-commerce platform with real-time chatbot support.",
    description: "The goal of this personal project was to build a complete, end-to-end e-commerce solution from scratch. It demonstrates proficiency in full-stack development, including user authentication, product management, shopping cart functionality, and integrating a third-party payment gateway.",
    imageUrl: "/images/ecommerce-project.png",
    githubUrl: "https://github.com/dhlananhh/quickcart/",
    tools: [ "Next.js", "TailwindCSS", "Clerk", "MongoDB", "Stripe" ],
    category: "Web",
    projectStartDate: new Date("2025-05-27"),
    projectStatus: "In Progress",
    liveDemoUrl: "https://quickcart-gs.vercel.app/",
    keyFeatures: [ "Secure user authentication with Clerk", "Dynamic product catalog with search and filtering", "Fully functional shopping cart", "Stripe integration for payments (test mode)", "Integrated chatbot for customer support" ],
    galleryImages: [ "/images/ecommerce-project.png" ]
  },
  {
    id: "2",
    title: "Green Grocery Full-stack Website",
    slug: "green-grocery-website",
    shortDescription: "An online store specializing in fresh, organic groceries.",
    description: "This project focuses on creating a clean and intuitive user experience for an online grocery store. It emphasizes features like quick-add-to-cart, responsive design for shopping on the go, and an admin dashboard for managing inventory and orders.",
    imageUrl: "/images/green-grocery-project.png",
    githubUrl: "https://github.com/dhlananhh/green_grocery/",
    tools: [ "Next.js", "TailwindCSS", "Clerk", "MongoDB", "Node.js" ],
    category: "Web",
    projectStartDate: new Date("2025-05-27"),
    projectStatus: "In Progress",
    liveDemoUrl: "https://greencart-gs.vercel.app",
    keyFeatures: [ "User-friendly interface optimized for mobile", "Real-time inventory updates", "Admin dashboard for content management", "Fast and responsive user experience" ],
    galleryImages: [ "/images/green-grocery-project.png" ]
  },
  {
    id: "3",
    title: "Online Bookstore Frontend",
    slug: "online-bookstore-project-frontend",
    shortDescription: "The client-side application for a collaborative online bookstore project.",
    description: "As part of my Software Architecture final exam, I took on the role of Frontend Developer. My responsibilities included building the entire user interface using Next.js and TailwindCSS, managing application state, fetching data from the backend API, and integrating a custom-built chatbot to enhance user engagement.",
    imageUrl: "/images/bookstore-project.png",
    githubUrl: "https://github.com/minhlq2003/bookstore-frontend-nextjs",
    tools: [ "Next.js", "TailwindCSS", "TypeScript", "React Query" ],
    category: "Web",
    projectStartDate: new Date("2025-01-11"),
    projectStatus: "Completed",
    liveDemoUrl: "https://bookstore-frontend-nextjs.vercel.app/",
    keyFeatures: [ "Responsive and interactive UI", "Client-side data fetching and caching", "Integration with a Node.js backend", "Seamless chatbot widget integration" ],
    galleryImages: [ "/images/bookstore-project.png" ]
  },
  {
    id: "4",
    title: "Online Bookstore Backend",
    slug: "online-bookstore-project-backend",
    shortDescription: "The server-side API for the collaborative online bookstore project.",
    description: "This is the backend component of the Software Architecture final exam project. While my primary role was on the frontend, I worked closely with the backend team to define API endpoints and data structures. The backend provides RESTful APIs for managing books, users, and orders.",
    imageUrl: "/images/bookstore-project-backend.png",
    githubUrl: "https://github.com/HieuTrungMc/bookstore-backend-nodejs",
    tools: [ "Node.js", "Express.js", "Prisma", "MariaDB", "JWT" ],
    category: "Web",
    projectStartDate: new Date("2025-01-11"),
    projectStatus: "Completed",
    keyFeatures: [ "RESTful API design", "Secure authentication with JSON Web Tokens (JWT)", "Database management with Prisma ORM", "Structured data models for books and users" ],
    galleryImages: [ "/images/bookstore-project-backend.png" ]
  },
  {
    id: "5",
    title: "Bookstore Chatbot",
    slug: "bookstore-chatbot",
    shortDescription: "A Python-based chatbot to assist users with book searches.",
    description: "This component of the bookstore project involved creating a chatbot from the ground up. The bot is designed to understand natural language queries, search the bookstore's database for relevant books, and provide helpful recommendations to users. This was my first foray into applying NLP techniques in a practical application.",
    imageUrl: "/images/bookstore-project-chatbot.png",
    githubUrl: "https://github.com/dhlananhh/bookstore_chatbot",
    tools: [ "Python", "Flask", "NLP", "JavaScript", "MariaDB" ],
    category: "AI",
    projectStartDate: new Date("2025-01-11"),
    projectStatus: "Completed",
    keyFeatures: [ "Natural Language Processing (NLP) for query understanding", "Direct database querying for real-time results", "Simple web interface for interaction", "Designed for easy integration into the frontend" ],
    galleryImages: [ "/images/bookstore-project-chatbot.png" ]
  },
  {
    id: "6",
    title: "3D Portfolio Website",
    slug: "portfolio-website-project",
    shortDescription: "The very portfolio you are currently exploring!",
    description: "The primary goal of this project was to create a personal space to showcase my skills, projects, and career journey. I chose modern technologies like Next.js for performance and SEO, and Framer Motion to create a dynamic, engaging user experience. It's a testament to my skills in frontend development and my attention to design details.",
    imageUrl: "/images/my-portfolio-website-project.png",
    githubUrl: "https://github.com/dhlananhh/my-3d-portfolio",
    tools: [ "Next.js", "TailwindCSS", "TypeScript", "Framer Motion", "Shadcn UI" ],
    category: "Web",
    projectStartDate: new Date("2025-01-11"),
    projectStatus: "Completed",
    liveDemoUrl: "https://my-3d-portfolio-wine.vercel.app/",
    keyFeatures: [ "Dynamic project filtering", "Smooth page transitions and animations", "Responsive design for all devices", "Built with modern, best-practice frontend technologies" ],
    galleryImages: [ "/images/my-portfolio-website-project.png" ]
  },
  {
    id: "7",
    title: "RAG System with Gemini & MongoDB",
    slug: "rag-system-with-gemini-and-mongodb-atlas",
    shortDescription: "A Q&A system powered by Google's Gemini and a MongoDB vector database.",
    description: "This project explores the Retrieval-Augmented Generation (RAG) architecture. It uses Google's generative AI to understand user questions and retrieves relevant information from a knowledge base stored as vector embeddings in MongoDB Atlas. The goal was to build a system that provides accurate answers based on a specific set of documents.",
    imageUrl: "/images/rag_system.png",
    githubUrl: "https://github.com/dhlananhh/Build_RAG_System_with_Gemini_and_MongoDB",
    tools: [ "Python", "Google Generative AI", "MongoDB Atlas", "PyPDF" ],
    category: "AI",
    projectStartDate: new Date("2025-01-11"),
    projectStatus: "Completed",
    keyFeatures: [ "PDF document processing and text chunking", "Text embedding using the Gemini API", "Vector storage and search with MongoDB Atlas", "Generative question-answering based on retrieved context" ],
    galleryImages: [ "/images/rag_system.png" ]
  },
  {
    id: "8",
    title: "RAG System with Gemini & ChromaDB",
    slug: "rag-system-with-gemini-and-chromadb",
    shortDescription: "An alternative RAG implementation using Gemini and the local vector store ChromaDB.",
    description: "Building on the previous RAG project, this version explores a different technology stack, replacing the cloud-based MongoDB Atlas with ChromaDB, a popular open-source vector database that can run locally. This demonstrates adaptability and understanding of different tools within the AI ecosystem.",
    imageUrl: "/images/rag_system.png",
    githubUrl: "https://github.com/dhlananhh/Build_RAG_System_with_Gemini_and_ChromaDB",
    tools: [ "Python", "Google Generative AI", "ChromaDB", "LangChain" ],
    category: "AI",
    projectStartDate: new Date("2025-01-11"),
    projectStatus: "Completed",
    keyFeatures: [ "Uses LangChain for streamlined workflow", "Leverages the lightweight Gemini Flash model", "Operates with a local-first vector database (ChromaDB)", "Designed for rapid prototyping and offline use" ],
    galleryImages: [ "/images/rag_system.png" ]
  },
  {
    id: "9",
    title: "Educational Mobile App",
    slug: "educational-app",
    shortDescription: "A cross-platform mobile application for interactive learning.",
    description: "This personal project aimed to explore mobile development using React Native. The concept is an educational app that provides users with interactive quizzes and lessons. It focuses on creating a smooth, native-like user experience on both iOS and Android from a single codebase.",
    imageUrl: "/images/educational-app-project.png",
    githubUrl: "https://github.com/dhlananhh/Educational-App",
    tools: [ "React Native", "TypeScript", "Expo" ],
    category: "Mobile",
    projectStartDate: new Date("2024-11-01"),
    projectStatus: "Completed",
    keyFeatures: [ "Cross-platform compatibility (iOS & Android)", "Interactive quiz and lesson components", "State management for user progress", "Built using the Expo managed workflow for faster development" ],
    galleryImages: [ "/images/educational-app-project.png" ]
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
