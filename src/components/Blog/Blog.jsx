'use client';
import React from 'react';
import CardBlog from '../CardBlog';
import Link from 'next/link';
import BlogData from '@/lib/data/BlogData';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/Variants';

const fadeInBlog = {
  initiaal: { opacity: 0, y: 75 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: 0.25,
    },
  },
};

const Blog = () => {
  return (
    <section id="blog" className="py-10 lg:py-20 px-4 bg-darkprimary dark:bg-slate-600">
      <div className="flex flex-col text-center justify-center items-center mx-auto text-white relative">
        <h2 className="text-[32px] font-bold">Blog Artikel</h2>
        <ul className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto justify-center items-center mt-5 gap-5">
          {BlogData.map((data, i) => (
            <motion.li key={i} variants={fadeInBlog} initial="initiaal" whileInView="animate" viewport={{ once: true }}>
              <CardBlog gambar={data.src} judul={data.title} deskripsi={data.description} href={data.href} />
            </motion.li>
          ))}
        </ul>
        <motion.div variants={fadeIn('up', 0.1)} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <Link href="https://www.geswatech.com/" target="_blank" className="mt-7 bg-primary py-3 px-5 border-2 flex justify-center items-center rounded-full cursor-pointer">
            Blog Artikel Lainnya
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
