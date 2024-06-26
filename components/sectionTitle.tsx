import React from 'react'

interface SectionTitleProps{
  title : string
}

const SectionTitle = ({title}: SectionTitleProps) => {
  return (
    <div className="flex justify-start my-5 lg:py-8">
      <div className="flex items-center w-full">

        <div className="w-1/6 h-[2px]">
          <div className="w-3/4">
            <div className="h-[2px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
          </div>
        </div>

        <h1 className="flex justify-center text-xl md:text-2xl lg:text-5xl text-emerald-400 w-4/5 md:w-5/6 lg:w-1/4 rubik-400">
          {title}
        </h1>

        <div className="w-4/5 h-[2px]">
          <div className="w-full">
            <div className="h-[2px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTitle