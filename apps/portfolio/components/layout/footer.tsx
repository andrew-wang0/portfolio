"use client";

import React from "react";

import { cn } from "@/lib/util/cn";

export function Footer() {
  return (
    <footer
      className={cn(
        "mx-auto flex max-w-6xl items-center justify-end px-6 py-2",
        "text-muted-foreground/75 space-x-2",
      )}
    >
      <span>Andrew Wang</span>
    </footer>
  );
}
