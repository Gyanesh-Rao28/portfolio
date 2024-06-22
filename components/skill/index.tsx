"use client";

import SectionTitle from "../sectionTitle";
import { skillsData } from "@/utils/data/skill";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";
import { HoverEffect } from "../ui/card-hover-effect";


const Skill = () => {
  return (
    <>
      <div className="w-full relative flex flex-col">
        <div className="max-w-5xl mx-auto px-8">
          <HoverEffect items={projects} />
        </div>
      </div>
    </>
  );
};

export default Skill;

const projects = [
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
];


//  <Image
//    src={skillsImage(skill)?.src}
//    alt={skill}
//    width={40}
//    height={40}
//    className="h-full w-auto rounded-lg"
//  />;
{/* <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-1/2 transform -translate-x-1/2 filter blur-3xl opacity-20"></div>; */}