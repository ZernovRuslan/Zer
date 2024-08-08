export default function Heading({ text = 'heading' }: { text: string }) {
  return <h1 className='text-center text-[2.5rem] font-semibold maxSm:text-[1.5rem]'>{text}</h1>;
}
