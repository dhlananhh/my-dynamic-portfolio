"use client";

import Sidebar from "@/components/layout/Sidebar";
import MobileHeader from "@/components/layout/MobileHeader";
import { SidebarProvider, useSidebar } from "@/context/SidebarContext";
import { cn } from "@/lib/utils";

function AppLayout({ children }: { children: React.ReactNode }) {
  const { isCollapsed } = useSidebar();

  return (
    <div className="min-h-screen xl:flex">
      <div className="hidden md:block fixed inset-y-0 left-0 z-40 transition-all duration-300">
        <Sidebar />
      </div>

      <div className="block md:hidden">
        <MobileHeader />
      </div>

      <main
        className={cn(
          "relative min-h-screen transition-all duration-300 ease-in-out w-full",
          isCollapsed ? "md:pl-[5rem]" : "md:pl-[18rem]"
        )}
      >
        {children}
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
