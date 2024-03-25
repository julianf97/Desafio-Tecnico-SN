import React, { useContext, useState, useEffect } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import LogoForm from '../LogoForm/LogoForm';
import FormTitle from '../FormTramiteTitle/FormTramiteTitle';
import NamesInputs from '../NamesInputs/NamesInputs';
import InfoInputs from '../InfoInputs/InfoInputs';
import FileButtonContainer from '../FileButton/FileButtonContainer/FileButtonContainer';
import SubmmitButton from '../SubmmitTramite/SubmmitTramite';
import allowedTypes from "../../data/allowedTypes";
import { UserContext } from '../../context/userContext';
import AplicationStatus from '../ApplicationStatus/AplicationStatus';

export default function FormTramite() {
  const { register, handleSubmit, formState: { errors }, setError, control } = useForm(); 
  const { userIdState, setUserIdState } = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const [hasExistingTramite, setHasExistingTramite] = useState(false);
  const [stateTramite, setStateTramite] = useState(null);
  const [formSend, setFormSend] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const localStorageId = localStorage.getItem("userId");
        if (localStorageId) {
          setUserIdState(localStorageId);
        }
        
        const response = await fetch(`http://localhost:3000/api/verificarusuariotramite/${localStorageId}`);
        if (!response.ok) {
          throw new Error('Error al verificar trámite');
        }
        const data = await response.json();

        if (data.message === 'El usuario ya ha realizado un trámite.') {
          setHasExistingTramite(true);
          setStateTramite(data.estado);
        } else {
          setHasExistingTramite(false);
        }
      } catch (error) {
        console.error('Error al verificar trámite:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [setUserIdState]);

  useEffect(() => {
    const formSendStorage = localStorage.getItem("formSend");
    if (formSendStorage) {
      setFormSend(true);
    }
  }, []);

  const selectedFile = useWatch({
    control, 
    name: 'archivo',
    defaultValue: [] 
  });

  const onSubmit = async (data, event) => {
    if (selectedFile.length === 0) {
      setError("archivo", {
        type: "manual",
        message: "Debe seleccionar un archivo."
      });
      return;
    }

    if (!allowedTypes.includes(selectedFile[0].type)) {
      setError("archivo", {
        type: "manual",
        message: "El archivo debe ser PDF o una imagen."
      });
      return; 
    }

    try {
      const formData = new FormData();
      formData.append('userId', userIdState)
      formData.append('archivo', selectedFile[0]);
      formData.append('dni', data.dni);
      formData.append('nroTramite', data.nroTramite);
      formData.append('nombre', data.nombre);
      formData.append('apellido', data.apellido);

      const response = await fetch('http://localhost:3000/api/nuevotramite', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error('Error al enviar el formulario');
      }
      setFormSend(true);
      localStorage.setItem("formSend", true);
    } catch (error) {
      console.error('Error:', error.message);
    } 
  
    event.target.reset();
  };

  if (loading) {
    return <p>Cargando...</p>;
  }

  return (
    <div className='formContainer w-full  sm:w-full md:w-full h-screen flex justify-center items-center'>
      {hasExistingTramite || formSend ? (
        <AplicationStatus stateTramite={stateTramite} />
      ) : (
        <form className='w-11/12 max-w-2xl rounded-lg bg-white h-auto mt-20 flex flex-col items-center max:sm:pt-8 max-sm:pb-8 pt-12 pb-12 shadow-md' onSubmit={handleSubmit(onSubmit)}>
          <LogoForm />
          <FormTitle />
          <NamesInputs register={register} errors={errors} />
          <InfoInputs register={register} errors={errors} />
          <FileButtonContainer register={register} errors={errors} selectedFile={selectedFile} />
          <SubmmitButton />
        </form>
      )}
    </div>
  );
}
