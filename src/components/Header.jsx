import Image from 'next/image';
import gwa from '@/assets/Logos/gwa.svg';
import { useState } from 'react';
import { Link } from 'react-scroll';
import ButtonWhiteMode from './ButtonWhiteMode';
import ButtonHumberger from './ButtonHumberger';

const navItems = [
  {
    nav: 'Home',
    href: 'hero',
  },
  {
    nav: 'About',
    href: 'about',
  },
  {
    nav: 'Projects',
    href: 'project',
  },
  {
    nav: 'Blog',
    href: 'blog',
  },
];

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? 'auto' : 'hidden';
  };

  return (
    <header className="sticky top-0  z-50">
      <div className="p-4 sm:px-16 xl:px-32 flex justify-between w-full items-center content-center bg-transparent backdrop-blur-sm relative dark:bg-white">
        <div className="flex justify-center items-center gap-2 ">
          <div className="flex justify-center gap-2 cursor-pointer">
            <Image className="" src={gwa} alt="logo" style={{ filter: props.dark ? 'invert(100%)' : 'none' }} priority />
          </div>
          <div className="text-sm font-bold text-white font-Poppins text-start hidden sm:block dark:text-primary">
            Gesit <br />
            Widi Atmoko
          </div>
        </div>
        <nav className="hidden md:flex">
          {navItems.map((item, index) => (
            <Link
              to={item.href}
              href={item.href}
              spy={true}
              smooth={true}
              offset={-35}
              duration={500}
              key={index}
              className={`text-white font-Poppins font-medium text-sm py-2 px-5 rounded-full hover:bg-secondary dark:text-black cursor-pointer dark:hover:text-white`}>
              {item.nav}
            </Link>
          ))}
        </nav>
        <div className="flex gap-2 ">
          <div className="hidden w-20 h-10 border-2 text-white border-white bg-gray-900 text-xs md:flex justify-center items-center rounded-full hover:bg-gray-700 cursor-pointer dark:text-primary dark:bg-transparent dark:border-black dark:font-bold">
            <Link to="contact" spy={true} smooth={true} offset={-50} duration={500}>
              Contact
            </Link>
          </div>
          <div className="flex justify-center items-center mx-auto">
            <ButtonWhiteMode toggle={props.darkMode} />
          </div>
          <div className="md:hidden flex justify-start items-start mx-auto">
            <ButtonHumberger toggle={toggle} isOpen={isOpen} />
          </div>
        </div>

        <div className={`fixed w-screen h-screen bg-white top-[73px] right-0  ${!isOpen ? 'hidden' : 'block'}`}>
          {navItems.map((item, index) => (
            <div className={`flex flex-wrap p-5`} key={index}>
              <Link to={item.href} spy={true} smooth={true} offset={-150} duration={500} className="text-black font-Poppins font-medium text-sm hover:text-primary cursor-pointer" onClick={toggle}>
                {item.nav}
              </Link>
            </div>
          ))}
          <div className="flex flex-wrap justify-center items-center gap-4 text-white">
            <button className="bg-primary mt-7 rounded-full py-3 px-5 border-2">
              <Link href="https://wa.me/+6289643979805" target="_blank">
                Hubungi Saya
              </Link>
            </button>
            <button className="bg-primary mt-7 rounded-full py-3 px-5 border-2">
              <Link href="/#">Kirim Pesan</Link>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
