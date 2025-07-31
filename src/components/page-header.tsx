"use client";
import { ReactNode, Fragment } from "react";
import { Button } from "@/components/ui/button";
import { PlusIcon, Cog6ToothIcon, SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { SidebarTrigger } from "./ui/sidebar";

interface PageHeaderProps {
  title: string;
  icon?: ReactNode;
  onAdd?: () => void;
  addLabel?: string;
  children?: ReactNode;
  onThemeToggle?: () => void;
  darkMode?: boolean;
}

export function PageHeader({
  title,
  icon,
  onAdd,
  addLabel,
  children,
  onThemeToggle,
  darkMode,
}: PageHeaderProps) {
  const label = addLabel ?? "Add";
  return (
    <div className="flex items-center justify-between mb-8 w-full px-0">
      <div className="flex items-center gap-2">
        <SidebarTrigger />
          {icon}
        <h1 className="text-3xl font-bold items-center gap-2 hidden sm:flex">
          {title}
        </h1>
      </div>
      <div className="flex items-center gap-2">
        {onAdd && (
          <Fragment>
            {/* Mobile: icon-only circle button */}
            <Button onClick={onAdd} className="flex sm:hidden rounded-full p-2" size="icon" aria-label={label}>
              <PlusIcon className="h-5 w-5" />
            </Button>
            {/* Desktop: normal button with text */}
            <Button onClick={onAdd} className="hidden sm:flex gap-2">
              <PlusIcon className="h-5 w-5" /> {label}
            </Button>
          </Fragment>
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
