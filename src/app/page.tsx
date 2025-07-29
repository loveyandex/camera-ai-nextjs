
"use client";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { SunIcon, MoonIcon, CameraIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Image from "next/image";

export default function Home() {

  // Theme switcher state
  const [darkMode, setDarkMode] = useState(false);
  // Simulated camera event state
  const [eventDetected, setEventDetected] = useState(false);

  // Toggle dark mode
  const handleThemeChange = () => {
    setDarkMode((prev) => !prev);
    if (typeof document !== "undefined") {
      document.documentElement.classList.toggle("dark", !darkMode);
    }
  };

  // Simulate event detection
  const handleDetectEvent = () => {
    setEventDetected(true);
    setTimeout(() => setEventDetected(false), 2000);
  };

  return (
    <div className="font-sans min-h-screen flex flex-col items-center justify-center bg-background transition-colors duration-300">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="flex flex-col items-center gap-2">
          <CameraIcon className="h-10 w-10 text-primary" />
          <h1 className="text-2xl font-bold">AI Camera Event Detector</h1>
          <div className="flex items-center gap-2 mt-2">
            <SunIcon className="h-5 w-5" />
            <Switch checked={darkMode} onCheckedChange={handleThemeChange} />
            <MoonIcon className="h-5 w-5" />
          </div>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-4">
          <Button onClick={handleDetectEvent} className="w-full">
            Detect Event
          </Button>
          {eventDetected && (
            <div className="text-green-600 font-semibold">Event Detected!</div>
          )}
          <div className="mt-4 text-xs text-muted-foreground text-center">
            Theme powered by <a href="https://tweakcn.com/editor/theme#" target="_blank" rel="noopener noreferrer" className="underline">TweakCN</a> & shadcn/ui
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
