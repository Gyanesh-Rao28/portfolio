"use client";
import React from "react";
import profPic from "@/public/professional_pic_bgRem.png";
import Image from "next/image";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const AboutMe = () => {
  const words = `My name is S Gyanesh Rao. I am a professional and enthusiastic programmer in my daily life. I am a quick learner with a self-learning attitude. I love to learn and explore new technologies and am passionate about problem-solving. I love almost all the stacks of web application development and love to make the web more open to the world. My core skill is based on JavaScript and I love to do most of the things using JavaScript. I am available for any kind of job opportunity that suits my skills and interests.`;

  return (
    <div className="relative mt-12 h-1/2 w-full" id="about">
      <div className="">
        <div className="flex justify-center my-5 lg:py-8">
          <div className="flex  items-center">
            <span className="w-24 h-[2px] bg-[#1a1443]"></span>
            <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
              About Me
            </span>
            <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          </div>
        </div>
        <div className="container mx-auto px-4 py-6" id="about">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="md:col-span-1 ">
              <div className="mt-20">
                <h1 className="text-4xl font-bold mb-4">
                  LET ME <span className="text-purple-600"> INTRODUCE </span>{" "}
                  MYSELF
                </h1>
                <TextGenerateEffect words={words} className="text-white text-xs" />
              </div>
            </div>

            <div className="md:col-span-1 overflow-hidden">
              <div className="my-4 md:my-0">
                <Image
                  src={profPic}
                  height={1080}
                  width={1080}
                  className="rounded-full mx-auto md:mx-0 md:float-right relative right-20"
                  alt="avatar"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
