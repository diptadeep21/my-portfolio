// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";

function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative scroll-mt-20 lg:scroll-mt-24">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="order-2 lg:order-1">
          {/* Slightly smaller font for the heading */}
          <p
            className="font-bold mb-5 text-[#16f2b3] text-xl lg:text-2xl uppercase tracking-wider"
            style={{ fontFamily: "var(--font-poppins), sans-serif", letterSpacing: "0.1em" }}
          >
            Who I am?
          </p>

          {/* More modern and elegant font for the description */}
          <p
            className="text-gray-300 text-base lg:text-lg leading-relaxed"
            style={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 300 }}
          >
            {personalData.description}
          </p>
        </div>

        <div className="flex justify-center order-1 lg:order-2">
          <Image
            src={personalData.profile}
            width={280}
            height={280}
            alt="Diptadeep Sarkar"
            className="w-90 rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
