"use client";


import Sidebar from "@/components/layout/Sidebar";
import MobileHeader from "@/components/layout/MobileHeader";
import { SidebarProvider, useSidebar } from "@/contexts/SidebarContext";
import { cn } from "@/lib/utils";
import Footer from "@/components/layout/Footer";


function AppLayout({ children }: { children: React.ReactNode }) {
  const { isCollapsed } = useSidebar();

  return (
    <div className="relative min-h-screen bg-gray-950 w-full flex flex-col">
      <div className="hidden md:block fixed inset-y-0 left-0 z-40 transition-all duration-300 print:hidden">
        <Sidebar />
      </div>

      <div className="block md:hidden print:hidden">
        <MobileHeader />
      </div>

      <main
        className={
          cn(
            "relative transition-all duration-300 ease-in-out flex flex-col grow w-full",
            "min-h-dvh",
            isCollapsed ? "md:pl-20 print:pl-0" : "md:pl-72 print:pl-0"
          )
        }
      >
        <div className="grow w-full">
          {children}
        </div>

        <div className="print:hidden">
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppLayout>{children}</AppLayout>
    </SidebarProvider>
  );
}
