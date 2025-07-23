"use client";

import { useState } from "react";
import { projectsData } from "@/lib/data";
import ProjectCard from "@/components/custom-ui/ProjectCard";
import { SectionHeading } from "@/components/custom-ui/SectionHeading";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const getCategories = (projects: typeof projectsData) => {
  const categories = projects.map(p => p.category);
  return [ "All", ...Array.from(new Set(categories)) ];
};

export default function ProjectsSection() {
  const [ selectedCategory, setSelectedCategory ] = useState("All");
  const categories = getCategories(projectsData);
  const sortedProjects = [ ...projectsData ].sort(
    (a, b) => new Date(b.projectStartDate).getTime() - new Date(a.projectStartDate).getTime()
  );

  const filteredProjects = selectedCategory === "All"
    ? sortedProjects
    : sortedProjects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-24 sm:py-32 relative bg-gray-950 text-white overflow-hidden">
      {/* Background */ }
      <div className="absolute inset-0 z-0 opacity-70 sm:opacity-100">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 sm:opacity-25 animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-r from-teal-500 to-pink-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 sm:opacity-25 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/3 right-1/5 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full mix-blend-screen filter blur-3xl opacity-15 sm:opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading title="Featured Projects" subtitle="My recent work" />

        {/* Filter Buttons */ }
        <motion.div
          className="flex flex-wrap items-center justify-center gap-3 mt-10 mb-12"
          initial={ { opacity: 0, y: -20 } }
          animate={ { opacity: 1, y: 0 } }
          transition={ { duration: 0.5 } }
        >
          { categories.map((category) => (
            <button
              key={ category }
              onClick={ () => setSelectedCategory(category) }
              className={ cn(
                "px-5 py-2 text-sm font-semibold rounded-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-950",
                selectedCategory === category
                  ? "bg-gradient-to-r from-green-400 to-blue-600 text-white shadow-lg scale-105"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700/80 hover:text-white"
              ) }
            >
              { category }
            </button>
          )) }
        </motion.div>

        {/* Projects Grid */ }
        <motion.div
          key={ selectedCategory }
          variants={ containerVariants }
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
        >
          <AnimatePresence>
            { filteredProjects.map((project, index) => (
              <ProjectCard
                key={ project.id }
                project={ project }
                index={ index }
              />
            )) }
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
