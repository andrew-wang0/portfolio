"use client";

import { ArrowsClockwiseIcon, MapPinIcon } from "@phosphor-icons/react";
import React from "react";

import { cn } from "@/lib/util/cn";

export function BackgroundTriggerButton() {
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const pointerPositionRef = React.useRef<{ x: number; y: number } | null>(null);
  const frameRef = React.useRef<number | null>(null);
  const [isHovered, setIsHovered] = React.useState(false);

  const syncHoveredState = React.useCallback(() => {
    const button = buttonRef.current;
    const pointerPosition = pointerPositionRef.current;

    if (!button || !pointerPosition) {
      return;
    }

    const elementUnderPointer = document.elementFromPoint(pointerPosition.x, pointerPosition.y);
    const nextHoveredState = elementUnderPointer !== null && button.contains(elementUnderPointer);

    setIsHovered((currentHoveredState) =>
      currentHoveredState === nextHoveredState ? currentHoveredState : nextHoveredState,
    );
  }, []);

  const scheduleHoveredStateSync = React.useCallback(() => {
    if (frameRef.current !== null) {
      return;
    }

    frameRef.current = window.requestAnimationFrame(() => {
      frameRef.current = null;
      syncHoveredState();
    });
  }, [syncHoveredState]);

  React.useEffect(() => {
    return () => {
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  React.useEffect(() => {
    if (!isHovered) {
      return;
    }

    const handleWindowScroll = () => {
      scheduleHoveredStateSync();
    };

    const handleWindowWheel = (event: WheelEvent) => {
      pointerPositionRef.current = { x: event.clientX, y: event.clientY };
      scheduleHoveredStateSync();
    };

    window.addEventListener("scroll", handleWindowScroll, true);
    window.addEventListener("wheel", handleWindowWheel, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleWindowScroll, true);
      window.removeEventListener("wheel", handleWindowWheel);
    };
  }, [isHovered, scheduleHoveredStateSync]);

  return (
    <button
      ref={buttonRef}
      data-hovered={isHovered ? "true" : "false"}
      className={cn(
        "background-trigger flex cursor-pointer items-center gap-x-1",
        "rounded-lg p-2 backdrop-blur-sm",
        "[&_svg]:size-5",
      )}
      onPointerEnter={(event) => {
        pointerPositionRef.current = { x: event.clientX, y: event.clientY };
        setIsHovered(true);
      }}
      onPointerMove={(event) => {
        pointerPositionRef.current = { x: event.clientX, y: event.clientY };
      }}
      onPointerLeave={() => {
        setIsHovered(false);
      }}
    >
      <span className="relative inline-flex">
        <MapPinIcon
          weight="fill"
          className={cn("transition-opacity duration-200", isHovered && "opacity-0")}
        />

        <ArrowsClockwiseIcon
          weight="fill"
          className={cn(
            "absolute inset-0 opacity-0 transition-opacity duration-200",
            isHovered && "opacity-100",
          )}
        />
      </span>

      <span className="mix-blend-difference">Zion National Park</span>
    </button>
  );
}
