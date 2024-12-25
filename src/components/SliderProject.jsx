'use client';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProjectData from '@/lib/data/ProjectData';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import Image from 'next/image';
import Link from 'next/link';

export default function App() {
	const swiperRef = useRef();
	const [thumbsSwiper, setThumbsSwiper] = useState(null);

	return (
		<div className='relative text-white lg:px-16 xl:px-32 xl:w-full xl:h-screen overflow-hidden object-cover'>
			<Swiper
				loop={true}
				spaceBetween={10}
				onBeforeInit={(swiper) => {
					swiperRef.current = swiper;
				}}
				thumbs={{ swiper: thumbsSwiper }}
				modules={[FreeMode, Navigation, Thumbs]}
				className='mySwiper2'>
				{ProjectData.map((data, i) => (
					<SwiperSlide key={i}>
						<Image
							className='brightness-50 w-full '
							src={data.src}
							alt={data.title}
							width={900}
							height={200}
						/>
						<div className='opacity-layer'></div>
						<div className='absolute left-4 top-[10%] sm:top-[20%] text-start'>
							<h2 className='text-base sm:text-2xl md:text-3xl lg:text-4xl font-bold w-[80%] sm:w-[90%]'>{data.title}</h2>
							<div className='text-xs sm:text-lg lg:text-xl font-light font-Poppins w-[80%] leading-relaxed lg:leading-10 mt-1 sm:mt-4'>{data.description}</div>
							<div className='flex gap-2 mt-3 sm:mt-5'>
								{data.demo !== '' && (
									<Link
										href={data.demo}
										target='_blank'>
										<div className='w-20 h-10 border-2 border-white bg-gray-900 text-xs flex justify-center items-center rounded-full hover:bg-gray-700 cursor-pointer'>Demo</div>
									</Link>
								)}
								{data.code !== '' && (
									<Link
										href={data.code}
										target='_blank'>
										<div className='w-20 h-10 border-2 border-white bg-gray-900 text-xs flex justify-center items-center rounded-full hover:bg-gray-700 cursor-pointer'>Code</div>
									</Link>
								)}
								{data.desain !== '' && (
									<Link
										href={data.desain}
										target='_blank'>
										<div className='w-20 h-10 border-2 border-white bg-gray-900 text-xs flex justify-center items-center rounded-full hover:bg-gray-700 cursor-pointer'>Desain</div>
									</Link>
								)}
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
			<div className='absolute bottom-2 sm:bottom-5 left-0 right-0 flex justify-center items-center gap-4 z-20'>
				<button
					onClick={() => swiperRef.current?.slidePrev()}
					aria-label='Sebelumnya'>
					<BsArrowLeftCircleFill
						size={35}
						className='dark:text-primary dark:border-white dark:border-2 dark:rounded-full dark:bg-white'
					/>
				</button>
				<button
					onClick={() => swiperRef.current?.slideNext()}
					aria-label='Setelahnya'>
					<BsArrowRightCircleFill
						size={35}
						className='dark:text-primary dark:border-white dark:border-2 dark:rounded-full dark:bg-white'
					/>
				</button>
			</div>
			<div className='absolute w-32 sm:w-48 md:w-64 xl:w-96 bottom-2 sm:bottom-5 right-2 sm:right-5 lg:right-20 xl:right-36'>
				<Swiper
					onSwiper={setThumbsSwiper}
					loop={true}
					spaceBetween={5}
					slidesPerView={2}
					freeMode={true}
					watchSlidesProgress={true}
					modules={[FreeMode, Navigation, Thumbs]}
					className='mySwiper'>
					{ProjectData.map((data, i) => (
						<SwiperSlide key={i}>
							<Image
								className='rounded-lg object-cover overflow-hidden'
								src={data.imgH}
								alt={data.title}
								width={200}
								height={200}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
}
