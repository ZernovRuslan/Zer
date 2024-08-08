import Heading from './Heading';

const cardsData = [
  {
    imagePath: '/how-it-works/img-1.svg',
    heading: 'Прочитай задание внимательно',
    description: 'Думаю у тебя не займет это больше двух-трех минут',
  },
  {
    imagePath: '/how-it-works/img-2.svg',
    heading: 'Изучи весь макет заранее',
    description: 'Подумай как это будет работать на разных разрешениях и при скролле',
  },
  {
    imagePath: '/how-it-works/img-3.svg',
    heading: 'Сделай хорошо',
    description: 'Чтобы мы могли тебе доверить подобные задачи в будущем',
  },
  {
    imagePath: '/how-it-works/img-4.svg',
    heading: 'Получи предложение',
    description: 'Ну тут все просто, не я придумал правила, но думаю так и будет)))',
  },
];

export default function HowItWorks() {
  return (
    <section className='max-width-page padding-section-x margin-section-t mx-auto' id='howItWorks'>
      <Heading text='Как это работает' />

      <div className='max500px:grid-cols-1 mt-[3rem] grid grid-cols-[repeat(auto-fit,minmax(17rem,1fr))] gap-7 maxMd:mt-[2rem] maxSm:mt-[1.5rem]'>
        {cardsData.map(card => (
          <div key={card.heading} className='cursor-pointer duration-200 hover:-translate-y-0.5'>
            <img src={card.imagePath} alt={`Img ${card.heading}`} />
            <h1 className='mt-3 font-semibold'>{card.heading}</h1>
            <h3 className='mt-1 text-[0.875rem] text-zinc-600'>{card.description}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
