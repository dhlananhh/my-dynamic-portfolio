"use client";


import React from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Instagram,
  Mail,
  ArrowUp
} from "lucide-react";
import { Button } from "@/components/ui/button";


export default function Footer() {
  const t = useTranslations("Footer");
  const tSidebar = useTranslations("Sidebar");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-950 text-slate-300 py-12 md:py-20 relative z-10 overflow-hidden border-t border-slate-800">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[200px] bg-teal-500/10 rounded-[100%] blur-[100px] pointer-events-none -z-10" />

      <div className="mx-auto px-6 lg:px-12 w-full max-w-7xl">

        {/* CTA */}
        {/* <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 pb-16 border-b border-slate-800">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {t("readyToConnect")}
            </h2>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed">
              {t("reachOut")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-teal-500 text-slate-950 font-bold rounded-full overflow-hidden transition-all hover:scale-105"
            >
              <div className="absolute inset-0 w-0 bg-white transition-all duration-[250ms] ease-out group-hover:w-full opacity-20" />
              <span>{t("sayHello")}</span>
              <Mail className="h-5 w-5" />
            </Link>
          </motion.div>
        </div> */}

        {/* LINKS & MENU */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-12 border-b border-slate-800">

          {/* Logo */}
          <div className="lg:col-span-2">
            <span className="text-3xl font-bold bg-gradient-to-r from-slate-100 to-slate-500 bg-clip-text text-transparent mb-4 inline-block">
              Lan Anh
            </span>
            <p className="text-slate-500 text-sm max-w-xs leading-relaxed">
              {t("bio")}
            </p>
          </div>

          {/* Explore Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider">{t("explore")}</h3>
            <ul className="flex flex-col gap-3">
              {
                [
                  { key: "home", path: "/" },
                  { key: "about", path: "/about" },
                  { key: "projects", path: "/projects" },
                  { key: "resume", path: "/resume" },
                ].map((link) => (
                  <li key={link.key}>
                    <Link
                      href={link.path}
                      className="text-sm text-slate-400 hover:text-teal-400 transition-colors w-fit flex items-center group"
                    >
                      <span className="group-hover:-translate-x-1 transition-transform relative top-px">
                        {">"}
                      </span>
                      <span className="ml-1.5">
                        {tSidebar(link.key)}
                      </span>
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>

          {/* Connect Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider">
              {t("connect")}
            </h3>
            <ul className="flex flex-col gap-3">
              {
                [
                  { name: "GitHub", href: "https://github.com/dhlananhh", icon: Github },
                  { name: "LinkedIn", href: "https://linkedin.com/in/dhlananh", icon: Linkedin },
                  { name: "Instagram", href: "https://www.instagram.com/dhlananh", icon: Instagram },
                ].map((social) => (
                  <li key={social.name}>
                    <Link
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-2 w-fit group"
                    >
                      <social.icon className="h-4 w-4 group-hover:text-teal-400 transition-colors" />
                      <span>{social.name}</span>
                      <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-all text-teal-400" />
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

        </div>

        {/* RIGHTS */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-slate-500">
            © {currentYear} • {t("designedBy")} <span className="text-slate-300 font-medium">Lan Anh</span>. {t("rights")}
          </p>

          {/* Scroll To Top Action */}
          <Button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-slate-400 hover:text-white group px-4 py-2 bg-slate-900 rounded-full border border-slate-800 hover:border-slate-600 transition-all focus:outline-none focus:ring-2 focus:ring-teal-500/50"
          >
            <span>{t("backToTop")}</span>
            <div className="p-1 rounded-full bg-slate-800 group-hover:bg-teal-500 group-hover:text-slate-950 transition-colors">
              <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </Button>
        </div>

      </div>
    </footer>
  );
}
