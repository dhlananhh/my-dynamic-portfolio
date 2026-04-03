"use client";


import React from "react";
import { usePathname, useRouter } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { useParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";


export default function LanguageSwitcher({ isCollapsed }: { isCollapsed?: boolean }) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const locale = useLocale();

  const handleLocaleChange = (newLocale: string) => {
    router.replace(
      // @ts-expect-error -- useParams type
      { pathname, params },
      { locale: newLocale }
    );
  };

  return (
    <div className={
      cn(
        "flex rounded-lg p-1 bg-slate-800 border border-slate-700/60 transition-all",
        isCollapsed && "flex-col items-center"
      )
    }>
      <Button
        onClick={() => handleLocaleChange("en")}
        className={cn(
          "flex-1 px-2 py-1 text-xs font-semibold rounded-md transition-colors",
          locale === "en" ? "bg-teal-500 text-white" : "text-slate-400 hover:text-slate-200"
        )}
      >
        EN
      </Button>
      <Button
        onClick={() => handleLocaleChange("vi")}
        className={cn(
          "flex-1 px-2 py-1 text-xs font-semibold rounded-md transition-colors",
          locale === "vi" ? "bg-teal-500 text-white" : "text-slate-400 hover:text-slate-200"
        )}
      >
        VI
      </Button>
    </div>
  );
}
