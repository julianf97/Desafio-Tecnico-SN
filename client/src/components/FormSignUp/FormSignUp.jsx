import React, { useEffect } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import LogoForm from '../LogoForm/LogoForm';
import SignUpInputs from '../SignUpInputs/SignUpInputs';
import SubmmitSignUp from '../SubmmitSignUp/SubmmitSignUp';
import QuestionSignUp from '../QuestionSignUp/QuestionSignUp';
import FormSignUpTitle from '../FormSignUpTitle/FormSignUpTitle';
import useSignUpFetch from '../../hooks/useSignUpFetch';
import { useContext } from 'react';
import { UserContext } from '../../context/userContext';
import showAlert from './modalSignUp';
import { useNavigate } from 'react-router-dom';

export default function FormSignUp() {
  const { register, handleSubmit, formState: { errors }, setError, reset, control } = useForm();
  const { signUp, error, isSignedUp } = useSignUpFetch();
  const { setUserLogged } = useContext(UserContext);
  const navigate = useNavigate();

  const password = useWatch({ control, name: 'password', defaultValue: '' });
  const repeatPassword = useWatch({ control, name: 'repeatPassword', defaultValue: '' });

  const onSubmit = (data, event) => {
    event.preventDefault(); 

    if (password !== repeatPassword) {
      setError("repeatPassword", {
        type: "manual",
        message: "Las contraseñas no coinciden"
      });
      return;
    }

    signUp(data.email, data.password);

    reset();
  };

  useEffect(() => {
    if (isSignedUp) {
      showAlert();
      navigate("/"); 
    }
  }, [isSignedUp, setUserLogged, navigate]);

  useEffect(() => {
    if (error) {
      alert('Error al registrar usuario');
    }
  }, [error]);

  return (
    <div className='formContainer w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 h-full flex justify-center items-center'>
      <form className='w-11/12 max-w-2xl rounded-lg bg-white h-auto mt-20 flex flex-col items-center max:sm:pt-8 max-sm:pb-8 pt-12 pb-12 shadow-md' onSubmit={handleSubmit(onSubmit)}>
        <LogoForm />
        <FormSignUpTitle />
        <SignUpInputs register={register} errors={errors}/>
        <SubmmitSignUp />
        <QuestionSignUp />
      </form> 
    </div>
  );
}
