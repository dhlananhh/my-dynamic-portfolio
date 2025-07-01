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
    title: "Online Bookstore Frontend",
    slug: "online-bookstore-project-frontend",
    shortDescription: "The client-side application for a collaborative online bookstore project.",
    description: "As part of my Software Architecture final exam, I took on the role of Frontend Developer. My responsibilities included building the entire user interface using Next.js and TailwindCSS, managing application state, fetching data from the backend API, and integrating a custom-built chatbot to enhance user engagement.",
    imageUrl: "/images/projects/bookstore-project-thumbnail.png",
    githubUrl: "https://github.com/minhlq2003/bookstore-frontend-nextjs",
    tools: [ "Next.js", "TailwindCSS", "TypeScript", "React Query" ],
    category: "Web",
    projectStartDate: new Date("2025-01-11"),
    projectStatus: "Completed",
    liveDemoUrl: "https://bookstore-frontend-nextjs.vercel.app/",
    keyFeatures: [ "Responsive and interactive UI", "Client-side data fetching and caching", "Integration with a Node.js backend", "Seamless chatbot widget integration" ],
    galleryImages: [
      "/images/projects/bookstore-project.png",
      "/images/projects/bookstore-project-homepage-1.png",
      "/images/projects/bookstore-project-homepage-2.png",
      "/images/projects/bookstore-project-homepage-3.png",
      "/images/projects/bookstore-project-category-astronaut-1.png",
      "/images/projects/bookstore-project-category-astronaut-2.png",
      "/images/projects/bookstore-project-category-astronaut-3.png",
      "/images/projects/bookstore-project-category-astronaut-3.png",
    ]
  },
  {
    id: "2",
    title: "Online Bookstore Backend",
    slug: "online-bookstore-project-backend",
    shortDescription: "The server-side API for the collaborative online bookstore project.",
    description: "This is the backend component of the Software Architecture final exam project. While my primary role was on the frontend, I worked closely with the backend team to define API endpoints and data structures. The backend provides RESTful APIs for managing books, users, and orders.",
    imageUrl: "/images/projects/bookstore-project-backend.png",
    githubUrl: "https://github.com/HieuTrungMc/bookstore-backend-nodejs",
    tools: [ "Node.js", "Express.js", "Prisma", "MariaDB", "JWT" ],
    category: "Web",
    projectStartDate: new Date("2025-01-11"),
    projectStatus: "Completed",
    keyFeatures: [ "RESTful API design", "Secure authentication with JSON Web Tokens (JWT)", "Database management with Prisma ORM", "Structured data models for books and users" ],
    galleryImages: [ "/images/projects/bookstore-project-backend.png" ]
  },
  {
    id: "3",
    title: "Bookstore Chatbot",
    slug: "bookstore-chatbot",
    shortDescription: "A Python-based chatbot to assist users with book searches.",
    description: "This component of the bookstore project involved creating a chatbot from the ground up. The bot is designed to understand natural language queries, search the bookstore's database for relevant books, and provide helpful recommendations to users. This was my first foray into applying NLP techniques in a practical application.",
    imageUrl: "/images/projects/bookstore-chatbot-project-thumbnail.png",
    githubUrl: "https://github.com/dhlananhh/bookstore_chatbot",
    tools: [ "Python", "Flask", "NLP", "JavaScript", "MariaDB" ],
    category: "AI",
    projectStartDate: new Date("2025-01-11"),
    projectStatus: "Completed",
    keyFeatures: [ "Natural Language Processing (NLP) for query understanding", "Direct database querying for real-time results", "Simple web interface for interaction", "Designed for easy integration into the frontend" ],
    galleryImages: [ "/images/projects/bookstore-project-chatbot.png" ]
  },
  {
    id: "4",
    title: "ChatHub-Web",
    slug: "chathub-web",
    shortDescription: "A real-time, web-based chat application for instant communication and collaboration.",
    description: "This project demonstrates the ability to build a real-time chat platform using modern web technologies. The focus was on creating a responsive and engaging user experience with features like live messaging, user presence indicators, and a clean interface, proving skills in handling real-time, bi-directional communication on the web.",
    imageUrl: "/images/projects/chathub-web.png",
    githubUrl: "https://github.com/dhlananhh/ChatHub-Web",
    tools: [ "Next.js", "TailwindCSS", "TypeScript" ],
    category: "Web",
    projectStartDate: new Date("2024-09-15"),
    projectStatus: "Completed",
    liveDemoUrl: "https://chathub-web-liard.vercel.app/",
    keyFeatures: [ "Real-time messaging functionality", "Modern and clean user interface", "User authentication and profiles", "Responsive design for both mobile and desktop" ],
    galleryImages: [ "/images/projects/chathub-web.png" ]
  },
  {
    id: "5",
    title: "ForeverBuy Ecommerce Website",
    slug: "foreverbuy-ecommerce-website",
    shortDescription: "A stylish and modern e-commerce storefront with a focus on seamless user experience.",
    description: "ForeverBuy is another take on a modern e-commerce platform, focusing on a minimalistic and clean UI/UX design. This project showcases the ability to build a visually appealing and highly performant online store, with smooth animations, fast page loads, and a checkout process designed to maximize conversion.",
    imageUrl: "/images/projects/foreverbuy-ecommerce-project-thumbnail.png",
    githubUrl: "https://github.com/dhlananhh/ForeverBuy-Ecommerce",
    tools: [ "Next.js", "TailwindCSS", "TypeScript" ],
    category: "Web",
    projectStartDate: new Date("2024-07-20"),
    projectStatus: "Completed",
    liveDemoUrl: "https://forever-frontend-hazel.vercel.app/",
    keyFeatures: [ "Minimalistic and clean UI/UX design", "Fast page loads optimized with Next.js", "Smooth page animations and transitions", "A streamlined, multi-step checkout flow" ],
    galleryImages: [
      "/images/projects/foreverbuy-ecommerce-project-thumbnail.png",
      "/images/projects/foreverbuy-ecommerce-project-homepage-1.png",
      "/images/projects/foreverbuy-ecommerce-project-homepage-2.png",
      "/images/projects/foreverbuy-ecommerce-project-homepage-3.png",
      "/images/projects/foreverbuy-ecommerce-project-homepage-4.png",
      "/images/projects/foreverbuy-ecommerce-foreverbuy-ecommerce-project-collection-page-1.png",
      "/images/projects/foreverbuy-ecommerce-foreverbuy-ecommerce-project-collection-page-2.png",
      "/images/projects/foreverbuy-ecommerce-foreverbuy-ecommerce-project-collection-page-3.png",
      "/images/projects/foreverbuy-ecommerce-foreverbuy-ecommerce-project-collection-page-4.png",
      "/images/projects/foreverbuy-ecommerce-foreverbuy-ecommerce-project-collection-page-5.png",
      "/images/projects/foreverbuy-ecommerce-project-login-page.png",
      "/images/projects/foreverbuy-ecommerce-project-cart-page.png",
      "/images/projects/foreverbuy-ecommerce-project-product-details-page.png",
    ]
  },
  {
    id: "6",
    title: "RAG System with Gemini & MongoDB",
    slug: "rag-system-with-gemini-and-mongodb-atlas",
    shortDescription: "A Q&A system powered by Google's Gemini and a MongoDB vector database.",
    description: "This project explores the Retrieval-Augmented Generation (RAG) architecture. It uses Google's generative AI to understand user questions and retrieves relevant information from a knowledge base stored as vector embeddings in MongoDB Atlas. The goal was to build a system that provides accurate answers based on a specific set of documents.",
    imageUrl: "/images/projects/rag_system.png",
    githubUrl: "https://github.com/dhlananhh/Build_RAG_System_with_Gemini_and_MongoDB",
    tools: [ "Python", "Google Generative AI", "MongoDB Atlas", "PyPDF" ],
    category: "AI",
    projectStartDate: new Date("2025-01-11"),
    projectStatus: "Completed",
    keyFeatures: [ "PDF document processing and text chunking", "Text embedding using the Gemini API", "Vector storage and search with MongoDB Atlas", "Generative question-answering based on retrieved context" ],
    galleryImages: [ "/images/projects/rag_system.png" ]
  },
  {
    id: "7",
    title: "RAG System with Gemini & ChromaDB",
    slug: "rag-system-with-gemini-and-chromadb",
    shortDescription: "An alternative RAG implementation using Gemini and the local vector store ChromaDB.",
    description: "Building on the previous RAG project, this version explores a different technology stack, replacing the cloud-based MongoDB Atlas with ChromaDB, a popular open-source vector database that can run locally. This demonstrates adaptability and understanding of different tools within the AI ecosystem.",
    imageUrl: "/images/projects/rag_system.png",
    githubUrl: "https://github.com/dhlananhh/Build_RAG_System_with_Gemini_and_ChromaDB",
    tools: [ "Python", "Google Generative AI", "ChromaDB", "LangChain" ],
    category: "AI",
    projectStartDate: new Date("2025-01-11"),
    projectStatus: "Completed",
    keyFeatures: [ "Uses LangChain for streamlined workflow", "Leverages the lightweight Gemini Flash model", "Operates with a local-first vector database (ChromaDB)", "Designed for rapid prototyping and offline use" ],
    galleryImages: [ "/images/projects/rag_system.png" ]
  },
  {
    id: "8",
    title: "Educational Mobile App",
    slug: "educational-app",
    shortDescription: "A cross-platform mobile application for interactive learning.",
    description: "This personal project aimed to explore mobile development using React Native. The concept is an educational app that provides users with interactive quizzes and lessons. It focuses on creating a smooth, native-like user experience on both iOS and Android from a single codebase.",
    imageUrl: "/images/projects/educational-mobile-app-project.png",
    githubUrl: "https://github.com/dhlananhh/Educational-App",
    tools: [ "React Native", "TypeScript", "Expo" ],
    category: "Mobile",
    projectStartDate: new Date("2024-11-01"),
    projectStatus: "Completed",
    keyFeatures: [ "Cross-platform compatibility (iOS & Android)", "Interactive quiz and lesson components", "State management for user progress", "Built using the Expo managed workflow for faster development" ],
    galleryImages: [ "/images/projects/educational-app-project.png" ]
  },
];

export const testimonialsData: Testimonial[] = [
  {
    id: "1",
    quote: "Lan Anh's coding ability and meticulousness have been a great help to our dev team. The quality of her work consistently exceeded our expectations, and she was a pleasure to collaborate with.",
    author: "Jane Doe",
    company: "Senior Engineer, InnovateTech",
    avatarUrl: "/images/avatars/jane-doe.png",
  },
  {
    id: "2",
    quote: "Working with Lan Anh was very professional and efficient. She not only has excellent technical skills but also a remarkable ability to work in a team and adapt to new challenges wonderfully.",
    author: "John Smith",
    company: "Head of IT, Digital Solutions Co.",
    avatarUrl: "/images/avatars/john-smith.png",
  },
  {
    id: "3",
    quote: "As a Project Manager, I valued Lan Anh's clear communication and commitment to deadlines. She's a reliable developer who truly understands the project's vision and delivers accordingly.",
    author: "Michael Chen",
    company: "Project Manager, Agile Creators",
    avatarUrl: "/images/avatars/michael-chen.png",
  },
  {
    id: "4",
    quote: "It's rare to find a developer who has such a keen eye for design. Lan Anh brought our Figma designs to life with pixel-perfect accuracy and added insightful animations that enhanced the user experience.",
    author: "Sophia Rodriguez",
    company: "Lead UI/UX Designer, Creative Minds Agency",
    avatarUrl: "/images/avatars/sophia-rodriguez.png",
  },
  {
    id: "5",
    quote: "Pair-programming with Lan Anh was always a learning experience. She's a quick problem-solver and is always open to discussing new approaches. Her proficiency in React and Next.js is top-notch.",
    author: "David Lee",
    company: "Backend Developer, Synergy Systems",
    avatarUrl: "/images/avatars/david-lee.png",
  },
  {
    id: "6",
    quote: "Lan Anh consistently delivered high-quality, clean code that was easy to review and maintain. Her attention to detail and proactive approach made a significant impact on our product's stability.",
    author: "Emily White",
    company: "Tech Lead, QuantumLeap Software",
    avatarUrl: "/images/avatars/emily-white.png",
  }
];
