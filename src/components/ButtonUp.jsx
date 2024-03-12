import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { BsArrowBarUp } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/Variants';

const ButtonUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const threshold = 100;

      setIsVisible(scrollTop > threshold);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.div variants={fadeIn('up', 4)} initial="hidden" animate="show">
      {isVisible && (
        <Link to="hero" spy={true} smooth={true} offset={-90} duration={500} className="fixed z-[9999] bottom-20 right-4 lg:right-10 h-10 w-10 bg-slate-500 rounded-full cursor-pointer flex justify-center items-center hover:animate-bounce">
          <BsArrowBarUp className="text-white text-2xl" />
        </Link>
      )}
    </motion.div>
  );
};

export default ButtonUp;
