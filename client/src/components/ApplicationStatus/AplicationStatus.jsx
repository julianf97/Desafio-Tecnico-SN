import React from 'react';
import { applicationAccepted, applicationExpired, applicationReject, applicationSend } from '../../constants/textConstants';

export default function AplicationStatus({ stateTramite }) {
  return (
    <div className='w-full h-full flex justify-center items-center'>
      <div className='w-11/12 max-w-2xl rounded-lg bg-white h-96 mt-20 flex flex-col justify-evenly items-center max:sm:pt-8 max-sm:pb-8 pt-12 pb-12 shadow-md'>
        {stateTramite === 'aceptado' ? (
          <>
            <h3 className='text-3xl'>{applicationAccepted}</h3>
            <div className='acceptDataImg h-1/2 w-1/2'/>
          </>
        ) : stateTramite === 'rechazado' ? (
          <>
            <h3 className='text-3xl'>{applicationReject}</h3>
            <div className='rejectDataImg h-1/2 w-1/2'/>
          </>
        ) : stateTramite === 'vencido' ? (
          <>
            <h3 className='text-3xl'>{applicationExpired}</h3>
            <div className='expiredDataImg h-1/2 w-1/2'/>
          </>
        ) : stateTramite === 'pendiente' ? (
          <>
            <h3 className='text-3xl'>{applicationSend}</h3>
            <div className='sendDataImg h-1/2 w-1/2'/>
          </>
        ) : (
          <>
            <h3 className='text-3xl'>{applicationSend}</h3> 
            <div className='sendDataImg h-1/2 w-1/2'/>
          </>
          
        )}
      </div>
    </div>
  );
}
