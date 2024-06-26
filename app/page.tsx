'use client'
import HeroSection from "@/components/Home/HeroSection";
import AboutMe from "@/components/aboutMe";
import Education from "@/components/education";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Skill from "@/components/skill";
export default function Home() {

  return (
    <>
      <HeroSection />
      <AboutMe />
      <Experience />
      <Skill />
      <Projects />
      <Education/>
    </> 
  );
}

