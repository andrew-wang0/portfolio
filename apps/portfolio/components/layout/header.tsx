import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiDevpost } from "react-icons/si";

import { BackgroundTriggerButton } from "@/components/layout/background-trigger-button";
import { cn } from "@/lib/util/cn";

export function Header() {
  return (
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
          "background-muted absolute inset-x-0 bottom-0.5 mx-auto max-w-6xl px-6",
          "[.background-root:has(.background-trigger[data-hovered=true])_&]:opacity-0",
          "transition-all duration-300",
        )}
      >
        <h1 className="text-7xl font-semibold max-lg:text-6xl max-sm:text-5xl">Andrew Wang</h1>
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

        <Link href="https://www.linkedin.com/in/andrew-wang0/" target="_blank" title="LinkedIn">
          <FaLinkedin />
        </Link>
      </div>

      <div className="absolute top-3 left-3 max-lg:hidden">
        <BackgroundTriggerButton />
      </div>
    </header>
  );
}
