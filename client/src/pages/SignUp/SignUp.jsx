import React from 'react';
import ImgContainer from '../../components/ImgContainer/ImgContainer';
import FormSignUp from '../../components/FormSignUp/FormSignUp';


export default function SignUp() {
  return (
    <main className='flex w-full h-screen overflow-hidden'>
      <FormSignUp />
      <ImgContainer />
    </main>

  )
}
