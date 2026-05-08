"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiDevpost } from "react-icons/si";

import { BackgroundTriggerButton } from "@/components/layout/background-trigger-button";
import { backgrounds } from "@/components/layout/backgrounds";
import { cn } from "@/lib/util/cn";

export function Header() {
  const [backgroundIndex, setBackgroundIndex] = React.useState(0);
  const background = backgrounds[backgroundIndex];
  const eagerBackgroundIndexes = new Set([
    backgroundIndex,
    (backgroundIndex + 1) % backgrounds.length,
    (backgroundIndex + 2) % backgrounds.length,
  ]);

  const cycleBackground = () => {
    setBackgroundIndex(
      (currentBackgroundIndex) => (currentBackgroundIndex + 1) % backgrounds.length,
    );
  };

  return (
    <header
      className={cn(
        "relative h-[33dvh] w-full overflow-hidden transition-all duration-500",
        "[.background-root:has(.background-trigger[data-hovered=true])_&]:h-dvh",
      )}
    >
      {backgrounds.map((item, index) => (
        <Image
          key={item.file}
          src={`/backdrop/${item.file}`}
          alt={`${item.title} backdrop`}
          fill
          priority={index === 0}
          unoptimized
          loading={index === 0 ? undefined : eagerBackgroundIndexes.has(index) ? "eager" : "lazy"}
          className={cn(
            "pointer-events-none object-cover transition-opacity duration-250 select-none",
            index === backgroundIndex ? "opacity-100" : "opacity-0",
          )}
          style={{ objectPosition: item.objectPosition ?? "50% 50%" }}
          aria-hidden={index !== backgroundIndex}
        />
      ))}

      <div
        className={cn(
          "pointer-events-none absolute inset-0",
          "to-background bg-linear-to-b from-transparent from-20%",
          "transition-[--tw-gradient-from-position] duration-500",
          "[.background-root:has(.background-trigger[data-hovered=true])_&]:from-100%",
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

      <div className="absolute inset-x-3 top-3 flex items-start gap-x-3 max-lg:justify-end">
        <div className="flex-1 max-md:hidden">
          <BackgroundTriggerButton
            title={background.title}
            subtitle={background.subtitle}
            onClick={cycleBackground}
          />
        </div>

        <div
          className={cn(
            "background-muted flex shrink-0 items-center gap-x-3 transition-all duration-300",
            "[&_a]:rounded-sm [&_a]:outline-offset-2",
            "[&_a:focus-visible_svg]:text-foreground [&_svg]:text-background",
            "[&_svg]:hover:text-foreground [&_svg]:duration-200",
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
      </div>
    </header>
  );
}
