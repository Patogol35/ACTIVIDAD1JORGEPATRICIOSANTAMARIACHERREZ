import React, { useState, useEffect } from 'react';
import logopatricio from '../imagenes/logoveterinaria.jpg';
function Busqueda({busqueda}) {
  const [btermino, tbusqueda] = useState('');
  const [bconsulta, cbusqueda] = useState('');
  const [bresultado, resultados] = useState([]);

  useEffect(() => {
    const results = [
      'Chiquita',
      'Oso',
      'Kiara',
      'Hachi',
      'Negra',
      'Perlita',
      'Gasper',
      'Coco',
      'Suca',
    ];

    const filtrar= results.filter((resultado) => {
      return resultado.toLowerCase().includes(bconsulta.toLowerCase());
    });

    resultados(filtrar);
  }, [bconsulta]);

  const handleSearch = (event) => {
    tbusqueda(event.target.value);
  };

  const handleSearchClick = () => {
   cbusqueda(btermino);
  };

  return (
    <div className='destilo'>
      <h1 className="estilostexto">{busqueda}</h1>
      <input type="text" className='inputestilo' onChange={handleSearch} value={btermino} /> <br></br>
      <button className='boton' onClick={handleSearchClick}>BUSCAR MASCOTA</button>
      <ul>
        {bresultado.map((resultado) => (
          <li key={resultado}>{resultado}</li>
        ))}
      </ul>

      <img src={logopatricio}  alt='logopatricio' className="logopatricio" />
    </div>
  );
}

export default Busqueda;






