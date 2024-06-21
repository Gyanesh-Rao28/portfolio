"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
export function Logo() {
  const words = [
    {
      text: "Gyanesh",
      className: "text-white",
    },
  ];
  return (
    <TypewriterEffectSmooth words={words} className="sedgwick-ave-regular" />
  );
}
