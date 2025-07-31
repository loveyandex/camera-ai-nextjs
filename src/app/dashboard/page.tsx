"use client";
import { PageHeader } from "@/components/page-header";
import ChartAreaInteractive from "@/components/ui/chart-area-interactive";
import { SectionCards } from "@/components/ui/section-cards";

import { PlusIcon, CameraIcon, HomeIcon } from "@heroicons/react/24/outline";
import { useState } from "react";


export default function Page() {
  const [darkMode, setDarkMode] = useState(false);

  const handleThemeToggle = () => {
    setDarkMode((prev) => !prev);
    if (typeof document !== "undefined") {
      document.documentElement.classList.toggle("dark", !darkMode);
    }
  };

  return (
    <div className="@container/main flex flex-1 flex-col gap-2">
      <div className="bg-background flex flex-col py-5 w-full px-4">
        <PageHeader
          title="Dashboard"
          icon={<HomeIcon className="h-8 w-8 text-primary" />}
          onThemeToggle={handleThemeToggle}
          darkMode={darkMode}
        />
      </div>


      <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
        <SectionCards />

        <div className="px-4 lg:px-6">
          <ChartAreaInteractive />
        </div>
      </div>
    </div>
  )
}