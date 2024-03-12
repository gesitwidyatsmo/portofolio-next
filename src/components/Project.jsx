'use client';
import Image from 'next/image';
import baseProject from '@/assets/img/base.jpg';
import secondProject from '@/assets/img/second.jpg';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';

const Project = () => {
  return (
    <div>
      <div className="mt-3 relative">
        <Image className="brightness-50" src={baseProject} alt="" />
        <div className="absolute left-4 top-[10%] text-start">
          <h2 className="text-lg font-bold">Landing Page Kopikuy</h2>
          <div className="text-xs font-light font-Poppins w-[80%] leading-relaxed mt-2">
            Projeck Akhir Pelatihan `&apos;`Belajar Membangun Website untuk Memulai Karir sebagai Software Developer`&apos;` dengan menggunakan html, css, js, dan JQuery
          </div>
          <div className="w-24 h-10 border-2 border-white bg-gray-900 text-xs flex justify-center items-center rounded-full mt-5 hover:bg-gray-700 cursor-pointer">Jelajahi</div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 mb-2 flex justify-center items-center gap-4">
        <BsArrowLeftCircleFill size={35} />
        <BsArrowRightCircleFill size={35} />
      </div>
      <div className="absolute bottom-2 right-2 flex justify-end gap-2 ">
        <Image className="w-[15%] rounded-xl" src={secondProject} alt="" />
        <Image className="w-[15%] rounded-xl" src={secondProject} alt="" />
      </div>
    </div>
  );
};

export default Project;
