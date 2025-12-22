// @flow strict
import { certificationsData } from "@/utils/data/certifications";
import Image from "next/image";
import { BsAward } from "react-icons/bs";
import { HiExternalLink } from "react-icons/hi";
import lottieFile from '../../../assets/lottie/code.json'; // Using 'code.json' as a placeholder or suitable lottie
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";
import Link from "next/link";

function Certifications() {
  return (
    <div id="certifications" className="relative z-10 border-t my-12 lg:my-24 border-[#25213b] scroll-mt-20 lg:scroll-mt-24">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Certifications
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="w-full">
          <div className="flex flex-col gap-6">
            {
              certificationsData.map(certification => (
                <GlowCard key={certification.id} identifier={`certification-${certification.id}`}>
                    <div className="p-3 relative text-white">
                      <Image
                        src="/blur-23.svg"
                        alt="Hero"
                        width={1080}
                        height={200}
                        className="absolute bottom-0 opacity-80"
                      />
                      <div className="flex justify-center">
                        <p className="text-xs sm:text-sm text-[#16f2b3]">
                          {certification.date}
                        </p>
                      </div>
                      <div className="flex items-center gap-x-8 px-3 py-5">
                        <div className="text-violet-500  transition-all duration-300 hover:scale-125">
                          <BsAward size={36} />
                        </div>
                        <div className="flex-1">
                          <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                            {certification.title}
                          </p>
                          <p className="text-sm sm:text-base mb-2">{certification.company}</p>
                          <ul className="list-disc pl-4 text-sm text-[#d3d8e8] mb-4">
                            {certification.description.map((desc, i) => (
                              <li key={i}>{desc}</li>
                            ))}
                          </ul>
                          {certification.link && (
                            <Link href={certification.link} target="_blank" className="flex items-center gap-2 text-[#16f2b3] hover:underline hover:text-[#16f2b3] transition-colors">
                              <span>View Certificate</span>
                              <HiExternalLink />
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </GlowCard>
                ))
              }
            </div>
          </div>
        </div>
    </div>
  );
};

export default Certifications;
