import "./globals.css";

import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiDevpost } from "react-icons/si";

import { BackgroundTriggerButton } from "@/components/layout/background-trigger-button";
import { Footer } from "@/components/layout/footer";
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
            <header
              className={cn(
                "relative h-[33dvh] w-full overflow-hidden transition-all duration-500",
                "[.background-root:has(.background-trigger[data-hovered=true])_&]:h-dvh",
              )}
            >
              <Image
                src="/backdrop/zion.jpg"
                alt="Zion National Park backdrop"
                fill
                priority
                className="pointer-events-none object-cover object-[50%_10%] select-none"
              />

              <div
                className={cn(
                  "pointer-events-none absolute inset-0",
                  "to-background bg-linear-to-b from-transparent from-20%",
                  "transition-opacity duration-500",
                  "[.background-root:has(.background-trigger[data-hovered=true])_&]:opacity-0",
                )}
              />

              <div
                className={cn(
                  "background-muted absolute inset-x-0 bottom-0 mx-auto max-w-6xl px-6",
                  "[.background-root:has(.background-trigger[data-hovered=true])_&]:opacity-0",
                  "transition-all duration-300",
                )}
              >
                <h1 className="text-7xl font-semibold max-lg:text-6xl max-sm:text-5xl">
                  Andrew Wang
                </h1>
              </div>

              <div
                className={cn(
                  "background-muted absolute top-3 right-3 flex items-center gap-x-3 transition-all duration-300",
                  "[&_svg]:text-background [&_svg]:hover:text-foreground [&_svg]:duration-200",
                  "[&_svg]:size-7 [&_svg]:sm:size-9",
                )}
              >
                <Link href="https://devpost.com/andrew-wang0" target="_blank" title="Devpost">
                  <SiDevpost />
                </Link>

                <Link href="https://github.com/andrew-wang0" target="_blank" title="GitHub">
                  <FaGithub />
                </Link>

                <Link
                  href="https://www.linkedin.com/in/andrew-wang0/"
                  target="_blank"
                  title="LinkedIn"
                >
                  <FaLinkedin />
                </Link>
              </div>

              <div className="absolute top-3 left-3">
                <BackgroundTriggerButton />
              </div>
            </header>
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
