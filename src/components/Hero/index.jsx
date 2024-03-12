'use client';
import Link from 'next/link';
import React from 'react';
import Gesit from '../Gesit/Gesit';
import WidiAtmoko from '../WidiAtmoko/WidiAtmoko';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import Me from '@/assets/Me.webp';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/Variants';

const Hero = (props) => {
  return (
    <section id="hero" className="w-full py-10 lg:py-20 xl:px-32  lg:flex lg:justify-between lg:items-center relative overflow-hidden ">
      <motion.div variants={fadeIn('right', 0.5)} initial="hidden" animate="show" className="text-white h-[190px] lg:h-[380px] top-[48px] px-4 sm:px-16 lg:w-8/12 dark:text-black">
        <h3 className="font-Poppins font-medium">Hallo Semua, Saya</h3>
        <h2 className="font-Poppins text-[32px] font-bold">
          <Typewriter
            options={{
              strings: ['Gesit Widi Atmoko', 'Front-End Developer', 'Analyst Data'],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
        <p className="font-Poppins text-justify text-xs sm:text-sm lg:text-base lg:text-start mt-2 leading-5 ">
          Memiliki dedikasi tinggi dalam menjadi seorang Front-End Developer. Dengan keahlian dalam desain dan analisis data, saya berusaha untuk memberikan solusi kreatif dan efektif dalam setiap proyek yang saya kerjakan.
        </p>
        <div className=" bg-primary mt-6 border-2 text-base font-bold rounded-full text-center w-40 py-3 px-5 cursor-pointer dark:text-white">
          <Link href="/#contact">Hubungi Saya</Link>
        </div>
      </motion.div>
      <div className="mt-24 lg:mt-0 sm:text-sm">
        <div className="text-white flex justify-end w-full  lg:hidden pointer-events-none">
          <Gesit dark={props.dark} />
        </div>

        <div className="flex flex-col items-center">
          <Image className="w-56 sm:w-72 lg:mr-16 " alt="me" src={Me} priority quality={100} width={100} height={100} />
        </div>
        <div className="text-white text-5xl sm:text-6xl md:text-7xl font-bold font-Poppins lg:hidden pointer-events-none">
          <WidiAtmoko dark={props.dark} />
        </div>
      </div>
      <h1 className="absolute top-0 right-0 text-white text-8xl font-bold font-Poppins hidden lg:block pointer-events-none">
        <Gesit dark={props.dark} />
      </h1>
      <div className="absolute  bottom-5 left-0 text-white text-8xl font-bold font-Poppins hidden lg:block pointer-events-none">
        <WidiAtmoko dark={props.dark} />
      </div>
    </section>
  );
};

export default Hero;
