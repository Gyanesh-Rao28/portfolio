"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
export function Logo() {
  const words = [
    {
      text: "SGR.",
      className: "text-white",
    },
  ];
  return <TypewriterEffectSmooth words={words} className="arimo-600" />;
}
