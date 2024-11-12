"use client";
import { menuData } from "@/constant/header.constant";
import { motion,AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const BottomHeader = () => {
  const [hoverText, setHoverText] = useState<string>("");

  return (
    <section className="bg-secondary">
      <div className="flex justify-center flex-wrap gap-1 relative">
        {menuData?.map((el, index) => (
          <div
            key={index}
            className="group relative"
            onMouseEnter={() => setHoverText(el.label)}
            onMouseLeave={() => setHoverText("")}
          >
            <Link href={"#"}>
              <div className="text-white font-medium hover:text-roseWood inline-block whitespace-nowrap p-[18px] text-[13px] relative transform  transition-all duration-300">
                {el.label}
                <div className="absolute group-hover:bg-roseWood bottom-[-1px] left-[18px] w-[calc(100%-36px)] bg-current h-[2px] z-[9999] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 will-change-transform" />
              </div>
            </Link>

            {el?.children && el.type === "small" && (
              <div
                className={`absolute bg-primary border border-[#808080] top-[55px] ps-5 py-6 pe-8 w-44 opacity-0 z-10 transform  transition-all duration-500  ${
                  el.label === hoverText ? "opacity-100" : ""
                }`}
              >
                {el?.children?.map((link, subIndex) => (
                  <div key={subIndex} className="">
                    <Link href={"#"}>
                      <span className="text-white font-medium hover:text-roseWood text-[13px]">
                        {link?.label}
                      </span>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
        <AnimatePresence>
        {menuData
          ?.filter((el) => el.type === "large" && el.label == hoverText)
          ?.map((data, index) => (
            <motion.div
              initial={{opacity:0}}
              animate={{opacity:1}}
              exit={{opacity:0}}
              transition={{duration:0.5,delay:0.2}}
              onMouseEnter={() => setHoverText(data.label)}
              onMouseLeave={() => setHoverText("")}
              key={index}
              className=" absolute  top-[55px] bg-primary w-full border border-[#808080] z-40 "
            >
              <div className="w-11/12 mx-auto flex justify-center text-white text-[13px] ">
                {data.children?.map((el, index) => (
                  <div key={index} className="w-1/4">
                    {el.label&&<div className="px-4 text-white opacity-70 mb-4">{el.label}</div>}
                    {el?.labels?.map((data, index) => {
                      return (
                        <div key={index}>
                          {data?.type ? (
                            <div className="px-4 flex flex-col justify-center items-center group ">
                              <img
                                className="rounded-sm"
                                src={data.src}
                                alt="wsd"
                              />
                              <div className="py-1 pb-2 group-hover:text-roseWood transform  transition-all duration-300 cursor-pointer">{data.label}</div>
                            </div>
                          ) : (
                            <div className="py-1 px-4 text-white hover:text-roseWood transform  transition-all duration-300 cursor-pointer">{data.label}</div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default BottomHeader;
