"use client";


import { useState } from "react";
import GitHubCalendar from "react-github-calendar";
import { SectionHeading } from "@/components/custom-ui/SectionHeading";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import AnimatedBlobBackground from "@/components/custom-ui/AnimatedBlobBackground";
import { Button } from "@/components/ui/button";


const portfolioDarkTheme = {
  dark: [ "#172A3A", "#0D505E", "#1D8383", "#39C1AD", "#4DFFE2" ],
}

const GITHUB_YEARS = [ 2025, 2024, 2023 ];


export default function GitHubContributions() {
  const username = "dhlananhh";
  const [ selectedYear, setSelectedYear ] = useState(GITHUB_YEARS[ 0 ]);

  return (
    <section id="github-contributions" className="py-24 sm:py-32 relative bg-gray-950 text-white overflow-hidden">
      <AnimatedBlobBackground />

      <div className="container relative z-10 mx-auto px-4 text-center">
        <SectionHeading title="My GitHub Contributions" subtitle="A Timeline of My Dedication" />

        <motion.div
          className="mt-16 flex flex-col items-center justify-center gap-8 md:flex-row md:items-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="group relative w-full max-w-max">
            <div
              className="absolute -inset-px rounded-2xl bg-gradient-to-r
              from-teal-400 via-sky-400 to-purple-500
              opacity-0 transition-opacity duration-500 group-hover:opacity-70"
            />
            <div className="relative p-4 sm:p-6 rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-sm">
              <GitHubCalendar
                username={username}
                year={selectedYear}
                colorScheme="dark"
                theme={portfolioDarkTheme}
                blockSize={14}
                blockMargin={5}
                fontSize={16}
              />
            </div>
          </div>

          <motion.div
            className="flex flex-row md:flex-col gap-3 "
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {
              GITHUB_YEARS.map((year) => (
                <Button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={cn(
                    "px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300",
                    "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-950 focus:ring-teal-400",
                    selectedYear === year
                      ? "bg-teal-500 text-white shadow-lg"
                      : "bg-slate-800 text-slate-300 hover:bg-slate-700/80 hover:text-white"
                  )}
                >
                  {year}
                </Button>
              ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8"
        >
          <a
            href="https://github.com/dhlananhh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 hover:text-teal-300 transition-colors"
          >
            View my full profile on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
