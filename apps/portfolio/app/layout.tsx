import "./globals.css";

import type { Metadata } from "next";
import { Geist } from "next/font/google";
import React from "react";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { type NavTab, NavTabs } from "@/components/ui/nav-tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/util/cn";

export const metadata: Metadata = {
  title: "Andrew Wang",
  description: "Andrew Wang's Portfolio",
};

const geist = Geist({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const tabs: NavTab[] = [
    { display: "Experience", path: "/" },
    { display: "Projects", path: "/projects" },
    { display: "Random", path: "/random" },
  ];

  return (
    <html lang="en" className={geist.className}>
      <body className="animate-in fade-in h-dvh overflow-hidden antialiased">
        <ScrollArea vertical className="size-full" type="always">
          <div className={cn("background-root relative min-h-dvh")}>
            <Header />
            <main
              className={cn(
                "background-muted relative mx-auto max-w-6xl space-y-8 px-6 py-4 transition-all duration-300",
                "[.background-root:has(.background-trigger[data-hovered=true])_&]:opacity-0",
                "transition-all duration-300",
              )}
            >
              <div className="space-y-1 text-lg text-pretty">
                <p>I'm a full-stack developer passionate about building things that work.</p>
                <p>Currently studying computer science at UC Irvine.</p>
              </div>

              <NavTabs tabs={tabs} />

              {children}

              <hr className="border-muted/50 mt-8" />

              <Footer />
            </main>
          </div>
        </ScrollArea>
      </body>
    </html>
  );
}
