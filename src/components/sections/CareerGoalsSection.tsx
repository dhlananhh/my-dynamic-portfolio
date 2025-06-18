"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { Rocket, BarChartBig, Target } from "lucide-react";
import SpotlightCard from "@/blocks/Components/SpotlightCard/SpotlightCard";

const goals = [
  {
    icon: Rocket,
    title: "Short-Term Goal",
    description: "To secure a challenging Web Developer position where I can apply my skills in React and Next.js, contribute to meaningful projects, and continuously learn from experienced mentors within a collaborative team."
  },
  {
    icon: BarChartBig,
    title: "Mid-Term Goal",
    description: "To evolve into a Senior Developer, taking ownership of complex features, mentoring junior developers, and deepening my expertise in performance optimization and building highly scalable applications."
  },
  {
    icon: Target,
    title: "Long-Term Goal",
    description: "To become a technical lead or solutions architect, guiding technical strategy, driving innovation, and making a significant impact on the products and teams I help create."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const CareerGoalsSection = () => {
  return (
    <section id="goals" className="py-24 sm:py-32 relative bg-gray-950 text-white overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-70 sm:opacity-100">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 sm:opacity-25 animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-r from-teal-500 to-pink-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 sm:opacity-25 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <SectionHeading title="Career Goals" subtitle="My Roadmap" />

        <motion.div
          variants={ containerVariants }
          initial="hidden"
          whileInView="visible"
          viewport={ { once: true, amount: 0.1 } }
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          { goals.map((goal, index) => (
            <motion.div
              key={ index }
              className="h-full"
              variants={ cardVariants }
              custom={ index }
            >
              <SpotlightCard
                className="p-8 h-full rounded-2xl bg-slate-900/50 border border-slate-700/80
                          hover:border-teal-400/70 transition-colors duration-300"
                spotlightColor="rgba(20, 184, 166, 0.2)"
              >
                <div className="flex items-center gap-4 mb-5">
                  <goal.icon className="w-9 h-9 text-teal-400 flex-shrink-0" />
                  <h3 className="text-xl font-bold text-slate-100">{ goal.title }</h3>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  { goal.description }
                </p>
              </SpotlightCard>
            </motion.div>
          )) }
        </motion.div>
      </div>
    </section>
  );
};

export default CareerGoalsSection;
