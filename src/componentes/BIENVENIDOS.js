import React from 'react'
import logopatricio from '../imagenes/logoveterinaria.jpg';
export const BIENVENIDOS = ({Actividad, bienvenidos, texto}) => {
  return (
    <div className='destilo'> 
    <div className='patricio'>
       <h2 className='actividad'>{Actividad}</h2>
      <h2 className='actividad'>{bienvenidos}</h2>
      <h4 className='texto'>{texto} </h4>
        <img src={logopatricio}  alt='logopatricio' className="logopatricio" />

      </div>
      </div>
  )
}

export default BIENVENIDOS;