"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/custom-ui/SectionHeading";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqData = [
  {
    question: "Are you currently available for freelance projects or full-time opportunities?",
    answer: "Absolutely! I am actively seeking new full-time opportunities. I am also open to discussing interesting freelance projects that align with my skillset. Please feel free to reach out via the contact form below."
  },
  {
    question: "What is your preferred technology stack?",
    answer: "My core expertise lies in the modern JavaScript ecosystem. I'm most proficient with React and Next.js for frontend development. For backend tasks, I'm comfortable with Node.js and have experience with various databases like MongoDB and MariaDB. I'm a lifelong learner and always excited to adapt to new technologies required by a project."
  },
  {
    question: "What does your typical development process look like?",
    answer: "I follow an agile approach. My process usually starts with understanding the requirements and user stories, followed by designing a component architecture. I then move to development, writing clean and maintainable code. I believe in frequent communication, regular code reviews, and thorough testing to ensure a high-quality final product."
  },
  {
    question: "Are you open to working remotely or considering relocation?",
    answer: "I am fully equipped and experienced in working remotely and have a proven track record of maintaining high productivity. I am also open to discussing relocation opportunities for a position that is a great fit for my career goals."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};

export default function FAQSection() {
  const [ openFaqIndex, setOpenFaqIndex ] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 sm:py-32 relative bg-gray-950 text-white overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-70 sm:opacity-100">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 sm:opacity-25 animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-r from-teal-500 to-pink-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 sm:opacity-25 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/3 right-1/5 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full mix-blend-screen filter blur-3xl opacity-15 sm:opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <SectionHeading title="Frequently Asked Questions" subtitle="Have Questions? I Have Answers" />

        <motion.div
          className="mt-16 space-y-4"
          variants={ containerVariants }
          initial="hidden"
          whileInView="visible"
          viewport={ { once: true, amount: 0.1 } }
        >
          { faqData.map((faq, index) => (
            <motion.div
              key={ index }
              variants={ itemVariants }
              className="group relative rounded-xl"
            >
              <div
                className="absolute -inset-px rounded-xl bg-gradient-to-r
              from-teal-400 via-sky-400 to-purple-500
                opacity-0 transition-opacity duration-500 group-hover:opacity-70"
              />

              <div className="relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
                <button
                  onClick={ () => handleToggle(index) }
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <span className="text-lg font-medium text-slate-100">{ faq.question }</span>
                  <ChevronDown
                    className={ cn(
                      "h-6 w-6 flex-shrink-0 text-teal-400 transition-transform duration-300",
                      openFaqIndex === index && "rotate-180"
                    ) }
                  />
                </button>

                <AnimatePresence>
                  { openFaqIndex === index && (
                    <motion.div
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={ {
                        open: { opacity: 1, height: "auto" },
                        collapsed: { opacity: 0, height: 0 },
                      } }
                      transition={ { duration: 0.4, ease: [ 0.04, 0.62, 0.23, 0.98 ] } }
                      className="overflow-hidden"
                    >
                      <div className="prose prose-invert max-w-none px-6 pb-6 text-slate-300">
                        <p>{ faq.answer }</p>
                      </div>
                    </motion.div>
                  ) }
                </AnimatePresence>
              </div>
            </motion.div>
          )) }
        </motion.div>
      </div>
    </section>
  );
}
