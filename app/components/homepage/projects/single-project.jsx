'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaCode, FaPlay } from 'react-icons/fa';

// Helper function to safely get URL
const getSafeUrl = (url) => {
  if (!url) return null;
  try {
    // Handle empty strings
    if (typeof url === 'string' && url.trim() === '') return null;
    
    // Handle string URLs
    if (typeof url === 'string') {
      // If it's a relative URL, return as is
      if (url.startsWith('/') || url.startsWith('#') || url.startsWith('.')) {
        return url;
      }
      // Try to create a URL object to validate
      try {
        new URL(url);
        return url;
      } catch (e) {
        return null;
      }
    }
    // If it's a URL object, return it
    if (typeof url === 'object' && url !== null) {
      return url;
    }
    return null;
  } catch (e) {
    return null;
  }
};

// Button component to handle both link and disabled states
const ProjectButton = ({ type, url }) => {
  const safeUrl = getSafeUrl(url);
  const isCode = type === 'code';
  const icon = isCode ? <FaCode className="text-lg" /> : <FaPlay className="text-lg" />;
  const title = isCode ? 'View Code' : 'Live Demo';
  
  if (safeUrl) {
    return (
      <Link 
        href={safeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`relative flex justify-center items-center w-10 h-10 rounded-full border-2 border-[#EFF3F4] text-[#EFF3F4] transition-all duration-300 hover:bg-[#231d4b] hover:text-violet-600 hover:border-[#0F0C41] hover:scale-110 group/${type}`}
      >
        {icon}
        <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#0f0b24] text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-[#1a1443]">
          {title}
        </span>
      </Link>
    );
  }
  
  return (
    <button 
      disabled
      className="relative flex justify-center items-center w-10 h-10 rounded-full border-2 border-gray-600 text-gray-600 cursor-not-allowed"
      title={`${title} not available`}
    >
      {icon}
    </button>
  );
};

const SingleProject = ({ project = {} }) => {
  const { name = '', description = '', tools = [], code, demo, image } = project;

  return (
    <div className='group w-full h-fit flex flex-col items-center justify-center relative cursor-text overflow-hidden px-3 md:px-8 py-[1.4rem] bg-[linear-gradient(90deg,#281e57_0%,#201435]_100%)] shadow-2xl rounded-lg border border-[#1a1443]'>
      {/* Background SVG */}
      <div className="absolute left-0 top-0 flex justify-center opacity-40">
        <svg width="1170" height="403" viewBox="0 0 1170 403" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* SVG paths */}
          <path fillRule="evenodd" clipRule="evenodd" d="M1170 57.3509H0V56.5132H1170V57.3509Z" fill="white" fillOpacity="0.3" />
          <path fillRule="evenodd" clipRule="evenodd" d="M410.388 402.472L410.388 0.933594L411.226 0.933594L411.226 402.472L410.388 402.472Z" fill="white" fillOpacity="0.3" />
          <path fillRule="evenodd" clipRule="evenodd" d="M841.791 402.472L841.791 0.933594L842.628 0.933594L842.628 402.472L841.791 402.472Z" fill="white" fillOpacity="0.3" />
          <path fillRule="evenodd" clipRule="evenodd" d="M1014.35 402.472L1014.35 0.933594L1015.19 0.933594L1015.19 402.472L1014.35 402.472Z" fill="white" fillOpacity="0.3" />
          <path fillRule="evenodd" clipRule="evenodd" d="M928.071 402.472L928.071 0.933594L928.909 0.933594L928.909 402.472L928.071 402.472Z" fill="white" fillOpacity="0.3" />
          <path fillRule="evenodd" clipRule="evenodd" d="M1100.63 402.472L1100.63 0.933594L1101.47 0.933594L1101.47 402.472L1100.63 402.472Z" fill="white" fillOpacity="0.3" />
          <path fillRule="evenodd" clipRule="evenodd" d="M1170 143.631H0V142.793H1170V143.631Z" fill="white" fillOpacity="0.3" />
          <path fillRule="evenodd" clipRule="evenodd" d="M324.108 402.472L324.108 0.933594L324.946 0.933594L324.946 402.472L324.108 402.472Z" fill="white" fillOpacity="0.3" />
          <path fillRule="evenodd" clipRule="evenodd" d="M755.51 402.472L755.51 0.933594L756.348 0.933594L756.348 402.472L755.51 402.472Z" fill="white" fillOpacity="0.3" />
          <path fillRule="evenodd" clipRule="evenodd" d="M1170 229.911H0V229.074H1170V229.911Z" fill="white" fillOpacity="0.3" />
          <path fillRule="evenodd" clipRule="evenodd" d="M237.827 402.472L237.827 0.933594L238.665 0.933594L238.665 402.472L237.827 402.472Z" fill="white" fillOpacity="0.3" />
          <path fillRule="evenodd" clipRule="evenodd" d="M669.23 402.472L669.23 0.933594L670.067 0.933594L670.067 402.472L669.23 402.472Z" fill="white" fillOpacity="0.3" />
          <path fillRule="evenodd" clipRule="evenodd" d="M1170 316.192H0V315.354H1170V316.192Z" fill="white" fillOpacity="0.3" />
          <path fillRule="evenodd" clipRule="evenodd" d="M151.547 402.472L151.547 0.933594L152.385 0.933594L152.385 402.472L151.547 402.472Z" fill="white" fillOpacity="0.3" />
          <path fillRule="evenodd" clipRule="evenodd" d="M582.949 402.472L582.949 0.933594L583.787 0.933594L583.787 402.472L582.949 402.472Z" fill="white" fillOpacity="0.3" />
          <path fillRule="evenodd" clipRule="evenodd" d="M1170 402.472H0V401.635H1170V402.472Z" fill="white" fillOpacity="0.3" />
          <path fillRule="evenodd" clipRule="evenodd" d="M65.2666 402.472L65.2666 0.933594L66.1042 0.933594L66.1042 402.472L65.2666 402.472Z" fill="white" fillOpacity="0.3" />
          <path fillRule="evenodd" clipRule="evenodd" d="M496.669 402.472L496.669 0.933594L497.507 0.933594L497.507 402.472L496.669 402.472Z" fill="white" fillOpacity="0.3" />
          <rect x="152.382" y="57.3506" width="85.4536" height="85.4429" fill="white" fillOpacity="0.15" />
          <rect x="238.665" y="143.631" width="85.575" height="84.9928" fill="white" fillOpacity="0.1" />
          <rect x="842.615" y="57.3506" width="85.4597" height="85.4453" fill="white" fillOpacity="0.15" />
        </svg>
      </div>

      <div className='flex flex-col items-center justify-between w-full h-full z-10'>
        <h2 className='text-[#EFF3F4] not-italic font-semibold text-[1.525rem] leading-[110%] text-center capitalize mb-4'>
          {name}
        </h2>
        
        <div className="p-6">
          <Image
            src={image?.src || '/png/placeholder.png'}
            alt={name}
            width={1080}
            height={720}
            className="w-80 h-64 transition-opacity duration-[0.7s] delay-[0.3s] rounded-lg group-hover:opacity-0 object-cover"
          />
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-center gap-6 w-full mt-4">
          <ProjectButton type="code" url={code} />
          <ProjectButton type="demo" url={demo} />
        </div>
      </div>

      {/* Description */}
      <p className="absolute w-[90%] md:w-[85%] md:min-h-[150px] -translate-x-full transition-transform duration-500 p-6 leading-[110%] rounded-r-lg left-0 top-0 bg-[#0f0b24] text-[#EFF3F4] translate-y-[25%] md:translate-y-[50%] group-hover:translate-x-0 text-xs md:text-sm z-20">
        {description}
      </p>

      {/* Tools */}
      {Array.isArray(tools) && tools.length > 0 && (
        <div className='group-hover:translate-x-0 absolute w-[140px] text-[0.8rem] flex justify-center gap-2 flex-col translate-x-full transition-transform duration-500 p-3 rounded-l-lg right-0 bottom-4 bg-[#0f0b24] text-[#EFF3F4] z-20'>
          <span className="text-[#4F46E5] font-semibold text-center">Tech Stack</span>
          <div className="flex flex-wrap justify-center gap-1">
            {tools.map((tool, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-[#4F46E5] bg-opacity-20 text-[#EFF3F4] text-xs rounded-full whitespace-nowrap"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProject;