import { SubmitHandler, useForm } from 'react-hook-form';
import Heading from './Heading';
import toast from 'react-hot-toast';
import InputUseForm from './InputUseForm';

export default function Form() {
  const { register, handleSubmit, formState } = useForm<SubmitEvent>();
  const { errors } = formState;

  const onSubmit: SubmitHandler<SubmitEvent> = data => {
    console.log(data);
    toast.success(`Success!`);
  };

  return (
    <section id='form' className='padding-section-x margin-section-t max-width-page mx-auto grid gap-8'>
      <Heading text='Отправь Форму' />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className='grid grid-cols-2 gap-8 md:mx-auto md:w-[45rem] max550px:grid-cols-1'
      >
        <div className='relative'>
          <InputUseForm
            inputName='formPhone'
            inputType='text'
            placeHolder='Имя'
            errors={errors}
            registerFunc={register}
            registerOptions={{ required: `Пожалуйста, заполните поле ↓` }}
          />
        </div>

        <div className='relative'>
          <InputUseForm
            inputName='formName'
            inputType='text'
            placeHolder='Имя'
            errors={errors}
            registerFunc={register}
            registerOptions={{ required: 'Пожалуйста, заполните поле ↓' }}
          />
        </div>

        <div className=''>
          <InputUseForm
            inputName='username'
            inputType='checkbox'
            errors={errors}
            registerFunc={register}
            label='Согласен, отказываюсь'
            inputClassName=' scale-150'
          />
        </div>

        <button className='bg-primary py-4 text-[1.25rem] text-white'>Отправить</button>
      </form>
    </section>
  );
}
