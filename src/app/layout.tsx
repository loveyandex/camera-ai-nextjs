
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

import "./globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SidebarProvider>
          <AppSidebar />
          <main>
            <SidebarTrigger />
            <div style={{ padding: "1rem", display: "inline" }}>Kose nanat</div>
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
