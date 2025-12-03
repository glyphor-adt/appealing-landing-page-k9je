import React from "react";

import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { Footer } from "./Footer";
import { Features } from "./Features";
import { Hero } from "./Hero";

interface ApplicationLayoutProps {
  children?: React.ReactNode;
}

const ApplicationLayout: React.FC<ApplicationLayoutProps> = ({
  children,
}) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="min-h-screen bg-background text-foreground">
        <main className="flex flex-col">
          <Hero />
          <Features />
          {/* Optional sections:
          <Pricing />
          <Testimonials />
          */}
          {children}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default ApplicationLayout;