import { ArrowsClockwiseIcon, MapPinIcon } from "@phosphor-icons/react";
import { motion } from "motion/react";
import React from "react";

import type { Background } from "@/components/layout/backgrounds";
import { cn } from "@/lib/util/cn";

type Props = {
  background: Background;
  currentIndex: number;
  totalCount: number;
  onClick: () => void;
};

export function BackgroundTriggerButton({ background, currentIndex, totalCount, onClick }: Props) {
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

  const Icon = background.icon ?? MapPinIcon;

  return (
    <motion.button
      ref={buttonRef}
      data-hovered={isHovered ? "true" : "false"}
      className={cn(
        "background-trigger flex max-w-full cursor-pointer items-center gap-x-4 overflow-hidden",
        "rounded-lg p-2 backdrop-blur-sm",
        "[&_svg]:size-5",
      )}
      animate={{ width: isHovered ? "100%" : "auto" }}
      transition={{ duration: 0.4, ease: "easeIn" }}
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
      onPointerUp={(event) => {
        pointerPositionRef.current = { x: event.clientX, y: event.clientY };
        scheduleHoveredStateSync();
      }}
      onClick={onClick}
      type="button"
    >
      <span className="inline-flex min-w-0 items-center gap-x-1 whitespace-nowrap">
        <span className="relative inline-flex">
          <Icon
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

        <div className="flex items-end">
          <span>{background.title}</span>
          {background.subtitle && (
            <motion.span
              aria-hidden={!isHovered}
              className="inline-flex overflow-hidden text-[.95rem] font-light tracking-tight whitespace-nowrap"
              initial={false}
              animate={
                isHovered
                  ? { marginLeft: 8, opacity: 1, width: "auto" }
                  : { marginLeft: 0, opacity: 0, width: 0 }
              }
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <motion.span
                initial={false}
                animate={{ x: isHovered ? 0 : -16 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {background.subtitle}
              </motion.span>
            </motion.span>
          )}
        </div>
      </span>

      <motion.span
        aria-hidden={!isHovered}
        className={cn("ml-auto font-semibold whitespace-nowrap", { hidden: !isHovered })}
        initial={false}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.2, ease: "easeInOut", delay: isHovered ? 0.5 : 0 }}
      >
        {`#${currentIndex} / ${totalCount}`}
      </motion.span>
    </motion.button>
  );
}
