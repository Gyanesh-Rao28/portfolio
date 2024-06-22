'use client'
import React from "react";  
import SectionTitle from "../sectionTitle";
import { experiencesData } from "@/utils/data/experience-data";
import { cn } from "@/utils/cn";

const Experience = () => {
  return (
    <>
      <div className="w-full relative">
        <SectionTitle title="Experience" />
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical my-16">
          {experiencesData.map((item, ind) => (
            <li key={ind}>
              <hr />
              <div className="timeline-middle">
                <p className="h-4 w-4 bg-white rounded-lg"></p>
              </div>
              <div className={cn("mb-10", `${item.algin}`)}>
                <time className="font-mono italic">{item.date}</time>
                <div className="text-lg font-black">{item.title}</div>
                {item.description}
              </div>
              <hr />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Experience;