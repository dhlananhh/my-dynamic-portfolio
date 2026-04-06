"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useTranslations } from "next-intl";

export default function PrintButton() {
  const t = useTranslations("Resume");

  const handlePrint = () => {
    window.print();
  };

  return (
    <Button
      onClick={handlePrint}
      className="mt-10 mx-auto inline-flex items-center gap-2 rounded-lg bg-teal-500 hover:bg-teal-400 hover:scale-105 transition-all text-slate-950 font-bold px-8 py-3"
    >
      <Download size={20} />
      <span>{t("exportPdf")}</span>
    </Button>
  );
}
