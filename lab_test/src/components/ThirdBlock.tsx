export default function ThirdBlock() {
  return (
    <section
      id='thirdBlock'
      className='padding-section-x margin-section-t max-width-page mx-auto grid grid-cols-2 gap-8 gap-y-4 maxMd:grid-cols-1'
    >
      <div className='flex flex-col items-center justify-center gap-6 maxMd:gap-3'>
        <h1 className='text-[2rem] font-semibold leading-[2.75rem] maxMd:text-[1.25rem] maxMd:leading-[1.5rem]'>
          Круто, ты дошел до третьего блока
        </h1>

        <p className='text-zinc-600'>
          63% опрошенных пользовались кредитами из-за того, что не могли покрыть непредвиденные расходы свыше
          15 000 ₽.
        </p>

        <p className='text-zinc-600'>
          Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и
          штрафах.
        </p>
      </div>

      <div className='relative flex items-center gap-10 maxMd:row-start-1'>
        <img src='/third-block/img-1.png' alt='' className='absolute left-0 top-0 z-10' />
        <img src='/third-block/img-2.png' alt='' className='w-full' />
      </div>
    </section>
  );
}
