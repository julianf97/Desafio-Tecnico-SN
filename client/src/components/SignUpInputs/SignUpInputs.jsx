import React from 'react';
import InputEmailSignUpContainer from '../Inputs/InputEmailSignUp/InputEmailSignUpContainer/InputEmailSignUpContainer';
import InputPasswordContainer from '../Inputs/InputPassword/InputPasswordContainer/InputPasswordContainer';
import InputRepeatPasswordContainer from '../Inputs/InputRepeatPassword/InputRepeatPasswordContainer/InputRepeatPasswordContainer';

export default function SignUpInputs({ register, errors }) {
  return (
    <div className='w-5/6 h-auto max-sm:ml-0 ml-2 flex justify-center items-center flex-col'>
      <InputEmailSignUpContainer  register={register} errors={errors}/>
      <InputPasswordContainer register={register} errors={errors}/>
      <InputRepeatPasswordContainer register={register} errors={errors}/>
    </div>
  );
}
