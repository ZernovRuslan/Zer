import Heading from './Heading';
import QAndAQuestion from './QAndAQuestion';

const data = [
  {
    heading: 'Подтверждено: сознание наших соотечественников не замутнено пропагандой?',
    description:
      'Some dummy description. Some dummy description. Some dummy description. Some dummy description. Some dummy description. Some dummy description. Some dummy description.',
  },
  {
    heading: 'Прототип нового сервиса - это как трубный призыв?',
    description:
      'Some dummy description. Some dummy description. Some dummy description. Some dummy description. Some dummy description. Some dummy description. Some dummy description.',
  },
  {
    heading: 'Частокол на границе продолжает удивлять?',
    description:
      'В частности, дальнейшее развитие различных форм деятельности позволяет выполнить важные задания по разработке дальнейших направлений развития. Предварительные выводы неутешительны: экономическая повестка сегодняшнего дня говорит о возможностях существующих финансовых и административных условий.',
  },
  {
    heading: 'Очевидцы сообщают, что слышали грохот грома градущих изменений?',
    description:
      'Some dummy description. Some dummy description. Some dummy description. Some dummy description. Some dummy description. Some dummy description. Some dummy description.',
  },
  {
    heading: 'И по сей день в центральных регионах звучит перекатами печальный плач оппозиции?',
    description:
      'Some dummy description. Some dummy description. Some dummy description. Some dummy description. Some dummy description. Some dummy description. Some dummy description.',
  },
  {
    heading: 'Нынче никто не может себе позволить инициировать треск разлетающихся скреп?',
    description:
      'Some dummy description. Some dummy description. Some dummy description. Some dummy description. Some dummy description. Some dummy description. Some dummy description.',
  },
  {
    heading: 'Высококачественный прототип будущего проекта обнадёживает?',
    description:
      'Some dummy description. Some dummy description. Some dummy description. Some dummy description. Some dummy description. Some dummy description. Some dummy description.',
  },
];

export default function QAndA() {
  return (
    <section id='QAndA' className='margin-section-t padding-section-x max-width-page mx-auto'>
      <Heading text='Вопросы и ответы' />

      <div className='mt-[3rem] grid gap-10 maxMd:mt-[2rem] maxSm:mt-[1.5rem] maxSm:grid-cols-1'>
        {data.map(el => (
          <QAndAQuestion question={el} key={el.heading} />
        ))}
      </div>
    </section>
  );
}
