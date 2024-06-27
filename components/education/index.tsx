'use client'
import React from 'react'
import AnimationLottie from '../helper/animation-lottie'
import Educationlottie from '@/public/lottie/education.json'
import Studylottie from "@/public/lottie/study.json";
import { EducationData } from '@/utils/data/education-data'
import { BsPersonWorkspace } from 'react-icons/bs'
import SectionTitle from '../sectionTitle'

const Education = () => {
  return (
    <>
      <div
        id="education"
        className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]"
      >
        <SectionTitle title="Education" />

        <div className="py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <div className="flex justify-center items-start">
              <div className="w-3/4 h-3/4">
                <AnimationLottie animationPath={Studylottie} width="90%" />
              </div>
            </div>

            <div className="flex flex-col gap-6">
              {EducationData.map((education, ind) => (

                <div
                  key={ind}
                  className="p-3 relative text-white border border-gray-300 rounded-3xl"
                >
                  <div className="flex justify-center">
                    <p className="text-xs sm:text-sm text-[#16f2b3]">
                      {education.duration}
                    </p>
                  </div>
                  <div className="flex items-center gap-x-8 px-3 py-5">
                    <div className="text-violet-500  transition-all duration-300 hover:scale-125">
                      <BsPersonWorkspace size={36} />
                    </div>
                    <div>
                      <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                        {education.title}
                      </p>
                      <p className="text-sm sm:text-base">
                        {education.institution}
                      </p>
                    </div>
                  </div>
                </div>

              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Education    