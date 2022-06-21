import React from 'react'
import { useNavigate } from 'react-router-dom'

export const PageError = () => {

  const navigate = useNavigate();

  return (
    <div className='flex flex-col min-h-screen items-center justify-center gap-10'>
      <h1 className='text-4xl main-text font-bold'>ERROR 404</h1>
      <p className='font-semibold text-2xl leading-3'>Ups! No hemos encontrado tu busqueda</p>
      <button className='p-4 rounded-md font-bold text-base text-black bg-[#64DBFB] hover:bg-blue-500 hover:text-white transition hover:transition-colors hover:duration-700'
              onClick={() => {
                navigate('/')
              }}
      >Deseas volver?</button>
    </div>
  )
}
