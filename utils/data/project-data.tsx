import React from "react";
import { SiGithub } from "react-icons/si";

import smartVerify from "@/public/imgs/projects//smartVerify.png";
import petify from "@/public/imgs/projects/petify.png";
import libSystem from "@/public/imgs/projects/rentalSystem.png";
import dmd from "@/public/imgs/projects/dmd.png";
import discord from "@/public/imgs/projects/discordClone.png";

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
    title: "Dynamic Mode Decomposition",
    description:
      "DMD is particularly useful when fundamental patterns are too complex for conventional mathematical methods to fully understand.",
    imgSrc: dmd,
    gitHubLink: "https://github.com/Gyanesh-Rao28/Dynamic_mode_decomposition",
    tools: [
      {
        id: 1,
        name: "Python",
        toolIcon: "python",
      },
      {
        id: 2,
        name: "MATLAB",
        toolIcon: "matlab",
      },
    ],
  },
  {
    title: "Library Mangement System",
    description:
      "Redesigned the Library Management System’s User Interface, engineering an intuitive and user-friendly experience",
    imgSrc: libSystem,
    gitHubLink: "https://github.com/Gyanesh-Rao28/LibraryManagementSystem",
    tools: [
      {
        id: 1,
        name: "JAVA",
        toolIcon: "java",
      },
      {
        id: 2,
        name: "MySql",
        toolIcon: "mysql",
      },
    ],
  },
  {
    title: "Discord Clone",
    description:
      "A web application that mimics Discord's features, such as chatting and conference calls.",
    imgSrc: discord,
    gitHubLink: "https://github.com/Gyanesh-Rao28/Discord_Clone",
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
        name: "MySql",
        toolIcon: "mysql",
      },
      {
        id: 5,
        name: "SocketIO",
        toolIcon: "sockectio",
      },
    ],
  },
];



