import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { useScreenSize } from '../hooks/useScreenSize';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { screenWidth } = useScreenSize();

  useEffect(() => {
    screenWidth > 768 && setIsMenuOpen(false);
  }, [screenWidth]);

  return (
    <nav className={`${isMenuOpen ? 'fixed bg-white' : 'absolute'} left-0 top-0 z-50 w-full text-white`}>
      {screenWidth > 768 ? (
        <div className='max-width-page padding-section-x mx-auto flex h-[5rem] items-center justify-between gap-16'>
          <NavLogo isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          <NavLinks isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </div>
      ) : (
        <div
          className={`${!isMenuOpen ? '' : 'h-screen'} max-width-page padding-section-x mx-auto flex flex-col gap-4`}
        >
          <div className='flex h-[5rem] w-full items-center justify-between'>
            <NavLogo isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

            <div
              className={`relative h-3 w-[1.375rem] cursor-pointer duration-200 hover:-translate-y-px`}
              onClick={() => setIsMenuOpen(state => !state)}
            >
              <span
                className={`duration-200 ${!isMenuOpen ? 'absolute top-0 h-0.5 w-full bg-white' : 'absolute left-1/2 top-1/2 h-0.5 w-full -translate-x-1/2 -translate-y-1/2 rotate-45 bg-black'}`}
              />
              <span
                className={`duration-200 ${!isMenuOpen ? 'absolute bottom-0 h-0.5 w-full bg-white' : 'absolute left-1/2 top-1/2 h-0.5 w-full -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-black'}`}
              />

              {/* <span className='absolute left-1/2 top-1/2 h-0.5 w-full -translate-x-1/2 -translate-y-1/2 rotate-45 bg-black' />
                  <span className='absolute left-1/2 top-1/2 h-0.5 w-full -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-black' /> */}
            </div>
          </div>
          {isMenuOpen && <NavLinks isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />}
        </div>
      )}
    </nav>
  );
}

const links = [
  { name: 'Как это работает', to: 'howItWorks' },
  { name: '3-й блок', to: 'thirdBlock' },
  { name: 'Вопросы и ответы', to: 'QAndA' },
  { name: 'Форма', to: 'form' },
];
function NavLinks({
  isMenuOpen,
  setIsMenuOpen,
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <ul className='flex gap-8 maxMd:flex-col maxMd:text-zinc-600'>
      {links.map(link => (
        <a
          onClick={() => setIsMenuOpen(false)}
          href={`#${link.to}`}
          key={link.name}
          className={`${isMenuOpen ? 'flex items-center justify-between' : ''} cursor-pointer underline-offset-4 duration-200 hover:underline`}
        >
          <p>{link.name}</p>
          {isMenuOpen && <IoIosArrowForward className='text-2xl duration-200 hover:-translate-y-px' />}
        </a>
      ))}
    </ul>
  );
}

type NavLogoProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: (state: boolean) => void;
};
function NavLogo({ isMenuOpen, setIsMenuOpen }: NavLogoProps) {
  return (
    <a
      href='#home'
      className={`${!isMenuOpen ? 'text-white' : 'text-black'} flex cursor-pointer gap-4`}
      onClick={() => setIsMenuOpen(false)}
    >
      <div className='relative z-[6] h-[1.5rem] w-[1.5rem] rounded-full bg-primary' />
      <div className='relative z-[5] -ml-6 h-[1.5rem] w-[1.5rem] rounded-full bg-zinc-200' />
      <h1 className='text-xl font-medium'>testLab</h1>
    </a>
  );
}
