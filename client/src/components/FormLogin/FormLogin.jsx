import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';
import LogoForm from '../../components/LogoForm/LogoForm';
import FormLoginTitle from '../FormLoginTitle/FormLoginTitle';
import InputPasswordContainer from '../Inputs/InputPassword/InputPasswordContainer/InputPasswordContainer';
import InputEmailContainer from '../Inputs/InputEmail/InputEmailContainer/InputEmailContainer';
import SubmmitLogin from '../SubmmitLogin/SubmmitLogin';
import QuestionLogin from '../QuestionLogin/QuestionLogin';
import useLoginFetch from '../../hooks/useLoginFetch';
import { UserContext } from '../../context/userContext.jsx';

export default function FormLogin() {
  const { register, handleSubmit, formState: { errors }, setError, reset } = useForm(); 
  const { login, isLoggedIn, userRole, error, userId } = useLoginFetch(); 
  const { setIsAdmin, setUserLogged, setUserIdState,} = useContext(UserContext);

  const onSubmit = async (data, event) => {
    event.preventDefault(); 

    const { email, password } = data;

    try {
      await login(email, password);
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }

    reset();
  };
  
  useEffect(() => {
    if (isLoggedIn) {
      localStorage.setItem('userLogged', 'true');
      localStorage.setItem('isAdmin', userRole ? 'true' : 'false');

      localStorage.setItem('userId', userId);
      
      setIsAdmin(userRole);
      setUserLogged(isLoggedIn);
      setUserIdState(userId); 
    }
  }, [isLoggedIn, userRole, userId, setIsAdmin, setUserLogged, setUserIdState]);



  useEffect(() => {
    if (error) {
      setError("email", {
        type: "manual",
        message: "El email o la contraseña son incorrectos"
      });
      setError("password", {
        type: "manual",
        message: "El email o la contraseña son incorrectos"
      });
    }
  }, [error, setError]);

  if (isLoggedIn) {
    return <Navigate to={userRole ? "/admin" : "/home"} />;
  }

  return (
    <div className='formContainer w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 h-full flex justify-center items-center'>
      <form className='w-10/12 max-w-2xl rounded-lg bg-white h-auto mt-20 flex flex-col items-center max:sm:pt-8 max-sm:pb-12 pt-12 pb-12 shadow-md' onSubmit={handleSubmit(onSubmit)}>
        <LogoForm />
        <FormLoginTitle />
        <InputEmailContainer register={register} errors={errors}/>
        <InputPasswordContainer register={register} errors={errors} />
        <SubmmitLogin />
        <QuestionLogin />
      </form>
    </div>
  );
}
