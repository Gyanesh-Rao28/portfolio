"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
export function Logo() {
  const words = [
    {
      text: "Gyanesh",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return <TypewriterEffectSmooth words={words} className="sm:text-3xl" />;
}
