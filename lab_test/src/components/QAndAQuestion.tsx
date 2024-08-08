import { useState } from 'react';
import { IoCloseCircleOutline } from 'react-icons/io5';

type QAndAQuestionProps = {
  question: {
    heading: string;
    description: string;
  };
};

export default function QAndAQuestion({ question }: QAndAQuestionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='grid gap-6'>
      <div className='flex cursor-pointer items-center justify-between' onClick={() => setIsOpen(s => !s)}>
        <h1 className='text-[1.125rem] font-semibold'>{question.heading}</h1>
        <span className={`${!isOpen ? 'rotate-45' : ''} text-3xl duration-200 hover:-translate-y-px`}>
          <IoCloseCircleOutline />
        </span>
      </div>
      {isOpen && <p className='text-zinc-600'>{question.description}</p>}
    </div>
  );
}
