"use client";

import React from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";

const Main = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="2xl:text-[72px] sm:text-[64px] text-[50px] font-extrabold text-white">
          Explore, reserve, or lease an electric car in no time at all!
        </h1>
        <p className="text-[27px] text-white font-light mt-5">
          Experience cost-effective pricing and a trouble-free reservation
          system for your green car rental.
        </p>

        <CustomButton
          title="Explorer Cars"
          containerStyles="bg-white text-black
        rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="xl:flex-[1.5] flex justify-end items-end w-full xl:h-screen">
        <div className="relative xl:w-full w-[90%] xl:h-full h-[590px] z-0">
          <Image
            src="/main-car.webp"
            alt="main"
            fill
            className="object-contain"
          />
        </div>
        <div className="absolute xl:-top-24 xl:-right-1/2 -right-1/4 bg-hero-bg bg-repeat-round -z-10 w-full xl:h-screen h-[590px] overflow-hidden" />
      </div>
    </div>
  );
};

export default Main;
