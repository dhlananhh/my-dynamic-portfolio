"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { IoChevronUpCircleSharp } from "react-icons/io5";

export default function Footer() {
  const t = useTranslations("Footer");

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-900/40 backdrop-blur-sm border-t border-slate-800/80 mt-16 pb-8 md:pb-0 relative z-10">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">

        {/* Nút Cuộn lên đầu trang (Giữa / Nhỏ) */}
        <div className="absolute left-1/2 -top-5 -translate-x-1/2">
          <motion.button
            onClick={scrollToTop}
            title={t('scrollToTop')}
            className="rounded-full bg-slate-900 text-teal-400 p-1 border border-slate-700/60 shadow-lg hover:text-white hover:bg-teal-500 hover:border-teal-500 transition-all duration-300 focus:outline-none"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
          >
            <IoChevronUpCircleSharp size={36} />
          </motion.button>
        </div>

        <div className="py-8 md:py-6 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">

          {/* Box Bên Trái: Tác quyền */}
          <div className="flex flex-col items-center md:items-start text-slate-400">
            <p>
              {t("designedBy")}{" "}
              <span className="text-slate-200 font-medium">Lan Anh</span>
            </p>
            <p className="mt-1 text-xs">
              © {currentYear} • {t("rights")}
            </p>
          </div>

          {/* Box Bên Phải: Menu Phụ / Source code */}
          <div className="flex flex-col items-center md:items-end gap-3 text-slate-400">
            <div className="flex gap-4 items-center font-medium">
              <Link href="/" className="hover:text-teal-400 transition-colors">
                {t('terms')}
              </Link>
              <span className="text-slate-700">|</span>
              <Link href="/" className="hover:text-teal-400 transition-colors">
                {t('privacy')}
              </Link>
            </div>

            <a
              href="https://github.com/dhlananhh/my-3d-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-teal-400 transition-colors group"
            >
              <Github size={14} className="group-hover:animate-pulse text-slate-500 group-hover:text-teal-400" />
              <span>{t("viewSource")}</span>
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
