export default function Header() {
  return (
    <header className='relative flex h-screen items-center justify-center bg-cover bg-center text-white [background-image:url(/header-bg.jpg)]'>
      <div className='absolute h-full w-full bg-primary bg-opacity-80' />
      <div className='max-width-page padding-section-x relative z-10 mx-auto text-center'>
        <h1 className='max-w-3xl text-[3.25rem] font-semibold leading-[4rem] maxMd:max-w-xl maxMd:text-[2rem] maxMd:leading-[2.5rem] maxSm:text-[1.5rem] maxSm:leading-[2rem]'>
          Говорят, никогда не поздно сменить профессию
        </h1>

        <h3 className='mt-4 text-[1.125rem]'>Сделай круто тестовое задание и у тебя получится</h3>

        <button className='mt-20 rounded-[0.25rem] bg-white px-[2.5rem] py-[1.25rem] text-[1.25rem] font-semibold text-black duration-200 hover:-translate-y-0.5 maxMd:mt-12 maxSm:mt-8'>
          Проще простого!
        </button>
      </div>
    </header>
  );
}
