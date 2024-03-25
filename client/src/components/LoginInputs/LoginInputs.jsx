import React from 'react';
import InputEmailContainer from '../Inputs/EmailInput/InputEmailContainer/InputEmailContainer';
import InputPasswordContainer from '../Inputs/InputPassword/InputEmailContainer/InputEmailContainer';


export default function LoginInputs({ register, errors }) {
  return (
    <div className='w-5/6 h-auto max-sm:ml-0 ml-2 flex-col justify-center max-sm:items-center'>
      <InputEmailContainer  register={register} errors={errors}/>
      <InputPasswordContainer errors={errors} />
    </div>
  );
}
