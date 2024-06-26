import { cn } from "@/utils/cn";
import { AnimatedTooltip } from "./animated-tooltip";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  imgSrc,
  gitHubLink,
  tools = [],
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  imgSrc?: any;
  gitHubLink?: string;
  tools?: {
    id: number;
    name: string;
    toolIcon: string;
  }[];
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 bg-[#0d1224] border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl">
        <Image src={imgSrc} alt="images" className="object-cover" />
      </div>
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <a href={gitHubLink}>
          <FaGithub className="h-6 w-6 transition-transform duration-300 hover:scale-110 hover:text-emerald-400" />
        </a>
        <div className="font-sans font-bold text-white  mb-2 mt-2 flex w-full">
          {title}
        </div>
        <div className="font-sans font-normal text-white text-xs ">
          {description}
        </div>
      </div>
      <div className="flex flex-row items-center justify-start w-full">
        <AnimatedTooltip items={tools} />
      </div>
    </div>
  );
};