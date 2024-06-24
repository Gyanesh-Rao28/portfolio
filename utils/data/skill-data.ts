import React from "react";

// frontend
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiShadcnui } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";


// backend
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMysql } from "react-icons/si";
import { SiPrisma } from "react-icons/si"
import { SiMongodb } from "react-icons/si";
import { FaDocker } from "react-icons/fa";


//platform
import { FaGithub } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { IoLogoVercel } from "react-icons/io5";
import { FaAws } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { TbBrandSocketIo } from "react-icons/tb";
import { FaStripe } from "react-icons/fa";


import { PiFileCppFill } from "react-icons/pi";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";

export const skillData = {
    "sections": [
        {
            "title": "Frontend Development",
            "items": [
                {"skill": "HTML", "icon": React.createElement(FaHtml5)},
                { "skill": "Tailwind", "icon": React.createElement(RiTailwindCssFill) },
                { "skill": "JavaScript", "icon": React.createElement(IoLogoJavascript)},
                { "skill": "TypeScript", "icon": React.createElement(SiTypescript) },
                { "skill": "React", "icon": React.createElement(FaReact)},
                { "skill": "Nextjs", "icon": React.createElement(RiNextjsFill) },
            ]
        },
        {
            "title": "Backend Development",
            "items": [
                { "skill": "Nodejs", "icon": React.createElement(FaNodeJs) },
                { "skill": "Express", "icon": React.createElement(SiExpress) },
                { "skill": "Mongodb", "icon": React.createElement(SiMongodb) },
                { "skill": "Mysql", "icon": React.createElement(SiMysql) },
                { "skill": "Postgresql", "icon": React.createElement(BiLogoPostgresql) },
                { "skill": "Prisma", "icon": React.createElement(SiPrisma) },
                { "skill": "Docker", "icon": React.createElement(FaDocker) }
            ]
        },
        {
            "title": "Lagungaes",
            "items": [
                { "skill": "CPP", "icon": React.createElement(PiFileCppFill) },
                { "skill": "Phthon", "icon": React.createElement(FaPython) },
                { "skill": "JavaScript", "icon": React.createElement(IoLogoJavascript) },
                { "skill": "Java", "icon": React.createElement(FaJava) },
            ]
        },
        {
            "title": "Tool & Platform",
            "items": [
                { "skill": "VsCode", "icon": React.createElement(VscVscode) },
                { "skill": "GitHub", "icon": React.createElement(FaGithub) },
                { "skill": "Git", "icon": React.createElement(FaGitAlt) },
                { "skill": "Vercel", "icon": React.createElement(IoLogoVercel) },
                { "skill": "Firebase", "icon": React.createElement(IoLogoFirebase) },
                { "skill": "AWS", "icon": React.createElement(FaAws) },
                { "skill": "SocketIo", "icon": React.createElement(TbBrandSocketIo) },
                { "skill": "Stripe", "icon": React.createElement(FaStripe) }
            ]
        }
    ]
}
