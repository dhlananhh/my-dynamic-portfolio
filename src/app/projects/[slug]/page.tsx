"use client";

import React, { use, useState } from "react";
import { projectsData, Project } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/legacy/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink,
  Github,
  Calendar,
  Activity,
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Target,
  Image as ImageIcon,
  Rocket,
  ChartColumnStacked
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Images } from "@/lib/images";

const getProjectBySlug = (slug: string): Project | undefined => {
  return projectsData.find((project) => project.slug === slug);
};

const InfoPill = ({ icon: Icon, text }: { icon: React.ComponentType<{ className?: string }>, text: string }) => (
  <div className="flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/60 px-3 py-1.5 text-xs text-slate-300 backdrop-blur-md">
    <Icon className="h-4 w-4 text-teal-400" />
    <span>{ text }</span>
  </div>
);

const ContentSection = ({ title, icon: Icon, children }: { title: string; icon: React.ComponentType<{ className?: string }>; children: React.ReactNode }) => (
  <motion.div
    className="space-y-4"
    initial={ { opacity: 0, y: 20 } }
    whileInView={ { opacity: 1, y: 0 } }
    transition={ { duration: 0.5 } }
    viewport={ { once: true, amount: 0.3 } }
  >
    <div className="flex items-center gap-3">
      <Icon className="h-6 w-6 text-teal-400" />
      <h2 className="text-2xl font-bold text-slate-100">{ title }</h2>
    </div>
    <div className="prose prose-invert prose-lg max-w-none text-slate-300/90">
      { children }
    </div>
  </motion.div>
);

export default function ProjectDetailPage(props: { params: Promise<{ slug: string }> }) {
  const params = use(props.params);
  const { slug } = params;
  const project = getProjectBySlug(slug);

  const [ activeIndex, setActiveIndex ] = useState(0);

  if (!project || !project.galleryImages || project.galleryImages.length === 0) {
    if (!project) return notFound();
  }

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? project.galleryImages!.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === project.galleryImages!.length - 1 ? 0 : prevIndex + 1
    );
  };

  const formatDate = (date: Date): string => {
    return new Intl.DateTimeFormat("en-US", { month: "long", year: "numeric" }).format(date);
  };

  return (
    <main className="bg-gray-950 text-white">
      {/* --- HERO SECTION --- */ }
      <div className="relative w-full overflow-hidden bg-gray-950">
        {/* Gradient Aurora Background */ }
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-teal-500 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 -left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid min-h-screen items-center gap-8 py-24 lg:grid-cols-2 lg:py-32">
            {/* Left Column: Text Content & CTAs */ }
            <motion.div
              className="space-y-6 text-center lg:text-left"
              initial={ { opacity: 0, x: -20 } }
              animate={ { opacity: 1, x: 0 } }
              transition={ { duration: 0.6, delay: 0.2 } }
            >
              <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl bg-gradient-to-b from-slate-100 to-slate-400 bg-clip-text text-transparent">
                { project.title }
              </h1>

              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                <InfoPill icon={ ChartColumnStacked } text={ `Category: ${project.category}` } />
                <InfoPill icon={ Calendar } text={ `Date: ${formatDate(new Date(project.projectStartDate))}` } />
                <InfoPill icon={ Activity } text={ `Status: ${project.projectStatus}` } />
              </div>

              <p className="mx-auto max-w-xl text-lg text-slate-300 lg:mx-0">
                { project.shortDescription }
              </p>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
                {
                  project.liveDemoUrl && (
                    <a href={ project.liveDemoUrl } target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-green-500 to-blue-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition-transform hover:scale-105">
                      <ExternalLink className="h-5 w-5" /> Live Demo
                    </a>
                  )
                }
                {
                  project.githubUrl && (
                    <a href={ project.githubUrl } target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-700/80 px-6 py-3 text-base font-semibold text-slate-200 shadow-lg transition-colors hover:bg-slate-700">
                      <Github className="h-5 w-5" /> View Code
                    </a>
                  )
                }
              </div>
            </motion.div>

            {/* Right Column: Image Mockup */ }
            <motion.div
              initial={ { opacity: 0, scale: 0.9 } }
              animate={ { opacity: 1, scale: 1 } }
              transition={ { duration: 0.6, delay: 0.4 } }
            >
              <div className="mx-auto w-full max-w-xl rounded-xl border border-slate-700/80 bg-slate-800/50 p-2 shadow-2xl backdrop-blur-lg">
                <div className="flex h-6 items-center gap-1.5 px-2">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
                <div className="mt-1 aspect-video w-full overflow-hidden rounded-b-lg bg-gray-900">
                  <Image
                    src={ project.imageUrl || Images.ProjectPlaceholder }
                    alt={ `${project.title} project screenshot` }
                    width={ 1200 }
                    height={ 675 }
                    className="h-full w-full object-cover"
                    priority
                    placeholder="blur"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Back to All Projects button */ }
      <Link href="/#projects" className="fixed top-6 left-6 z-50 flex items-center gap-2 rounded-full bg-slate-900/50 p-2 pr-4 text-sm text-white backdrop-blur-lg transition-colors hover:bg-slate-800">
        <ArrowLeft className="h-5 w-5" />
        <span>All Projects</span>
      </Link>

      {/* --- MAIN CONTENT --- */ }
      <div className="container mx-auto max-w-5xl px-4 pb-24 sm:pb-32">
        <div className="space-y-20">
          {/* Project Goal Section */ }
          <ContentSection title="Project Goal & Overview" icon={ Target }>
            <p>{ project.description }</p>
          </ContentSection>

          {/* Key Features Section */ }
          {
            project.keyFeatures && project.keyFeatures.length > 0 && (
              <ContentSection title="Key Features" icon={ Rocket }>
                <ul className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 !list-none !p-0">
                  { project.keyFeatures.map((feature, index) => (
                    <li key={ index } className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 flex-shrink-0 text-green-400 mt-1" />
                      <span className="text-slate-300">{ feature }</span>
                    </li>
                  )) }
                </ul>
              </ContentSection>
            )
          }

          {/* Technologies Section */ }
          <ContentSection title="Technologies Used" icon={ Github }>
            <div className="flex flex-wrap gap-3">
              {
                project.tools.map(tool => (
                  <Badge key={ tool } variant="secondary" className="border-none bg-teal-400/10 px-4 py-1 text-sm text-teal-300 hover:bg-teal-700">
                    { tool }
                  </Badge>
                ))
              }
            </div>
          </ContentSection>

          {/* Image Gallery Section */ }
          {
            project.galleryImages && project.galleryImages.length > 0 && (
              <ContentSection title="Gallery" icon={ ImageIcon }>
                <div className="space-y-4 not-prose">

                  {/* Main Image View Wrapper */ }
                  <div className="group relative w-full aspect-video overflow-hidden rounded-xl border border-slate-700 bg-slate-900">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={ activeIndex }
                        className="absolute inset-0"
                        initial={ { opacity: 0 } }
                        animate={ { opacity: 1 } }
                        exit={ { opacity: 0 } }
                        transition={ { duration: 0.3, ease: 'easeInOut' } }
                      >
                        <Image
                          src={ project.galleryImages[ activeIndex ] }
                          alt={ `Project gallery image ${activeIndex + 1}` }
                          layout="fill"
                          objectFit="cover"
                          placeholder="blur"
                        />
                      </motion.div>
                    </AnimatePresence>

                    {/* --- CONTROLS --- */ }
                    <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      {/* Previous Button */ }
                      <motion.button
                        onClick={ handlePrev }
                        className="p-2 rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
                        whileHover={ { scale: 1.1 } }
                        whileTap={ { scale: 0.95 } }
                      >
                        <ArrowLeft className="h-6 w-6" />
                      </motion.button>

                      {/* Next Button */ }
                      <motion.button
                        onClick={ handleNext }
                        className="p-2 rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
                        whileHover={ { scale: 1.1 } }
                        whileTap={ { scale: 0.95 } }
                      >
                        <ArrowRight className="h-6 w-6" />
                      </motion.button>
                    </div>

                    {/* Image Counter */ }
                    <div className="absolute bottom-4 right-4 rounded-full bg-black/40 px-3 py-1 text-xs text-white backdrop-blur-sm">
                      { activeIndex + 1 } / { project.galleryImages.length }
                    </div>
                  </div>

                  {/* Thumbnail Strip */ }
                  <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-3 pt-2">
                    { project.galleryImages.map((img, idx) => (
                      <div
                        key={ idx }
                        onClick={ () => setActiveIndex(idx) }
                        className="relative aspect-square cursor-pointer overflow-hidden rounded-md transition-all duration-300"
                      >
                        <Image
                          src={ img }
                          alt={ `Thumbnail ${idx + 1}` }
                          layout="fill"
                          objectFit="cover"
                          className={ cn(
                            "transition-all duration-300",
                            activeIndex !== idx && "scale-100 opacity-50 hover:opacity-100",
                            activeIndex === idx && "scale-110 opacity-100"
                          ) }
                        />

                        {/* Active border */ }
                        { activeIndex === idx && (
                          <motion.div layoutId="active-thumbnail-border" className="absolute inset-0 border-2 border-teal-400 rounded-md" />
                        ) }
                      </div>
                    )) }
                  </div>
                </div>
              </ContentSection>
            )
          }
        </div>
      </div>
    </main>
  );
}
