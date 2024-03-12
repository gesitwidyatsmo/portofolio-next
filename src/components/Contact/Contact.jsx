import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/Variants';

const Contact = () => {
  return (
    <section id="contact" className="py-10 px-4 sm:px-16 xl:px-32">
      <div className="flex flex-col text-center justify-center items-center mx-auto text-white relative">
        <h2 className="text-[32px] font-bold dark:text-black">Contact</h2>
        <motion.p
          variants={fadeIn('up', 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-white text-xs sm:text-sm lg:text-base font-medium lg:font-semibold font-Poppins mt-2 leading-relaxed  overflow-hidden dark:text-black">
          Jika Anda tertarik untuk berkolaborasi atau memiliki pertanyaan lebih lanjut, jangan ragu untuk menghubungi saya. Saya senang mendengar dari Anda dan membantu menjawab segala pertanyaan yang Anda miliki.
        </motion.p>
        <div className="flex flex-wrap justify-center items-center gap-4">
          <motion.button variants={fadeIn('right', 0.5)} initial="hidden" whileInView="show" viewport={{ once: true }} className="bg-primary mt-7 rounded-full py-3 px-5 border-2">
            <Link href="#" target="_blank">
              Hubungi Saya
            </Link>
          </motion.button>
          <motion.button variants={fadeIn('left', 0.5)} initial="hidden" whileInView="show" viewport={{ once: true }} className="bg-primary mt-7 rounded-full py-3 px-5 border-2">
            <Link href="#">Kirim Pesan</Link>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
