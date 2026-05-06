import Image from "next/image";
import Link from "next/link";
import React from "react";

import { cn } from "@/lib/util/cn";

export interface PanelListItemProps {
  imageRef: string;
  title: string;
  description: string;
  dates: string;
  href?: string;
  imageClassName?: string;
}

export function PanelListItem({
  imageRef,
  title,
  description,
  dates,
  href,
  imageClassName,
}: PanelListItemProps) {
  return (
    <div className="group grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <div className="hidden flex-col lg:flex">
        <div className="text-muted-foreground">{dates}</div>
      </div>

      <div className="order-2 min-w-0 sm:order-1">
        <div className="order-1 flex text-sm lg:hidden">
          <span className="text-muted-foreground">{dates}</span>
        </div>

        {href ? (
          <Link
            href={href}
            target="_blank"
            rel="noreferrer"
            className={cn(
              "text-lg underline-offset-2",
              "relative inline-block after:absolute after:bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-150 hover:after:scale-x-100",
            )}
          >
            {title}
          </Link>
        ) : (
          <div className="text-lg">{title}</div>
        )}

        <div className="text-muted-foreground text-base leading-tight text-pretty">
          {description}
        </div>
      </div>

      {href ? (
        <Link
          href={href}
          target="_blank"
          rel="noreferrer"
          className="group/image order-1 aspect-video w-full overflow-hidden sm:order-2"
          tabIndex={-1}
        >
          <div className="relative h-full w-full">
            <Image
              src={imageRef}
              alt={title}
              fill
              className={cn(
                "size-full rounded-xs object-cover object-center",
                "transition-[filter] duration-200 ease-in-out",
                "group-hover/image:brightness-75",
                imageClassName,
              )}
            />
          </div>
        </Link>
      ) : (
        <div className="group/image order-1 aspect-video w-full overflow-hidden sm:order-2">
          <div className="relative h-full w-full">
            <Image
              src={imageRef}
              alt={title}
              fill
              className={cn(
                "size-full rounded-xs object-cover object-center transition-all",
                imageClassName,
              )}
            />
          </div>
        </div>
      )}
    </div>
  );
}
