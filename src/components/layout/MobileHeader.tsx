import Link from "next/link";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import Sidebar from "./Sidebar";
import { Button } from "@/components/ui/button";

export default function MobileHeader() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-slate-700/60 bg-slate-900/90 backdrop-blur-md px-4 h-16 w-full">
      <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
        Lan Anh
      </Link>

      <Sheet>
        <SheetTrigger asChild>
          <Button className="p-2 text-slate-300 hover:text-white rounded-md hover:bg-slate-800 focus:outline-none transition-colors">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="p-0 w-[85vw] max-w-sm border-r border-slate-700/60 bg-slate-900"
        >
          <SheetTitle className="hidden">Navigation</SheetTitle>
          <Sidebar />
        </SheetContent>
      </Sheet>
    </header>
  );
}
