"use client";


import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { projectsData } from "@/lib/data";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/custom-ui/ProjectCard";
import { SectionHeading } from "@/components/custom-ui/SectionHeading";
import AnimatedBlobBackground from "@/components/custom-ui/AnimatedBlobBackground";


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
      <AnimatedBlobBackground />

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading title="Featured Projects" subtitle="My recent work" />

        <motion.div
          className="flex flex-wrap items-center justify-center gap-3 mt-10 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {
            categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "px-5 py-2 text-sm font-semibold rounded-lg transition-all duration-300 ease-in-out focus:outline-hidden focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-950",
                  selectedCategory === category
                    ? "bg-linear-to-r from-green-400 to-blue-600 text-white shadow-lg scale-105"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700/80 hover:text-white"
                )}
              >
                {category}
              </Button>
            ))
          }
        </motion.div>

        <motion.div
          key={selectedCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
        >
          <AnimatePresence>
            {
              filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                />
              ))
            }
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
