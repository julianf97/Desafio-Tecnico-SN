import React from 'react';
import ImgContainer from '../../components/ImgContainer/ImgContainer';
import FormLogin from '../../components/FormLogin/FormLogin';


export default function Login() {
  return (
    <main className='flex w-full h-screen overflow-hidden'>
      <FormLogin />
      <ImgContainer />
    </main>

  )
}
