"use client";


import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { motion, circOut } from "framer-motion";
import { Images } from "@/lib/images";
import AnimatedBlobBackground from "@/components/custom-ui/AnimatedBlobBackground";
import { SectionHeading } from "@/components/custom-ui/SectionHeading";
import { GlassmorphicCard } from "@/components/custom-ui/GlassmorphicCard";


const AboutMeSection = () => {
  const t = useTranslations("About");
  const profileImageUrl = Images.ProfilePlaceholder;
  const imageContainerVariants = {
    hidden: {
      opacity: 0,
      x: -50
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: circOut,
        delay: 0.3
      }
    },
  };

  return (
    <section
      id="about"
      className="py-24 sm:py-32 relative bg-gray-950 text-white overflow-hidden"
    >
      <AnimatedBlobBackground />
      <div className="container relative z-10 mx-auto px-4">

        <SectionHeading
          title={t("title")}
          subtitle={t("subtitle")}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start md:items-center mt-12">
          <motion.div
            className="relative"
            variants={imageContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2
            }}
          >
            <div className="absolute -inset-3 sm:-inset-4 rounded-xl bg-linear-to-br from-purple-500/30 via-pink-500/20 to-teal-500/30 blur-xl opacity-60 sm:opacity-70 transition-all duration-500 group-hover:opacity-90"></div>
            <div className="relative aspect-3/4 sm:aspect-square rounded-xl overflow-hidden border border-zinc-800 shadow-2xl group">
              <Image
                src={profileImageUrl}
                alt="Avatar"
                fill={true}
                style={{ objectFit: "cover" }}
                className="transform transition-transform duration-500 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6">
                <div className="flex items-center gap-2 bg-black/30 backdrop-blur-xs px-3 py-1.5 rounded-md w-fit">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-xs sm:text-sm font-medium text-gray-100">
                    {t("status")}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="space-y-6">
            <GlassmorphicCard>
              <p
                className="text-lg text-zinc-300 leading-relaxed lg:text-justify"
                dangerouslySetInnerHTML={{ __html: t("p1") }}
              ></p>
              <p
                className="text-lg text-zinc-300 mt-4 leading-relaxed lg:text-justify"
                dangerouslySetInnerHTML={{ __html: t("p2") }}
              ></p>
              <p className="text-lg text-zinc-300 mt-4 leading-relaxed lg:text-justify">
                {t("p3")}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mt-8 pt-6 border-t border-zinc-700/50">
                <div>
                  <div className="text-xs sm:text-sm text-white/90">
                    {t("name")}
                  </div>
                  <div className="font-medium text-zinc-200">
                    Dương Hoàng Lan Anh
                  </div>
                </div>
                <div>
                  <div className="text-xs sm:text-sm text-white/90">
                    {t("email")}
                  </div>
                  <Link
                    href="mailto:dhlananh2309@gmail.com"
                    className="font-medium text-zinc-200 hover:text-teal-400 transition-colors"
                  >dhlananh2309@gmail.com
                  </Link>
                </div>
                <div>
                  <div className="text-xs sm:text-sm text-white/90">
                    {t("location")}
                  </div>
                  <div className="font-medium text-zinc-200">
                    {t("city")}
                  </div>
                </div>
                <div>
                  <div className="text-xs sm:text-sm text-white/90">
                    {t("availability")}
                  </div>
                  <div className="font-medium text-green-400">
                    {t("available")}
                  </div>
                </div>
              </div>
            </GlassmorphicCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
