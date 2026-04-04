"use client";


import React from "react";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { getPayload } from "payload";
import config from "@payload-config"
import {
  workExperiencesData,
  projectsData,
  certificationsData
} from "@/lib/data";
import { SectionHeading } from "@/components/custom-ui/SectionHeading";
import AnimatedBlobBackground from "@/components/custom-ui/AnimatedBlobBackground";
import PrintButton from "@/components/custom-ui/PrintButton";
import {
  Download,
  Mail,
  Phone,
  MapPin,
  Globe,
  Github,
  Linkedin
} from "lucide-react";
import { Button } from "@/components/ui/button";


export default function ResumePage() {
  const t = useTranslations("Resume");
  // const t = await getTranslations("Resume");

  const handlePrint = () => {
    window.print();
  };

  // const payload = await getPayload({ config: config });
  // const fetchedCertifications = await payload.find({
  //   collection: "certifications",
  //   sort: "order",
  //   limit: 20,
  // });
  // const certData = fetchedCertifications.docs;

  return (
    <main className="py-24 sm:py-32 relative overflow-hidden print:py-0">

      <div className="print:hidden">
        <AnimatedBlobBackground />
      </div>
      <div className="container relative z-10 mx-auto px-4 mb-16 text-center print:hidden">
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />
        <Button
          onClick={handlePrint}
          className="mt-10 mx-auto inline-flex items-center gap-2 rounded-lg bg-teal-500 hover:bg-teal-400 hover:scale-105 transition-all text-slate-950 font-bold px-8 py-3"
        >
          <Download size={20} />
          <span>{t("exportPdf")}</span>
        </Button>
      </div>


      <div
        className="
          max-w-[210mm] w-full mx-auto bg-white text-slate-800 shadow-2xl rounded-sm
          p-10 md:p-12 
          print:p-[15mm] print:shadow-none print:w-full print:rounded-none
          text-sm
        "
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        <div className="border-b-2 border-slate-800 pb-6 mb-6">
          <h1 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-slate-950">
            Duong Hoang Lan Anh
          </h1>
          <p className="text-lg text-teal-600 font-semibold tracking-wider mt-1 uppercase">
            Web Developer
          </p>

          <ul className="mt-4 flex flex-wrap gap-y-2 gap-x-5 text-slate-600">
            <li className="flex items-center gap-1.5">
              <Mail size={15} /> dhlananh2309@gmail.com
            </li>
            <li className="flex items-center gap-1.5">
              <Phone size={15} /> 0785227949
            </li>
            <li className="flex items-center gap-1.5">
              <MapPin size={15} /> Ho Chi Minh City
            </li>
            <li className="flex items-center gap-1.5">
              <Globe size={15} />
              <a href="https://dhlananh-dev-portfolio.vercel.app/" className="hover:text-teal-600">
                Portfolio
              </a>
            </li>
            <li className="flex items-center gap-1.5">
              <Github size={15} /> dhlananhh</li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_250px] gap-10">

          <div>
            <div className="mb-8">
              <h2 className="text-xl font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-2 mb-4">
                {t("experience")}
              </h2>
              <div className="space-y-6">
                {
                  workExperiencesData.map(exp => (
                    <div
                      key={exp.id}
                      className="page-break-avoid"
                    >
                      <div className="flex justify-between items-baseline mb-1">
                        <h3 className="font-bold text-slate-800 text-base">
                          {exp.role}
                        </h3>
                        <span className="text-xs font-semibold text-teal-700 bg-teal-50 px-2 py-1 rounded">
                          {exp.startDate} - {exp.endDate}
                        </span>
                      </div>
                      <p className="text-sm font-semibold text-slate-600 mb-2">
                        {exp.company}
                      </p>

                      <ul className="list-disc list-outside pl-4 space-y-1.5 text-slate-600 leading-snug">
                        {
                          exp.responsibilities.map((resp, i) => (
                            <li key={i}>{resp}</li>
                          ))
                        }
                      </ul>
                    </div>
                  ))
                }
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-2 mb-4">
                {t("projects")}
              </h2>
              <div className="space-y-5">
                {
                  projectsData.slice(0, 3).map(proj => (
                    <div
                      key={proj.id}
                      className="page-break-avoid"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-slate-800 text-base">
                          {proj.title}
                        </h3>
                      </div>
                      <p className="text-sm text-slate-600 mb-1.5 leading-snug">
                        {proj.shortDescription}
                      </p>
                      <div className="flex flex-wrap gap-2 text-xs font-medium text-teal-600">
                        {proj.tools.join("  •  ")}
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>

          <div>
            <div className="mb-8">
              <h2 className="text-lg font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-2 mb-4">
                {t("skills")}
              </h2>

              <div className="mb-4">
                <h4 className="font-bold text-slate-800 mb-1">Frontend</h4>
                <div className="flex flex-wrap gap-2">
                  {
                    [
                      "ReactJS",
                      "Next.js",
                      "TypeScript",
                      "JavaScript",
                      "TailwindCSS",
                    ].map(sk => (
                      <span
                        key={sk}
                        className="bg-slate-100 text-slate-600 px-2.5 py-1 rounded text-xs"
                      >
                        {sk}
                      </span>
                    ))
                  }
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-bold text-slate-800 mb-1">Backend & Tooling</h4>
                <div className="flex flex-wrap gap-2">
                  {
                    [
                      "Node.js",
                      "Express",
                      "Docker",
                      "Prisma",
                      "MariaDB",
                      "Git",
                      "Figma"
                    ].map(sk => (
                      <span
                        key={sk}
                        className="bg-slate-100 text-slate-600 px-2.5 py-1 rounded text-xs"
                      >
                        {sk}
                      </span>
                    ))
                  }
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-2 mb-4">
                {t("education")}
              </h2>
              <div className="page-break-avoid">
                <h3 className="font-bold text-slate-800 leading-tight mb-1">
                  Industrial University of Ho Chi Minh City (IUH)
                </h3>
                <p className="text-sm text-teal-600 font-semibold mb-2">2021 - 2026</p>
                <p className="text-sm text-slate-600 leading-snug">Bachelor of Engineering in Software Engineering</p>
                <p className="text-sm text-slate-600 leading-snug mt-1">GPA: 3.27/4.0</p>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-lg font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-2 mb-4">{t("certifications")}</h2>
              <div className="space-y-4">
                {
                  certificationsData.map((cert) => (
                    <div
                      key={cert.id}
                      className="page-break-avoid flex flex-col gap-0.5"
                    >
                      <h3 className="font-bold text-slate-800 text-sm leading-tight">{cert.name}</h3>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-sm font-medium text-slate-600">{cert.issuer}</span>
                        {
                          cert.score && (
                            <span className="text-[11px] font-bold tracking-wide text-teal-700 bg-teal-100 px-1.5 py-0.5 rounded shadow-sm">
                              {cert.score}
                            </span>
                          )
                        }
                      </div>
                      <p className="text-xs text-slate-500 font-medium italic mt-1.5">{cert.date}</p>
                    </div>
                  ))
                }
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
