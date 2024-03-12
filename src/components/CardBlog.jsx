import Image from 'next/image';
import Link from 'next/link';

const CardBlog = ({ gambar, judul, deskripsi, href }) => {
  return (
    <div className="mb-2">
      <div className="relative group cursor-pointer overflow-hidden duration-500 w-64 h-64 bg-gray-800 dark:bg-white text-gray-50 rounded-2xl dark:text-black">
        <div className="">
          <Image className="group-hover:scale-110 w-full h-40 bg-blue-400 duration-500" src={gambar} alt={judul} width={500} height={300} priority />
          <div className="absolute w-full left-0 p-5 -bottom-[135px] duration-500 group-hover:-translate-y-28">
            <div className="absolute -z-10 left-0 w-full h-full opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-gray-800 dark:group-hover:bg-white flex justify-center mx-auto"></div>
            <span className="text-base font-bold">{judul}</span>
            <p className="group-hover:opacity-100 w-56 duration-500 opacity-0 line-clamp-2">{deskripsi}</p>
            <button className="w-32 h-10 bg-zinc-300 rounded-xl text-gray-900 my-5">
              <Link href={href} target="_blank">
                Selengkapnya
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBlog;
