import React from 'react';
import LabelAndInput from '../LabelAndInput/LabelAndInput';
import InputRepeatPasswordPasswordErrors from '../InputRepeatPasswordErrors/InputRepeatPasswordErrors';

export default function InputRepeatPasswordContainer({ register, errors }) {
  return (
    <div className='max-sm:ml-0 flex flex-col max-sm:mt-3'>
      <LabelAndInput register={register} errors={errors} />
      <InputRepeatPasswordPasswordErrors errors={errors}/>
    </div>
  );
}
