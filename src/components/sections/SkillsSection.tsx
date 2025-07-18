"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import SkillIcon3D from "@/components/custom-ui/SkillIcon3D";

import { TbApi } from "react-icons/tb";
import { MdOutlineImportantDevices } from "react-icons/md";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaFigma,
  FaDocker,
  FaPython,
  FaJava
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiPrisma,
  SiMariadb,
  SiMysql
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "ReactJS", icon: <FaReact className="h-full w-full text-[#61DAFB]" /> },
      { name: "Next.js", icon: <SiNextdotjs className="h-full w-full" /> },
      { name: "JavaScript (ES6+)", icon: <SiJavascript className="h-full w-full text-[#F7DF1E]" /> },
      { name: "TypeScript", icon: <SiTypescript className="h-full w-full text-[#3178C6]" /> },
      { name: "HTML5", icon: <FaHtml5 className="h-full w-full text-[#E34F26]" /> },
      { name: "CSS3", icon: <FaCss3Alt className="h-full w-full text-[#1572B6]" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="h-full w-full text-[#06B6D4]" /> },
    ]
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="h-full w-full text-[#339933]" /> },
      { name: "Express.js", icon: <SiExpress className="h-full w-full text-slate-200" /> },
      { name: "Python", icon: <FaPython className="h-full w-full text-[#3776AB]" /> },
      { name: "Java", icon: <FaJava className="h-full w-full text-[#f89820]" /> },
      { name: "MongoDB", icon: <SiMongodb className="h-full w-full text-[#47A248]" /> },
      { name: "Prisma", icon: <SiPrisma className="h-full w-full text-teal-200" /> },
      { name: "MariaDB", icon: <SiMariadb className="h-full w-full text-cyan-200" /> },
      { name: "MySQL", icon: <SiMysql className="h-full w-full text-[#06B6D4]" /> },
    ]
  },
  {
    title: "Tools & Methodologies",
    skills: [
      { name: "Git", icon: <FaGitAlt className="h-full w-full text-[#F05032]" /> },
      { name: "Docker", icon: <FaDocker className="h-full w-full text-sky-400" /> },
      { name: "RESTful APIs", icon: <TbApi className="h-full w-full text-blue-200" /> },
      { name: "Responsive Design", icon: <MdOutlineImportantDevices className="h-full w-full text-rose-400" /> },
      { name: "Figma", icon: <FaFigma className="h-full w-full text-[#F24E1E]" /> },
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 sm:py-32 relative bg-gray-950 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-70 sm:opacity-100">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 sm:opacity-25 animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-r from-teal-500 to-pink-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 sm:opacity-25 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <SectionHeading title="My Skills" subtitle="Technologies & Expertise" />

        <motion.div
          variants={ containerVariants }
          initial="hidden"
          whileInView="visible"
          viewport={ { once: true, amount: 0.1 } }
          className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          { skillCategories.map((category) => (
            <motion.div
              key={ category.title }
              variants={ itemVariants }
              className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-teal-400/50 hover:bg-slate-900"
            >
              <h3 className="mb-6 text-xl font-bold text-slate-100 text-center">
                { category.title }
              </h3>
              <div className="grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-3">
                { category.skills.map((skill) => (
                  <div key={ skill.name } className="flex flex-col items-center justify-center gap-2 text-center">

                    <div className="h-16 w-16 transition-transform duration-300 group-hover:scale-110">
                      <SkillIcon3D icon={ skill.icon } />
                    </div>

                    <p className="text-sm font-medium text-slate-300">
                      { skill.name }
                    </p>
                  </div>
                )) }
              </div>
            </motion.div>
          )) }
        </motion.div>
      </div>
    </section>
  );
}
