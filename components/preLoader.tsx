"use client";
import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";

interface styleObj{
    opacity: number
}

interface PreLoaderProps {
  load: boolean;
  style: styleObj;
}
const PreLoader = ({ load, style }: PreLoaderProps) => {
  return (
    <>
      <div style={style} className={`preloader ${load ? "visible" : "hidden"} h-screen  `}>
        <div className="absolute z-10 h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
          <h1 className="md:text-7xl text-4xl lg:text-9xl font-bold text-center text-white relative z-20">
            Gyanesh
          </h1>
          <div className="w-[40rem] h-40 relative">

            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={1200}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />

            <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
          </div>
        </div>
        ;
      </div>
    </>
  );
};

export default PreLoader;

