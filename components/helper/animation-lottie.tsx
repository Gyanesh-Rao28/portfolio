"use client";

import Lottie from "lottie-react";
import {LottieAnimationData} from "@/types";


interface AnimationLottie {
  animationPath: LottieAnimationData;
  width: string;
}

const AnimationLottie = ({ animationPath, width }: AnimationLottie) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: width,
    },
  };

  return <Lottie {...defaultOptions} />;
};

export default AnimationLottie;
