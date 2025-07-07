"use client";

import GitHubCalendar from "react-github-calendar";
import { SectionHeading } from "@/components/SectionHeading";
import { motion } from "framer-motion";

const portfolioDarkTheme = {
  dark: [ "#172A3A", "#0D505E", "#1D8383", "#39C1AD", "#4DFFE2" ],
}

export default function GitHubContributions() {
  const username = "dhlananhh";

  return (
    <section id="github-contributions" className="py-24 sm:py-32 relative bg-gray-950 text-white overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-70 sm:opacity-100">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 sm:opacity-25 animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-r from-teal-500 to-pink-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 sm:opacity-25 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/3 right-1/5 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full mix-blend-screen filter blur-3xl opacity-15 sm:opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        <SectionHeading title="My GitHub Contributions" subtitle="A Timeline of My Dedication" />

        <div className="mt-16 flex justify-center">
          <motion.div
            className="group relative w-full max-w-max"
            initial={ { opacity: 0, y: 20 } }
            animate={ { opacity: 1, y: 0 } }
            transition={ { duration: 0.5, delay: 0.2 } }
          >
            <div
              className="absolute -inset-px rounded-2xl bg-gradient-to-r
              from-teal-400 via-sky-400 to-purple-500
              opacity-0 transition-opacity duration-500 group-hover:opacity-70"
            />

            <div className="relative p-4 sm:p-6 rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-sm">
              <GitHubCalendar
                username={ username }
                colorScheme="dark"
                theme={ portfolioDarkTheme }
                blockSize={ 14 }
                blockMargin={ 5 }
                fontSize={ 16 }
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={ { opacity: 0 } }
          animate={ { opacity: 1 } }
          transition={ { duration: 0.5, delay: 0.4 } }
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
