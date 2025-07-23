"use client";

import { workExperiencesData } from "@/lib/data";
import { SectionHeading } from "@/components/custom-ui/SectionHeading";
import { motion } from "framer-motion";
import { Briefcase, Check } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring" as const, stiffness: 100 }
  },
};

export default function WorkExperiencesSection() {
  if (!workExperiencesData || workExperiencesData.length === 0) {
    return null;
  }

  return (
    <section id="experience" className="py-24 sm:py-32 relative bg-gray-950 text-white overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-70 sm:opacity-100">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 sm:opacity-25 animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-1/3 left-1/3 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 sm:opacity-25 animate-blob"></div>
      </div>

      <div className="container relative z-10 mx-auto max-w-4xl px-4">
        <SectionHeading title="Work Experience" subtitle="My Professional Journey" />

        <motion.div
          className="relative mt-16"
          variants={ containerVariants }
          initial="hidden"
          whileInView="visible"
          viewport={ { once: true, amount: 0.1 } }
        >
          <div className="absolute left-4 top-0 h-full w-0.5 bg-slate-700/50 md:left-1/2 md:-translate-x-1/2"></div>

          {
            workExperiencesData.map((exp, index) => (
              <motion.div
                key={ exp.id }
                className="relative mb-12 pl-12 md:pl-0"
                variants={ itemVariants }
              >
                <div className={ `absolute top-1 left-4 flex h-8 w-8 items-center justify-center rounded-full bg-teal-500 ring-8 ring-slate-900 md:left-1/2 md:-translate-x-1/2` }>
                  <Briefcase className="h-4 w-4 text-white" />
                </div>

                <div className={ `relative md:w-1/2 ${index % 2 === 0 ? "md:left-0 md:pr-8" : "md:left-1/2 md:pl-8"}` }>
                  <div className={ `rounded-2xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-teal-400/50` }>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                      <div className="flex-grow">
                        <h3 className="text-xl font-bold text-slate-100">{ exp.role }</h3>
                        <p className="mt-1 text-base font-semibold text-slate-300">{ exp.company }</p>
                      </div>
                      <p className="flex-shrink-0 whitespace-nowrap rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-teal-400 mt-2 sm:mt-0">
                        { exp.startDate } - { exp.endDate }
                      </p>
                    </div>

                    <p className="mt-4 text-sm text-slate-400">{ exp.description }</p>
                    <ul className="mt-4 space-y-2 text-sm text-slate-300">
                      { exp.responsibilities.map((resp, i) => (
                        <li key={ i } className="flex items-start gap-2">
                          <Check className="mt-1 h-4 w-4 flex-shrink-0 text-green-500" />
                          <span>{ resp }</span>
                        </li>
                      )) }
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))
          }
        </motion.div>
      </div>
    </section>
  );
}
