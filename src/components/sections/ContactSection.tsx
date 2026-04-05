"use client";


import React from "react";
import Link from "next/link";
import ContactForm from "@/components/custom-ui/ContactForm";
import { SectionHeading } from "@/components/custom-ui/SectionHeading";
import { motion, easeInOut } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaInstagram
} from "react-icons/fa";
import AnimatedBlobBackground from "@/components/custom-ui/AnimatedBlobBackground";


const contactDetails = [
  {
    name: "Email",
    value: "dhlananh2309@gmail.com",
    href: "mailto:dhlananh2309@gmail.com",
    icon: FaEnvelope,
  },
  {
    name: "LinkedIn",
    value: "linkedin.com/in/dhlananh",
    href: "https://linkedin.com/in/dhlananh",
    icon: FaLinkedin,
  },
  {
    name: "GitHub",
    value: "github.com/dhlananhh",
    href: "https://github.com/dhlananhh",
    icon: FaGithub,
  },
  {
    name: "Instagram",
    value: "instagram.com/dhlananh",
    href: "https://instagram.com/dhlananh",
    icon: FaInstagram,
  },
];

const currentStatus = "Available for freelance work and full-time opportunities";

export default function ContactSection() {

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeInOut } },
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative bg-gray-950 text-white overflow-hidden">
      <AnimatedBlobBackground />

      <div className="container relative z-10 mx-auto px-4">
        <SectionHeading title="Get In Touch" subtitle="Let's work together" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="bg-zinc-800/70 backdrop-blur-md border border-zinc-700/50 rounded-xl p-6 sm:p-8 shadow-xl mt-10"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
            <ul className="space-y-5 mb-8">
              {
                contactDetails.map((item) => (
                  <li key={item.name} className="flex items-start gap-4">
                    <item.icon className="text-blue-400 w-5 h-5 mt-1 shrink-0" />
                    <div>
                      <p className="text-sm text-zinc-400">{item.name}</p>
                      <Link
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-200 hover:text-blue-300 transition-colors break-all"
                      >
                        {item.value}
                      </Link>
                    </div>
                  </li>
                ))
              }
            </ul>

            <div className="border-t border-zinc-700/50 pt-6">
              <h4 className="text-lg font-medium text-white mb-3">Current Status</h4>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                <p className="text-sm text-zinc-300">
                  {currentStatus}
                </p>
              </div>
            </div>
          </motion.div>

          <div
            className="bg-zinc-800/70 backdrop-blur-md border border-zinc-700/50 rounded-xl p-6 sm:p-8 
            shadow-xl mt-10"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">
              Send Me a Message
            </h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
