import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const experiencesData = [
    {
        title: "E-sports Manager",
        location: "SRM University AP",
        description:
            "I managed SRM esports events in various fests, showcasing my skills in team leadership and time management.",
        icon: React.createElement(LuGraduationCap),
        date: "2021-2024",
        algin:"timeline-start"
    },
    {
        title: "Full Stack Developer NTL",
        location: "SRM University AP",
        description:
            "Collaborated in a student-led laboratory environment to foster the development of innovative ideas and engage in interdisciplinary collaboration, enhancing productivity and cross-functional understanding.",
        icon: React.createElement(CgWorkAlt),
        date: "2023 - 2024",
        algin: "timeline-end"
    },
] as const;
