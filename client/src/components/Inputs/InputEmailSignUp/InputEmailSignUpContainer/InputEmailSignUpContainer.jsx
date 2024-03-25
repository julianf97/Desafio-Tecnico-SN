import React from 'react';
import LabelAndInput from '../LabelAndInput/LabelAndInput';
import InputEmailSignUpErrors from "../InputEmailSignUpErrors/InputEmailSignUpErrors"

export default function InputEmailSignUpContainer({ register, errors }) {
  return (
    <div className='max-sm:ml-0 flex flex-col'>
      <LabelAndInput register={register} errors={errors} />
      <InputEmailSignUpErrors errors={errors}/>
    </div>
  );
}
