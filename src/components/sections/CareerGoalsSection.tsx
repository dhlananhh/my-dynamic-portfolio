"use client";


import React from "react";
import { motion, easeOut } from "framer-motion";
import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/custom-ui/SectionHeading";
import AnimatedBlobBackground from "@/components/custom-ui/AnimatedBlobBackground";
import {
  Rocket,
  BarChartBig,
  Target
} from "lucide-react";


const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
      duration: 0.5,
      ease: easeOut
    }
  })
};


const CareerGoalsSection = () => {
  const t = useTranslations("Goals");

  const goals = [
    {
      icon: Rocket,
      title: t("shortTitle"),
      description: t("shortDesc")
    },
    {
      icon: BarChartBig,
      title: t("midTitle"),
      description: t("midDesc")
    },
    {
      icon: Target,
      title: t("longTitle"),
      description: t("longDesc")
    }
  ];

  return (
    <section
      id="goals"
      className="py-24 sm:py-32 relative bg-gray-950 text-white overflow-hidden"
    >
      <AnimatedBlobBackground />

      <div className="container relative z-10 mx-auto px-4">
        <SectionHeading
          title={t("title")}
          subtitle={t("subtitle")}
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {
            goals.map((goal, index) => (
              <motion.div
                key={index}
                className="h-full"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                custom={index}
              >
                <div className="p-8 h-full rounded-2xl bg-slate-900/50 border border-slate-700/80 hover:border-teal-500/80 hover:bg-slate-800/60 transition-all duration-300 shadow-lg">
                  <div className="flex items-center gap-4 mb-5">
                    <goal.icon className="w-9 h-9 text-teal-400 shrink-0" />
                    <h3 className="text-xl font-bold text-slate-100">
                      {goal.title}
                    </h3>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    {goal.description}
                  </p>
                </div>
              </motion.div>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default CareerGoalsSection;
