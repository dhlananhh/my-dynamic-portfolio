"use client";


import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/lib/data";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import {
  CalendarDays,
  GitBranch,
  Construction,
} from "lucide-react";


interface ProjectCardProps {
  project: Project;
  index: number;
}


const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat("en-UK", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  }).format(date);
};


export default function ProjectCard({ project, index }: ProjectCardProps) {
  const statusColor =
    project.projectStatus.toLowerCase() === "completed"
      ? "bg-green-500 text-green-50"
      : project.projectStatus.toLowerCase() === "in progress"
        ? "bg-yellow-500 text-yellow-50"
        : "bg-gray-500 text-gray-50";

  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <Link href={`/projects/${project.slug}`} passHref>
      <div className="relative w-full h-56 sm:h-60">
        <Image
          src={project.imageUrl || "/images/placeholder-project.png"}
          alt={project.title}
          fill={true}
          style={{ objectFit: "cover" }}
          className="transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-5 flex flex-col grow">
        <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-teal-400">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm mb-3 line-clamp-3 grow">
          {project.shortDescription}
        </p>

        <div className="flex flex-wrap text-xs text-gray-500 mb-3 gap-x-4 gap-y-1">
          <div className="flex items-center">
            <CalendarDays size={14} className="mr-1.5 text-teal-500" />
            <span>Start: {formatDate(new Date(project.projectStartDate))}</span>
          </div>
          <div className="flex items-center">
            {
              project.projectStatus.toLowerCase() === "in progress" ? (
                <Construction size={14} className="mr-1.5 text-yellow-400" />
              ) : (
                <GitBranch size={14} className="mr-1.5 text-green-400" />
              )
            }
            Status:
            <span className={`ml-1 px-1.5 py-0.5 rounded-sm text-xs ${statusColor}`}>
              {project.projectStatus}
            </span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {
            project.tools.map((tool) => (
              <span
                key={tool}
                className="text-xs bg-gray-700 text-gray-300 px-2 py-0.5 rounded-full"
              >
                {tool}
              </span>
            ))
          }
        </div>

        <div className="mt-auto pt-4 border-t border-gray-700 flex flex-col sm:flex-row sm:items-center gap-3">
          {
            project.githubUrl && (
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleButtonClick}
                className="flex-1 text-center sm:text-left inline-flex items-center justify-center sm:justify-start gap-2 bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white font-medium py-2 px-4 rounded-lg text-sm transform active:scale-95 transition-all duration-150 ease-in-out"
              >
                <FaGithub size={16} />
                View Code
              </Link>
            )
          }
          {
            project.liveDemoUrl && (
              <Link
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleButtonClick}
                className="flex-1 sm:text-left inline-flex items-center justify-center sm:justify-start gap-2 rounded-lg text-sm py-2 px-4 text-center font-medium text-white bg-linear-to-br from-green-400 to-blue-600 hover:bg-linear-to-bl focus:ring-4 focus:outline-hidden focus:ring-green-200 dark:focus:ring-green-800 transform active:scale-95 transition-all duration-150 ease-in-out"
              >
                <FaExternalLinkAlt size={14} />
                Live Demo
              </Link>
            )
          }
        </div>
      </div>
    </Link>
  );
}
