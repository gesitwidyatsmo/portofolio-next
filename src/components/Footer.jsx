import Image from 'next/image';
import gwa from '@/assets/Logos/gwa.svg';
import Instagram from '@/assets/Logos/instagram.svg';
import Github from '@/assets/Logos/github.svg';
import Linkedin from '@/assets/Logos/linkedin.svg';
import Link from 'next/link';

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

const Footer = (props) => {
  return (
    <footer className="px-4 sm:px-16 xl:px-32 py-4">
      <div className="flex justify-between items-center ">
        <button onClick={scrollToTop} className="flex justify-center items-center gap-2 cursor-pointer ">
          <div className="flex justify-center gap-2">
            <Image className="" src={gwa} alt="logo" style={{ filter: props.dark ? 'invert(100%)' : 'none' }} />
          </div>
          <div className="text-sm font-medium text-white font-Poppins text-start hidden sm:block dark:text-black">
            Gesit <br />
            Widi Atmoko
          </div>
        </button>
        <div className="flex flex-col gap-2">
          <div className="flex justify-end gap-2 lg:hidden group">
            <Link href="https://www.linkedin.com/in/gesit-widi-atmoko/" target="_blank">
              <Image src={Linkedin} alt="Linkedin" className="cursor-pointer" />
            </Link>
            <Link href="https://github.com/gesitwidyatsmo" target="_blank">
              <Image src={Github} alt="Github" className="cursor-pointer" />
            </Link>
            <Link href="https://www.instagram.com/gesit_widyatsmo/" target="_blank">
              <Image src={Instagram} alt="Instagram" className="cursor-pointer" />
            </Link>
          </div>
          <div className="text-xs sm:text-sm  lg:text-base text-white dark:text-black">©2024 GWA. All Rights Reserved.</div>
        </div>

        <div className="hidden justify-center items-center gap-5 lg:flex group">
          <Link href="https://www.linkedin.com/in/gesit-widi-atmoko/" target="_blank">
            <Image src={Linkedin} alt="Linkedin" className="w-10 cursor-pointer hover:scale-150 duration-300" />
          </Link>
          <Link href="https://github.com/gesitwidyatsmo" target="_blank">
            <Image src={Github} alt="Github" className="w-10 cursor-pointer hover:scale-150 duration-300" />
          </Link>
          <Link href="https://www.instagram.com/gesit_widyatsmo/" target="_blank">
            <Image src={Instagram} alt="Instagram" className="w-10 cursor-pointer hover:scale-150 duration-300" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
