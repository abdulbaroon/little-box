"use client";
import { notifications } from "@/constant/header.constant";
import { SocialMediaIcons } from "@/components/UI";
import { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";

const TopHeader = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 3000);
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <section className="bg-primary">
      <div className=" w-95p mx-auto flex justify-between items-center ">
        <div className="w-4/12">
        <SocialMediaIcons />
        </div>
        <div className="overflow-hidden max-h-6 font-sans font-bold w-8/12 text-start flex  ">
          <h1 className="mb-0 text-white ps-5  text-start w-full">
            <TextTransition springConfig={presets.slow}>
              {notifications[index % notifications.length]}
            </TextTransition>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default TopHeader;
