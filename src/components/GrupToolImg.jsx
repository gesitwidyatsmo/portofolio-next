import Image from 'next/image';
import htmlImg from '@/assets/Logos/html5-original.svg';
import jsImg from '@/assets/Logos/javascript-plain.svg';
import pyImg from '@/assets/Logos/python-original.svg';
import tailwindImg from '@/assets/Logos/tailwindcss-plain.svg';
import boostratpImg from '@/assets/Logos/bootstrap-original.svg';
import figmaImg from '@/assets/Logos/figma-original.svg';
import reactImg from '@/assets/Logos/React.svg';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/Variants';

const GrupToolImg = () => {
  return (
    <div className="w-56 h-56 relative">
      <motion.div variants={fadeIn('right', 0.5)} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <Image className="absolute w-16 h-16 left-[-0px] top-[38.10px]" src={jsImg} alt="jsImg" />
      </motion.div>
      <motion.div variants={fadeIn('left', 0.5)} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <Image className="absolute w-16 h-16 left-[163.10px] top-[38.10px]" src={pyImg} alt="pyImg" />
      </motion.div>
      <motion.div variants={fadeIn('left', 0.5)} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <Image className="absolute w-16 h-16 left-[161.90px] top-[119.05px]" src={boostratpImg} alt="boostratpImg" />
      </motion.div>
      <motion.div variants={fadeIn('up', 0.5)} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <Image className="absolute w-16 h-16 left-[80.95px] top-0" src={htmlImg} alt="htmlImg" />
      </motion.div>
      <motion.div variants={fadeIn('right', 0.5)} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <Image className="absolute w-16 h-16 left-[-0px] top-[119.05px]" src={tailwindImg} alt="tailwindImg" />
      </motion.div>
      <motion.div variants={fadeIn('left', 0.5)} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <Image className="absolute w-14 h-16 left-[80.95px] top-[164.29px]" src={figmaImg} alt="figmaImg" />
      </motion.div>
      <motion.div variants={fadeIn('up', 0)} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <Image className="absolute w-16 h-16 left-[80.95px] top-[82.14px]" src={reactImg} alt="reactImg" />
      </motion.div>
    </div>
  );
};

export default GrupToolImg;
