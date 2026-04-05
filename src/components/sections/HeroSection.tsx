"use client";


import React, { useEffect } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate
} from "framer-motion";
import { Button } from "@/components/ui/button";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import GradientText from "@/components/blocks/TextAnimations/GradientText/GradientText";
import SplitText from "@/components/blocks/TextAnimations/SplitText/SplitText";
import {
  FaInstagram,
  FaGithub,
  FaLinkedin
} from "react-icons/fa";
import {
  ArrowRight,
  Mail
} from "lucide-react";


const COLORS_TOP = [ "#13FFAA", "#1E67C6", "#CE84CF", "#DD335C" ];


export default function HeroSection() {
  const t = useTranslations("Hero");
  const color = useMotionValue(COLORS_TOP[ 0 ]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror"
    });
  }, [ color ]);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;

  return (
    <motion.section
      id="hero"
      style={{ backgroundImage }}
      className="relative grid min-h-screen place-content-center overflow-hidden px-4 py-24 text-foreground"
    >
      <div className="relative z-10 flex flex-col items-center text-center">

        <motion.div
          className="mb-6 h-16 sm:h-20 flex items-center"
          initial={{
            opacity: 0,
            y: -20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <TypingAnimation
            className="text-5xl font-medium text-slate-100"
            duration={0.8}
            delay={30}
            children={t("greeting")}
          />
        </motion.div>

        <GradientText
          className="max-w-4xl text-4xl sm:text-5xl md:text-7xl font-extrabold mb-4 tracking-tight leading-tight"
          colors={[
            "#86EFAC",
            "#2DD4BF",
            "#3B82F6",
            "#86EFAC"
          ]}
        >
          <span className="block font-bold">
            {t("heading1")}
          </span>
          <span className="block font-bold">
            {t("heading2")}
          </span>
        </GradientText>

        <div className="my-6 max-w-xl">
          <SplitText
            text={t("bio")}
            className="text-center text-base leading-relaxed md:text-lg md:leading-relaxed text-slate-300"
            splitType="words"
            from={{
              opacity: 0,
              y: 20,
              filter: 'blur(5px)'
            }}
            to={{
              opacity: 1,
              y: 0,
              filter: 'blur(0px)'
            }}
            delay={30}
            duration={0.8}
          />
        </div>

        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.5,
            delay: 0.4
          }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <Button
            asChild
            size="lg"
            className="text-white bg-linear-to-br from-green-400 to-blue-600 hover:bg-linear-to-bl focus:ring-4 focus:outline-hidden focus:ring-green-200 font-medium rounded-lg text-lg px-6 py-3 text-center"
          >
            <Link
              href="#projects"
              className="flex items-center"
            >
              {t("viewProjects")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="bg-transparent hover:bg-transparent text-slate-100 hover:text-white font-medium rounded-lg text-lg px-6 py-3 text-center transition-transform hover:scale-105 border-2 border-slate-600 hover:border-slate-300"
            onClick={
              (e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: 'smooth' });
              }
            }
          >
            <Link href="#contact">
              {t("contactMe")}
            </Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.6
          }}
          className="flex items-center justify-center space-x-4 sm:space-x-6"
        >
          <Link
            href="https://github.com/dhlananhh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="ghost"
              size="icon"
              className="p-2.5 sm:p-3 rounded-full shadow-lg bg-gray-200/90 hover:bg-gray-100"
            >
              <FaGithub className="h-5 w-5 text-gray-800" />
            </Button>
          </Link>
          <Link
            href="https://linkedin.com/in/dhlananh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="ghost"
              size="icon"
              className="p-2.5 sm:p-3 rounded-full shadow-lg bg-gray-200/90 hover:bg-gray-100"
            >
              <FaLinkedin className="h-5 w-5 text-gray-800" />
            </Button>
          </Link>
          <Link href="mailto:dhlananh2309@gmail.com" >
            <Button
              variant="ghost"
              size="icon"
              className="p-2.5 sm:p-3 rounded-full shadow-lg bg-gray-200/90 hover:bg-gray-100"
            >
              <Mail className="h-5 w-5 text-gray-800" />
            </Button>
          </Link>
          <Link href="https://instagram.com/dhlananh">
            <Button
              variant="ghost"
              size="icon"
              className="p-2.5 sm:p-3 rounded-full shadow-lg bg-gray-200/90 hover:bg-gray-100"
            >
              <FaInstagram className="h-5 w-5 text-gray-800" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
