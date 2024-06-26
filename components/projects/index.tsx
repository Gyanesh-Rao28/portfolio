"use client";

import SectionTitle from "../sectionTitle";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { ProjectsData } from "@/utils/data/project-data";
const Projects = () => {
  return (
    <>
      <div id="projects">
        <SectionTitle title="Projects" />
        <div className="my-20">
          <BentoGrid className="max-w-full mx-auto">
            {ProjectsData.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                imgSrc={item.imgSrc}
                gitHubLink={item.gitHubLink}
                tools={item.tools}
                className={i === 3 || i === 6 ? "md:col-span-2" : ""}
              />
            ))}
          </BentoGrid>
        </div>
      </div>
    </>
  );
};

export default Projects;