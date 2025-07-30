"use client";
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "@heroicons/react/24/outline";
import { SidebarTrigger } from "./ui/sidebar";

export function PageHeader({
      title,
      icon,
      onAdd,
      addLabel = "Add",
      children,
}: {
      title: string;
      icon?: ReactNode;
      onAdd?: () => void;
      addLabel?: string;
      children?: ReactNode;
}) {
      return (
            <div className="flex items-center justify-between w-full max-w-3xl mb-8">
                  <SidebarTrigger />

                  <h1 className="text-3xl font-bold flex items-center gap-2">

                        {icon}
                        {title}
                  </h1>
                  {onAdd && (
                        <Button onClick={onAdd} className="flex gap-2">
                              <PlusIcon className="h-5 w-5" /> {addLabel}
                        </Button>
                  )}
                  {children}
            </div>
      );
}
