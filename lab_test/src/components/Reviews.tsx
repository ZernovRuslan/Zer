import { ReactNode, useState } from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

import Heading from './Heading';
import { useScreenSize } from '../hooks/useScreenSize';

const cardsData = [
  {
    imagePath: '/reviews/img-1.jpg',
    name: 'Константинов Михаил Павлович',
    city: 'Санкт-Петербург',
    text: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы',
  },
  {
    imagePath: '/reviews/img-2.png',
    name: 'Иван Иванов',
    city: 'Санкт-Петербург',
    text: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу.',
  },
  {
    imagePath: '/reviews/img-3.png',
    name: 'Артем Корнилов',
    city: 'Самара',
    text: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения.',
  },

  {
    imagePath: '/reviews/img-2.png',
    name: 'Иван Иванов',
    city: 'Санкт-Петербург',
    text: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу.',
  },
  {
    imagePath: '/reviews/img-1.jpg',
    name: 'Константинов Михаил Павлович',
    city: 'Санкт-Петербург',
    text: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы',
  },
  {
    imagePath: '/reviews/img-3.png',
    name: 'Артем Корнилов',
    city: 'Самара',
    text: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения.',
  },
  {
    imagePath: '/reviews/img-1.jpg',
    name: 'Константинов Михаил Павлович',
    city: 'Санкт-Петербург',
    text: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы',
  },
  {
    imagePath: '/reviews/img-2.png',
    name: 'Иван Иванов',
    city: 'Санкт-Петербург',
    text: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу.',
  },
  {
    imagePath: '/reviews/img-1.jpg',
    name: 'Константинов Михаил Павлович',
    city: 'Санкт-Петербург',
    text: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы',
  },
  {
    imagePath: '/reviews/img-3.png',
    name: 'Артем Корнилов',
    city: 'Самара',
    text: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения.',
  },
  {
    imagePath: '/reviews/img-3.png',
    name: 'Артем Корнилов',
    city: 'Самара',
    text: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения.',
  },
  {
    imagePath: '/reviews/img-2.png',
    name: 'Иван Иванов',
    city: 'Санкт-Петербург',
    text: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу.',
  },
  {
    imagePath: '/reviews/img-3.png',
    name: 'Артем Корнилов',
    city: 'Самара',
    text: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения.',
  },
];

export default function Reviews() {
  const [activeCards, setActiveCards] = useState(0);
  const { screenWidth } = useScreenSize();
  const itemsPerView =
    (() => {
      if (screenWidth > 1100) return 3;
      else if (screenWidth < 768) return 1;
      else return 2;
    })() || 2;

  console.log(cardsData.slice(activeCards * itemsPerView, activeCards * itemsPerView + itemsPerView));
  return (
    <section className='margin-section-t padding-section-x max-width-page mx-auto flex flex-col items-center justify-center gap-8'>
      <Heading text='Отзывы' />

      <div className='flex items-center justify-between gap-6'>
        <Arrow onClick={() => activeCards > 0 && setActiveCards(active => active - 1)}>
          <IoIosArrowBack />
        </Arrow>

        <div
          className={`${itemsPerView === 3 ? 'grid-cols-3' : itemsPerView === 2 ? 'grid-cols-2' : 'grid-cols-1'} grid gap-8`}
        >
          {cardsData
            .slice(activeCards * itemsPerView, activeCards * itemsPerView + itemsPerView)
            .map((card, i) => (
              <div
                key={card.name + i}
                className='grid cursor-pointer grid-rows-[min-content,1fr] gap-6 rounded-lg px-6 pb-10 pt-6 shadow-2xl duration-200 hover:-translate-y-1 hover:shadow-2xl'
              >
                <div className='flex gap-4'>
                  <img
                    src={card.imagePath}
                    alt={`Img card ${i}`}
                    className='h-[2.75rem] w-[2.75rem] rounded-full'
                  />
                  <div className='flex flex-col gap-1'>
                    <h1 className='font-semibold'>{card.name}</h1>
                    <p className='text-[0.875rem] text-zinc-600'>{card.city}</p>
                  </div>
                </div>
                <p>{card.text}</p>
              </div>
            ))}
        </div>

        <Arrow
          onClick={() =>
            activeCards < cardsData.length / itemsPerView - 1 && setActiveCards(active => active + 1)
          }
        >
          <IoIosArrowForward />
        </Arrow>
      </div>
      <ul className='flex gap-6 maxMd:gap-4 maxSm:gap-2'>
        {Array.from({ length: Math.ceil(cardsData.length / itemsPerView) }).map((_, i) => (
          <li
            key={i}
            className={`${i === activeCards ? 'bg-primary' : 'bg-zinc-300'} h-2.5 w-2.5 cursor-pointer rounded-full`}
            onClick={() => setActiveCards(i)}
          ></li>
        ))}
      </ul>
    </section>
  );
}

type ArrotProps = {
  children: ReactNode;
  onClick: () => void;
};
function Arrow({ children, onClick }: ArrotProps) {
  return (
    <span
      className='max450px:hidden cursor-pointer text-5xl text-zinc-400 duration-200 hover:-translate-y-0.5 hover:text-primary'
      onClick={onClick}
    >
      {children}
    </span>
  );
}
