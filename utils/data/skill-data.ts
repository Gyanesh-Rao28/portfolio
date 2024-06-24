import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiShadcnui } from "react-icons/si";

import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMysql } from "react-icons/si";
import { SiPrisma } from "react-icons/si"
import { SiMongodb } from "react-icons/si";
import { FaDocker } from "react-icons/fa";



export const skillData = {
    "sections": [
        {
            "title": "Frontend Development",
            "items": [
                {"skill": "HTML", "icon": React.createElement(FaHtml5)},
                { "skill": "CSS", "icon": React.createElement(FaCss3) },
                { "skill": "React", "icon": React.createElement(FaReact)},
                { "skill": "JavaScript", "icon": React.createElement(IoLogoJavascript)},
                { "skill": "TypeScript", "icon": React.createElement(SiTypescript) },
                { "skill": "Tailwind", "icon": React.createElement(RiTailwindCssFill) },
                { "skill": "Shadcn", "icon": React.createElement(SiShadcnui) }
            ]
        },
        {
            "title": "Backend Development",
            "items": [
                { "skill": "Nodejs", "icon": React.createElement(FaNodeJs) },
                { "skill": "Express", "icon": React.createElement(SiExpress) },
                { "skill": "Postgresql", "icon": React.createElement(BiLogoPostgresql) },
                { "skill": "Mysql", "icon": React.createElement(SiMysql) },
                { "skill": "Prisma", "icon": React.createElement(SiPrisma) },
                { "skill": "Mongodb", "icon": React.createElement(SiMongodb) },
                { "skill": "Docker", "icon": React.createElement(FaDocker) }
            ]
        }
    ]
}
