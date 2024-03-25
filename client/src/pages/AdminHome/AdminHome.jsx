import React, { useState } from 'react';
import useAllTramites from '../../hooks/useAllTramites.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { faHourglassEnd } from '@fortawesome/free-solid-svg-icons';
import { faSquareXmark } from '@fortawesome/free-solid-svg-icons';
import showModalAceptar from './adminModals/modalAceptarTramite.js';
import showModalRechazar from './adminModals/modalRechazarTramite.js';
import showModalVencer from './adminModals/modalVencerTramite.js';

export default function AdminHome() {
  const { loading, error, tramites } = useAllTramites();

  if (loading) return <div className='w-full h-96 flex items-center justify-center'>Cargando...</div>;
  if (error) return <div className='w-full h-96 flex items-center justify-center'>Error: {error}</div>;

  const handleAceptar = (tramiteId) => {
    showModalAceptar(tramiteId); 
  };
  
  const handleRechazar = (tramiteId) => {
    showModalRechazar(tramiteId)
  };

  const handleVencer = (tramiteId) => {
    showModalVencer(tramiteId)
  };

  return (
    <div className='w-full pt-32 border-2 h-screen flex flex-col items-center'>
      <div className='w-full h-auto pb-3 flex items-center justify-center'>
        <h1 className='text-3xl font-semibold'>Lista de tramites</h1>
      </div>
      <div className='w-6/12 border-2 flex flex-col justify-center items-center'>
        <table className='w-full border-collapse border border-gray-300'>
          <thead>
            <tr className='bg-gray-200 '>
              <th className='border border-gray-300 px-2 py-2'>ID</th>
              <th className='border border-gray-300 px-2 py-2'>Nombre</th>
              <th className='border border-gray-300 px-2 py-2'>Apellido</th>
              <th className='border border-gray-300 px-2 py-2'>DNI</th>
              <th className='border border-gray-300 px-2 py-2'>Nro de Trámite</th>
              <th className='border border-gray-300 px-2 py-2'>Usuario ID</th>
              <th className='border border-gray-300 px-2 py-2'>Nombre de archivo</th>
              <th className='border border-gray-300 px-2 py-2'>Fecha de Creación</th>
              <th className='border border-gray-300 px-2 py-2'>Estado</th>
              <th className='border border-gray-300 px-2 py-2 bg-lime-400'>Aceptar</th>
              <th className='border border-gray-300 px-2 py-2 bg-red-400'>Rechazar</th>
              <th className='border border-gray-300 px-2 py-2'>Vencido</th>
            </tr>
          </thead>
          <tbody>
            {tramites.map(tramite => (
              <tr key={tramite.id} className='bg-white'>
                <td className='border border-gray-300 px-2 py-2 text-center'>{tramite.id}</td>
                <td className='border border-gray-300 px-2 py-2 text-center'>{tramite.nombre}</td>
                <td className='border border-gray-300 px-2 py-2 text-center'>{tramite.apellido}</td>
                <td className='border border-gray-300 px-2 py-2 text-center'>{tramite.dni}</td>
                <td className='border border-gray-300 px-2 py-2 text-center'>{tramite.numero_tramite}</td>
                <td className='border border-gray-300 px-2 py-2 text-center'>{tramite.userId}</td>
                <td className='border border-gray-300 px-2 py-2 text-center'>{tramite.nombre_archivo}</td>
                <td className='border border-gray-300 px-2 py-2 text-center'>{tramite.createdAt}</td>
                <td className='border border-gray-300 px-2 py-2 text-center'>{tramite.estado}</td>
                <td className={`border border-gray-300 px-4 py-2 text-center ${tramite.estado !== 'pendiente' ? 'disabled-cell' : ''}`}>
                  <FontAwesomeIcon
                    className={`cursor-pointer ${tramite.estado !== 'pendiente' ? 'iconCheckGray' : 'iconCheck'}`}
                    icon={faSquareCheck}
                    onClick={() => tramite.estado === 'pendiente' && handleAceptar(tramite.id)}
                  />
                </td>
                <td className={`border border-gray-300 px-4 py-2 text-center ${ tramite.estado !== 'pendiente' ? 'disabled-cell' : ''}`}>
                  <FontAwesomeIcon
                    className={`cursor-pointer ${tramite.estado !== 'pendiente' ? 'iconMarkGray' : 'iconMark'}`}
                    icon={faSquareXmark}
                    onClick={() => tramite.estado === 'pendiente' && handleRechazar(tramite.id)}
                  />
                </td>
                <td className={`border border-gray-300 px-4 py-2 text-center ${tramite.estado !== 'pendiente' ? 'disabled-cell' : ''}`}>
                  <FontAwesomeIcon
                    className={`cursor-pointer ${tramite.estado !== 'pendiente' ? 'iconExpiredGray' : 'iconExpired'}`}
                    icon={faHourglassEnd}
                    onClick={() => tramite.estado === 'pendiente' && handleVencer(tramite.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
