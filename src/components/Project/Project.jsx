import React from 'react';
import SliderProject from '@/components/SliderProject';

const Project = () => {
  return (
    <div>
      <section id="project" className="py-24 dark:bg-[#e6e6e6]">
        <div className="flex flex-col text-center justify-center text-white relative">
          <h2 className="text-[32px] mb-3 font-bold dark:text-black">Project Terbaru</h2>
          <SliderProject />
        </div>
      </section>
    </div>
  );
};

export default Project;
