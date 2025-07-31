"use client";
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "@heroicons/react/24/outline";
import { SidebarTrigger } from "./ui/sidebar";

import { Cog6ToothIcon, SunIcon, MoonIcon } from "@heroicons/react/24/outline";

export function PageHeader({
  title,
  icon,
  onAdd,
  addLabel = "Add",
  children,
  onThemeToggle,
  darkMode,
}: {
  title: string;
  icon?: ReactNode;
  onAdd?: () => void;
  addLabel?: string;
  children?: ReactNode;
  onThemeToggle?: () => void;
  darkMode?: boolean;
}) {
  return (
    <div className="flex items-center justify-between mb-8 w-full">
      <div className="flex items-center gap-2">
        <SidebarTrigger />
        <h1 className="text-3xl font-bold flex items-center gap-2">
          {icon}
          {title}
        </h1>
      </div>
      <div className="flex items-center gap-2">
        {onAdd && (
          <Button onClick={onAdd} className="flex gap-2">
            <PlusIcon className="h-5 w-5" /> {addLabel}
          </Button>
        )}
        {/* Theme changer icon */}
        {onThemeToggle && (
          <Button variant="ghost" size="icon" onClick={onThemeToggle} aria-label="Toggle theme">
            {darkMode ? <MoonIcon className="h-5 w-5" /> : <SunIcon className="h-5 w-5" />}
          </Button>
        )}
        {/* Settings icon */}
        <Button variant="ghost" size="icon" aria-label="Settings">
          <Cog6ToothIcon className="h-5 w-5" />
        </Button>
        {children}
      </div>
    </div>
  );
}
