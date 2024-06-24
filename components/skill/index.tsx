"use client";

import Image from "next/image";
import SectionTitle from "../sectionTitle";
import { skillData } from "@/utils/data/skill-data";
const Skill = () => {
  return (
    <>
      <section
        id="skills"
        className="relative p-4 min-h-screen box-border flex flex-col  w-full"
      >
        <SectionTitle title="Skills" />
        <div className="flex flex-wrap items-center justify-center w-full my-20">
          {skillData.sections.map((section, index) => (
            <div
              className="p-6 bg-black rounded-2xl border border-gray-300 text-center m-4 w-full sm:w-1/2 lg:w-1/3"
              key={index}
            >
              <h2 className="text-gray-500 font-semibold text-xl mb-8">
                {section.title}
              </h2>
              <div className="flex flex-wrap justify-around">
                {section.items.map((item, idx) => (
                  <article
                    className="flex w-40 justify-around gap-2.5 mb-6"
                    key={idx}
                  >
                    <div data-aos="zoom-in">
                      <h3>{item.skill}</h3>
                      <div
                        className="mx-auto h-4 w-4 mt-4 text-emerald-400"
                      >
                        {item.icon}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Skill;