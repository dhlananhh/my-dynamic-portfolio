import { StaticImageData } from "next/legacy/image";
import { Images } from "./images";

export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  imageUrl: StaticImageData;
  videoUrl?: string;
  githubUrl: string;
  tools: string[];
  category: string;
  slug: string;
  projectStartDate: Date;
  projectStatus: string;
  liveDemoUrl?: string;
  keyFeatures?: string[];
  galleryImages?: StaticImageData[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  company?: string;
  avatarUrl?: StaticImageData;
}

export interface WorkExperience {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
  responsibilities: string[];
}

export const projectsData: Project[] = [
  {
    id: "1",
    title: "Online Bookstore Frontend",
    slug: "online-bookstore-project-frontend",
    shortDescription: "The client-side application for a collaborative online bookstore project.",
    description: "As part of my Software Architecture final exam, I took on the role of Frontend Developer. My responsibilities included building the entire user interface using Next.js and TailwindCSS, managing application state, fetching data from the backend API, and integrating a custom-built chatbot to enhance user engagement.",
    imageUrl: Images.BookstoreThumbnail,
    githubUrl: "https://github.com/minhlq2003/bookstore-frontend-nextjs",
    tools: [ "Next.js", "TailwindCSS", "TypeScript", "React Query" ],
    category: "Web",
    projectStartDate: new Date("2025-01-11"),
    projectStatus: "Completed",
    liveDemoUrl: "https://bookstore-frontend-nextjs.vercel.app/",
    keyFeatures: [ "Responsive and interactive UI", "Client-side data fetching and caching", "Integration with a Node.js backend", "Seamless chatbot widget integration" ],
    galleryImages: [
      Images.BookstoreThumbnail,
      Images.BookstoreHomepage1,
      Images.BookstoreHomepage2,
      Images.BookstoreHomepage3,
      Images.BookstoreCategory1,
      Images.BookstoreCategory2,
      Images.BookstoreCategory3,
    ]
  },
  {
    id: "2",
    title: "Online Bookstore Backend",
    slug: "online-bookstore-project-backend",
    shortDescription: "The server-side API for the collaborative online bookstore project.",
    description: "This is the backend component of the Software Architecture final exam project. While my primary role was on the frontend, I worked closely with the backend team to define API endpoints and data structures. The backend provides RESTful APIs for managing books, users, and orders.",
    imageUrl: Images.BookstoreBackend,
    githubUrl: "https://github.com/HieuTrungMc/bookstore-backend-nodejs",
    tools: [ "Node.js", "Express.js", "Prisma", "MariaDB", "JWT" ],
    category: "Web",
    projectStartDate: new Date("2025-01-11"),
    projectStatus: "Completed",
    keyFeatures: [ "RESTful API design", "Secure authentication with JSON Web Tokens (JWT)", "Database management with Prisma ORM", "Structured data models for books and users" ],
    galleryImages: [ Images.BookstoreBackend ]
  },
  {
    id: "3",
    title: "Bookstore Chatbot",
    slug: "bookstore-chatbot",
    shortDescription: "A Python-based chatbot to assist users with book searches.",
    description: "This component of the bookstore project involved creating a chatbot from the ground up. The bot is designed to understand natural language queries, search the bookstore's database for relevant books, and provide helpful recommendations to users. This was my first foray into applying NLP techniques in a practical application.",
    imageUrl: Images.BookstoreChatbot,
    githubUrl: "https://github.com/dhlananhh/bookstore_chatbot",
    tools: [ "Python", "Flask", "NLP", "JavaScript", "MariaDB" ],
    category: "AI",
    projectStartDate: new Date("2025-01-11"),
    projectStatus: "Completed",
    keyFeatures: [ "Natural Language Processing (NLP) for query understanding", "Direct database querying for real-time results", "Simple web interface for interaction", "Designed for easy integration into the frontend" ],
    galleryImages: [ Images.BookstoreChatbot ]
  },
  {
    id: "4",
    title: "ChatHub-Web",
    slug: "chathub-web",
    shortDescription: "A real-time, web-based chat application for instant communication and collaboration.",
    description: "This project demonstrates the ability to build a real-time chat platform using modern web technologies. The focus was on creating a responsive and engaging user experience with features like live messaging, user presence indicators, and a clean interface, proving skills in handling real-time, bi-directional communication on the web.",
    imageUrl: Images.ChatHubWeb,
    githubUrl: "https://github.com/dhlananhh/ChatHub-Web",
    tools: [ "Next.js", "TailwindCSS", "TypeScript" ],
    category: "Web",
    projectStartDate: new Date("2024-09-15"),
    projectStatus: "Completed",
    liveDemoUrl: "https://chathub-web-liard.vercel.app/",
    keyFeatures: [ "Real-time messaging functionality", "Modern and clean user interface", "User authentication and profiles", "Responsive design for both mobile and desktop" ],
    galleryImages: [ Images.ChatHubWeb ]
  },
  {
    id: "5",
    title: "ForeverBuy Ecommerce Website",
    slug: "foreverbuy-ecommerce-website",
    shortDescription: "A stylish and modern e-commerce storefront with a focus on seamless user experience.",
    description: "ForeverBuy is another take on a modern e-commerce platform, focusing on a minimalistic and clean UI/UX design. This project showcases the ability to build a visually appealing and highly performant online store, with smooth animations, fast page loads, and a checkout process designed to maximize conversion.",
    imageUrl: Images.ForeverBuyThumbnail,
    githubUrl: "https://github.com/dhlananhh/ForeverBuy-Ecommerce",
    tools: [ "Next.js", "TailwindCSS", "TypeScript" ],
    category: "Web",
    projectStartDate: new Date("2024-07-20"),
    projectStatus: "Completed",
    liveDemoUrl: "https://forever-frontend-hazel.vercel.app/",
    keyFeatures: [ "Minimalistic and clean UI/UX design", "Fast page loads optimized with Next.js", "Smooth page animations and transitions", "A streamlined, multi-step checkout flow" ],
    galleryImages: [
      Images.ForeverBuyThumbnail,
      Images.ForeverBuyHomepage1,
      Images.ForeverBuyHomepage2,
      Images.ForeverBuyHomepage3,
      Images.ForeverBuyHomepage4,
      Images.ForeverBuyCollection1,
      Images.ForeverBuyCollection2,
      Images.ForeverBuyCollection3,
      Images.ForeverBuyCollection4,
      Images.ForeverBuyCollection5,
      Images.ForeverBuyLogin,
      Images.ForeverBuyCart,
      Images.ForeverBuyDetails,
    ]
  },
  {
    id: "6",
    title: "My Personal Portfolio Website",
    slug: "portfolio-website",
    shortDescription: "The very portfolio you are currently exploring, designed to be a dynamic and interactive showcase of my journey as a developer.",
    description: "The primary goal of this project was to create a personal, professional space to showcase my skills, projects, and career journey. I chose a modern tech stack, including Next.js for its performance and SEO capabilities, and Framer Motion to craft a dynamic, memorable user experience. This portfolio is not just a list of my work; it's a testament to my skills in frontend development, my attention to design detail, and my ability to build a complete application from the ground up.",
    imageUrl: Images.PortfolioThumbnail,
    githubUrl: "https://github.com/dhlananhh/my-3d-portfolio",
    tools: [
      "Next.js",
      "TailwindCSS",
      "TypeScript",
      "Framer Motion",
      "React Bits",
      "React Three Fiber",
      "Shadcn UI",
      "Radix UI"
    ],
    category: "Web",
    projectStartDate: new Date("2024-07-20"),
    projectStatus: "Completed",
    liveDemoUrl: "https://dhlananh-dev-portfolio.vercel.app/",
    keyFeatures: [
      "Interactive Fluid Cursor & 3D Starfield",
      "Dynamic Project Filtering by Category",
      "Seamless Page Transitions with Framer Motion",
      "Dedicated, Rich-Content Project Detail Pages",
      "Live GitHub Contribution Graph Integration",
      "Infinite Scrolling Testimonial Marquee",
      "Fully Responsive Design for All Devices"
    ],
    galleryImages: [
      Images.PortfolioThumbnail,
      Images.PortfolioCareerGoals,
      Images.PortfolioProjects,
      Images.PortfolioSkills,
      Images.PortfolioGithub,
      Images.PortfolioTestimonials,
      Images.PortfolioFAQ,
      Images.PortfolioResume,
      Images.PortfolioContact,
      Images.PortfolioDetails1,
      Images.PortfolioDetails2,
      Images.PortfolioDetails3,
    ]
  },
];

export const testimonialsData: Testimonial[] = [
  {
    id: "1",
    quote: "Lan Anh's coding ability and meticulousness have been a great help to our dev team. The quality of her work consistently exceeded our expectations, and she was a pleasure to collaborate with.",
    author: "Jane Doe",
    company: "Senior Engineer, InnovateTech",
    avatarUrl: Images.JaneDoeAvatar,
  },
  {
    id: "2",
    quote: "Working with Lan Anh was very professional and efficient. She not only has excellent technical skills but also a remarkable ability to work in a team and adapt to new challenges wonderfully.",
    author: "John Smith",
    company: "Head of IT, Digital Solutions Co.",
    avatarUrl: Images.JohnSmithAvatar,
  },
  {
    id: "3",
    quote: "As a Project Manager, I valued Lan Anh's clear communication and commitment to deadlines. She's a reliable developer who truly understands the project's vision and delivers accordingly.",
    author: "Michael Chen",
    company: "Project Manager, Agile Creators",
    avatarUrl: Images.MichaelChenAvatar,
  },
  {
    id: "4",
    quote: "It's rare to find a developer who has such a keen eye for design. Lan Anh brought our Figma designs to life with pixel-perfect accuracy and added insightful animations that enhanced the user experience.",
    author: "Sophia Rodriguez",
    company: "Lead UI/UX Designer, Creative Minds Agency",
    avatarUrl: Images.SophiaRodriguezAvatar,
  },
  {
    id: "5",
    quote: "Pair-programming with Lan Anh was always a learning experience. She's a quick problem-solver and is always open to discussing new approaches. Her proficiency in React and Next.js is top-notch.",
    author: "David Lee",
    company: "Backend Developer, Synergy Systems",
    avatarUrl: Images.DavidLeeAvatar,
  },
  {
    id: "6",
    quote: "Lan Anh consistently delivered high-quality, clean code that was easy to review and maintain. Her attention to detail and proactive approach made a significant impact on our product's stability.",
    author: "Emily White",
    company: "Tech Lead, QuantumLeap Software",
    avatarUrl: Images.EmilyWhiteAvatar,
  }
];

export const workExperiencesData: WorkExperience[] = [
  {
    id: "3",
    company: "QuantumLeap Software",
    role: "Web Developer",
    startDate: "Jan 2025",
    endDate: "Present",
    description: "As a key member of the product team, I contribute to the development of core features for our flagship SaaS platform, focusing on enhancing user experience and improving application performance.",
    responsibilities: [
      "Led the development of a new real-time analytics dashboard using Next.js and WebSockets.",
      "Optimized application load times by 30% through code splitting, lazy loading, and image optimization.",
      "Collaborated with UI/UX designers to translate complex Figma mockups into pixel-perfect, responsive components.",
      "Mentored a junior developer, providing code reviews and guidance on best practices."
    ],
  },
  {
    id: "2",
    company: "Digital Dreams Agency",
    role: "Junior Frontend Developer",
    startDate: "Jun 2024",
    endDate: "Dec 2024",
    description: "Developed and maintained responsive websites and web applications for a variety of clients, working within a fast-paced agency environment and collaborating closely with a team of developers and designers.",
    responsibilities: [
      "Successfully delivered 5+ client websites using React and Tailwind CSS.",
      "Implemented complex UI animations and interactive features based on client specifications.",
      "Integrated third-party APIs for services such as payments and content management systems (CMS).",
      "Participated in agile ceremonies, including daily stand-ups, sprint planning, and retrospectives."
    ],
  },
  {
    id: "1",
    company: "InnovateTech Solutions",
    role: "Frontend Developer Intern",
    startDate: "Jan 2024",
    endDate: "May 2024",
    description: "Gained valuable hands-on experience by assisting the senior development team with bug fixes, UI enhancements, and feature development for their primary web application.",
    responsibilities: [
      "Resolved over 50 front-end bugs, improving overall application stability.",
      "Assisted in converting legacy components to a modern TypeScript-based component library.",
      "Wrote and maintained technical documentation for newly developed features.",
      "Learned about professional git workflows, CI/CD pipelines, and team collaboration tools."
    ],
  }
];
