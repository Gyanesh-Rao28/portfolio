import React from "react";
import { SiGithub } from "react-icons/si";

import smartVerify from "@/public/imgs/projects//smartVerify.png";
import petify from "@/public/imgs/projects/petify.png";
import rentalSystem from "@/public/imgs/projects/rentalSystem.png";

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full rounded-xl bg-emerald-400">
    {/* image */}
  </div>
);

export const ProjectsData = [
  {
    title: "Smart Verify",
    description:
      "The web application ensures that the smart contracts are safe, effective and are scaleable.",
    imgSrc: smartVerify,
    gitHubLink: "https://github.com/Gyanesh-Rao28/smartverify",
    tools: [
      {
        id: 1,
        name: "Nextjs",
        toolIcon: "next js",
      },
      {
        id: 2,
        name: "Typscript",
        toolIcon: "typescript",
      },
      {
        id: 3,
        name: "Prisma",
        toolIcon: "prisma",
      },
      {
        id: 4,
        name: "MongoDB",
        toolIcon: "mongodb",
      },
      {
        id: 5,
        name: "Python",
        toolIcon: "python",
      },
    ],
  },
  {
    title: "Petify",
    description:
      "A web application for abandon pets. That provides adopt and donate features.",
    imgSrc: petify,
    gitHubLink: "https://github.com/Gyanesh-Rao28/Petify",
    tools: [
      {
        id: 1,
        name: "Nextjs",
        toolIcon: "next js",
      },
      {
        id: 2,
        name: "Typscript",
        toolIcon: "typescript",
      },
      {
        id: 3,
        name: "Prisma",
        toolIcon: "prisma",
      },
      {
        id: 4,
        name: "MongoDB",
        toolIcon: "mongodb",
      },
    ],
  },
  {
    title: "Car Rental System",
    description:
      "A realtime car rental system. Enpowered with C++ and MySql database. Mickis the rental system model. ",
    imgSrc: rentalSystem,
    gitHubLink: "https://github.com/Gyanesh-Rao28/Dynamic_mode_decomposition",
    tools: [
      {
        id: 1,
        name: "CPP",
        toolIcon: "c++",
      },
      {
        id: 2,
        name: "MySql",
        toolIcon: "mysql",
      },
    ],
  },
  {
    title: "Car Rental System",
    description:
      "A realtime car rental system. Enpowered with C++ and MySql database. Mickis the rental system model. ",
    imgSrc: rentalSystem,
    gitHubLink: "https://github.com/Gyanesh-Rao28/Dynamic_mode_decomposition",
    tools: [
      {
        id: 1,
        name: "CPP",
        toolIcon: "c++",
      },
      {
        id: 2,
        name: "MySql",
        toolIcon: "mysql",
      },
    ],
  },
  {
    title: "Petify",
    description:
      "A web application for abandon pets. That provides adopt and donate features.",
    imgSrc: petify,
    gitHubLink: "https://github.com/Gyanesh-Rao28/Petify",
    tools: [
      {
        id: 1,
        name: "Nextjs",
        toolIcon: "next js",
      },
      {
        id: 2,
        name: "Typscript",
        toolIcon: "typescript",
      },
      {
        id: 3,
        name: "Prisma",
        toolIcon: "prisma",
      },
      {
        id: 4,
        name: "MongoDB",
        toolIcon: "mongodb",
      },
    ],
  },
];



