'use client';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill, BsChatLeftFill } from 'react-icons/bs';
import Image from 'next/image';
import ProjectData from '@/data/ProjectData';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

import secondProject from '@/assets/img/second.jpg';

const SliderComponent = () => {
  const swiperRef = useRef();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="text-white relative">
      <Swiper
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}>
        {ProjectData.map((data, i) => (
          <SwiperSlide key={i}>
            <Image className="brightness-50 w-full h-full " src={data.src} alt="" width={900} height={100} />
            <div className="opacity-layer"></div>
            <div className="absolute left-4 top-[10%] text-start">
              <h2 className="text-lg font-bold">{data.title}</h2>
              <div className="text-xs font-light font-Poppins w-[80%] leading-relaxed mt-2">{data.description}</div>
              <div className="w-24 h-10 border-2 border-white bg-gray-900 text-xs flex justify-center items-center rounded-full mt-5 hover:bg-gray-700 cursor-pointer">Jelajahi</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute bottom-0 left-0 right-0 mb-2 flex justify-center items-center gap-4 z-20">
        <button onClick={() => swiperRef.current?.slidePrev()}>
          <BsArrowLeftCircleFill size={35} />
        </button>
        <button onClick={() => swiperRef.current?.slideNext()}>
          <BsArrowRightCircleFill size={35} />
        </button>
      </div>
      <div className="absolute w-40">
        <Swiper onSwiper={setThumbsSwiper} slidesPerView={2}>
          <SwiperSlide>
            {ProjectData.map((data, i) => (
              <SwiperSlide key={i}>
                <Image className="w-[100%] h-96 rounded-xl" src={data.imgH} alt="" width={500} height={500} />
              </SwiperSlide>
            ))}
          </SwiperSlide>
        </Swiper>
        {/* <Image className="w-[15%] rounded-xl" src={secondProject} alt="" />
        <Image className="w-[15%] rounded-xl" src={secondProject} alt="" /> */}
      </div>
      {/* <div className="absolute bottom-2 right-2 flex justify-end gap-2 z-50">
        <Swiper onSwiper={setThumbsSwiper} loop={true} slidesPerView={2} freeMode={true} watchSlidesProgress={true} modules={[FreeMode, Navigation, Thumbs]} className="">
          {ProjectData.map((data, i) => (
            <SwiperSlide key={i}>
              <Image className="w-[15%] rounded-xl" src={data.imgH} alt="" width={500} height={500} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div> */}
    </div>
  );
};

export default SliderComponent;
