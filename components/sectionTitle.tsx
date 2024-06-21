import React from 'react'

interface SectionTitleProps{
  title : string
}

const SectionTitle = ({title}: SectionTitleProps) => {
  return (
    <div className="flex justify-start my-5 lg:py-8">
      <div className="flex items-center w-full">
        <span className="w-36 h-[2px] bg-emerald-400"></span>
        <h1 className="flex justify-center text-xl md:text-2xl lg:text-5xl text-emerald-400 w-4/5 md:w-5/6 lg:w-1/4 rubik-400">
          {title}
        </h1>
        <span className=" w-full h-[2px] bg-emerald-400"></span>
      </div>
    </div>
  );
};

export default SectionTitle