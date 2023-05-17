import React from 'react'

export const Especialidades = ({especialidades, especialidades2, doc1, doc2, doc3, doc4}) => {
  return (
<div className='destilo'>
    <div className='especialidades'>
    <h1 className='especialidad'>{especialidades}</h1>
    <h1 className='especialidad'>{especialidades2}</h1>
    <div className='e1'>   <h2 >{doc1}</h2></div>
    <div className='e2'>   <h2 >{doc2}</h2></div>
    <div className='e3'> <h2 >{doc3}</h2></div>
    <div className='e4'> <h2 >{doc4}</h2></div>
    </div>
    </div>
  )
}
export default Especialidades;
