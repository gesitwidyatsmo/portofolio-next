import Link from 'next/link';
import React from 'react';
import GrupToolImg from '../GrupToolImg';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/Variants';

const About = () => {
  return (
    <section id="about" className="px-4 sm:px-16 xl:px-32 py-10 lg:py-20 bg-secondary lg:flex lg:justify-between lg:items-center dark:bg-slate-500">
      <div className="flex flex-wrap justify-center content-center text-center text-white font-Poppins lg:w-8/12 order-1 lg:order-2 w-full lg:justify-start lg:items-start lg:text-start">
        <h1 className="text-[32px] font-bold dark:text-black">About Me</h1>
        <motion.p variants={fadeIn('up', 0.3)} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-xs sm:text-sm lg:text-base mt-2 leading-5 dark:text-black">
          Lulusan Sistem Informasi Universitas Riau, memiliki keahlian dalam pengembangan front-end menggunakan HTML, CSS, dan JavaScript, serta penguasaan dalam penggunaan framework seperti React dan Vue.js. Selain itu, saya juga memiliki
          pengalaman dalam desain UI/UX dan analisis data menggunakan Python. Saya adalah individu yang tekun dan selalu bersemangat untuk belajar hal-hal baru.
        </motion.p>
        <motion.div variants={fadeIn('up', 0.3)} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-6 text-center">
          <Link
            href="https://drive.google.com/file/d/1qY2vrjaMbqgVfqgj9xfKF31T98FgIbzr/view?usp=drive_link"
            target="_blank"
            className="bg-primary flex justify-center mx-auto border-2 text-base font-bold rounded-full text-center w-40 py-3 px-5">
            Download CV
          </Link>
        </motion.div>
      </div>
      <div className="flex justify-center mt-10 order-2 lg:order-1 lg:mt-0">
        <GrupToolImg />
      </div>
    </section>
  );
};

export default About;
