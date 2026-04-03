"use client";


import React from "react";
import { Link, usePathname } from "@/i18n/routing";
// import Link from "next/link";
import Image from "next/legacy/image";
// import { usePathname } from "next/navigation";
import { useSidebar } from "@/context/SidebarContext";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";
import { cn } from "@/lib/utils";
import { Images } from "@/lib/images";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  LayoutDashboard,
  User,
  FolderGit2,
  Star,
  CircleHelp,
  Newspaper,
  Send,
  Github,
  Linkedin,
  Instagram,
  ChevronsLeft,
} from "lucide-react";


const navItems = [
  { href: "/", label: "Home", icon: LayoutDashboard },
  { href: "/about", label: "About", icon: User },
  { href: "/projects", label: "Projects", icon: FolderGit2 },
  // { href: "/skills", label: "Skills", icon: Code }, 
  // { href: "/contributions", label: "Contributions", icon: GitCommitHorizontal },
  { href: "/testimonials", label: "Testimonials", icon: Star },
  { href: "/faq", label: "FAQ", icon: CircleHelp },
  // { href: "/resume", label: "Resume", icon: Newspaper },
  { href: "/contact", label: "Contact", icon: Send },
];

const socialItems = [
  { href: "https://github.com/dhlananhh", icon: Github },
  { href: "https://linkedin.com/in/dhlananh", icon: Linkedin },
  { href: "https://www.instagram.com/dhlananh", icon: Instagram },
];


interface SidebarProps {
  className?: string;
}

export default function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname();
  const { isCollapsed, toggleSidebar } = useSidebar();
  const t = useTranslations("Sidebar");

  return (
    <TooltipProvider delayDuration={0}>
      <aside className={
        cn(
          "flex h-[100dvh] flex-col bg-slate-900/80 backdrop-blur-xl border-r border-slate-700/60 transition-all duration-300 ease-in-out z-40 overflow-y-auto hide-scrollbar",
          isCollapsed ? "w-20" : "w-72",
          className
        )
      }>
        <div className="flex flex-col flex-grow p-4">
          {/* Profile Section */}
          <div className={
            cn(
              "flex items-center gap-3 pb-4 border-b border-slate-700/60 mt-2",
              isCollapsed && "justify-center"
            )
          }>
            <Image
              src={Images.ProfilePlaceholder}
              alt="Dương Hoàng Lan Anh"
              width={isCollapsed ? 40 : 50}
              height={isCollapsed ? 40 : 50}
              className="rounded-full border-2 border-slate-600 object-cover transition-all"
            />
            <div className={
              cn(
                "flex flex-col",
                isCollapsed && "hidden"
              )
            }>
              <h2 className="text-lg font-semibold text-white">Lan Anh</h2>
              <p className="text-xs text-slate-400">Web Developer</p>
            </div>
          </div>

          {/* Navigation Section */}
          <nav className="flex-grow py-6">
            <ul className="space-y-2">
              {
                navItems.map((item) => {
                  const isActive = (item.href === "/" && pathname === "/")
                    || (item.href !== "/" && pathname.startsWith(item.href));
                  return (
                    <li key={item.label}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Link
                            href={item.href}
                            className={
                              cn(
                                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-slate-300 transition-colors",
                                "hover:bg-teal-500/10 hover:text-teal-300",
                                isActive && "bg-teal-500/10 text-teal-300",
                                isCollapsed && "justify-center"
                              )}
                          >
                            <item.icon className="h-5 w-5 flex-shrink-0" />
                            <span className={
                              cn(
                                "text-sm",
                                isCollapsed && "hidden"
                              )
                            }>
                              {item.label}
                            </span>
                          </Link>
                        </TooltipTrigger>
                        {
                          isCollapsed && (
                            <TooltipContent side="right">{item.label}</TooltipContent>
                          )
                        }
                      </Tooltip>
                    </li>
                  );
                })}
            </ul>
          </nav>

          {/* Socials Section */}
          <div className={
            cn(
              "pb-4 border-t border-slate-700/60",
              isCollapsed && "hidden"
            )
          }>
            <p className="text-xs uppercase text-slate-500 my-4 text-center">Socials</p>
            <div className="flex justify-center gap-4">
              {
                socialItems.map((social) => (
                  <Link
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors"
                  >
                    <social.icon className="h-5 w-5" />
                  </Link>
                ))
              }
            </div>
          </div>
        </div>

        {/* Sidebar Toggle */}
        <div className="p-4 border-t border-slate-700/60 space-y-4">
          <LanguageSwitcher isCollapsed={isCollapsed} />

          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/resume"
                className={cn(
                  "w-full flex items-center justify-center gap-2 rounded-lg bg-slate-800 px-4 py-2.5 text-sm font-semibold text-white shadow-lg transition-all",
                  "hover:bg-slate-700", isCollapsed && "py-2.5"
                )}
              >
                <Newspaper className="h-5 w-5 flex-shrink-0" />
                <span
                  className={
                    cn(isCollapsed && "hidden")
                  }>
                  {t("viewResume")}
                </span>
              </Link>
            </TooltipTrigger>
            {
              isCollapsed && (
                <TooltipContent side="right">
                  {t("viewResume")}
                </TooltipContent>
              )
            }
          </Tooltip>

          <Button
            onClick={toggleSidebar}
            className="w-full flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-slate-400 hover:bg-slate-700 hover:text-white"
          >
            <ChevronsLeft className={
              cn(
                "h-5 w-5 transition-transform",
                isCollapsed && "rotate-180"
              )
            }
            />
            <span className={cn(isCollapsed && "hidden")}>Collapse</span>
          </Button>
        </div>
      </aside>
    </TooltipProvider>
  );
}
