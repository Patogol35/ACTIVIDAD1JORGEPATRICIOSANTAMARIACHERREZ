import React from 'react'
import paginanoencontrada from '../imagenes/paginanoencontrada.png';
export const Paginanoexiste = ({nombre}) => {
  return (
    <div className='destilo'>
      
      <h1>{nombre}</h1>
     <img src={paginanoencontrada} alt='paginanoencontrada'/>
    
    </div>
  )
}
export default Paginanoexiste;