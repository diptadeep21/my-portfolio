'use client';

const SectionHeading = ({ title }) => {
  return (
    <div className="sticky top-10">
      <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl opacity-30"></div>
      <div className="flex items-center justify-start relative">
        <span className="bg-[#1a1443] absolute left-0 w-fit text-white px-5 py-3 text-xl rounded-md">
          {title.toUpperCase()}
        </span>
        <span className="w-full h-[2px] bg-[#1a1443]"></span>
      </div>
    </div>
  );
};

export default SectionHeading;
