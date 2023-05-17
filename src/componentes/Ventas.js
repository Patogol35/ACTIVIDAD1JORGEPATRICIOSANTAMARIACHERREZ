import React, { useState } from 'react';
const Ventas = () => {
  const [venta, setventa] = useState([]);
  const [nuevaventa, setnuevaventa] = useState({
    producto: '',
    cantidad: 0,
    precio: 0,
  });
  const handleInputChange = (event) => {
    setnuevaventa({
      ...nuevaventa,
      [event.target.name]: event.target.value,
    });
  };
  const handleAddSale = () => {
    setventa([...venta, nuevaventa]);
    setnuevaventa({
      producto: '',
      cantidad: 0,
      precio: 0,
    });
  };
  return (
    <div className='destilo'>
      <h1 className='estilostexto'>COMPRA TUS PRODUCTOS </h1> <br></br>
      <form>
        <div>
          <label>Producto:</label><br></br>
          <input
            type="text"
            id="product"
            name="product"
            className='inputestilo'
            value={nuevaventa.product}
            onChange={handleInputChange}
          />
        </div><br></br>
        <div>
          <label>Cantidad:</label><br></br>
          <input
          className='inputestilo'
            type="number"
            id="cantidad"
            name="cantidad"
            min={0}
            value={nuevaventa.cantidad}
            onChange={handleInputChange}
          />
        </div> <br></br>
        <div>
          <label >Precio:</label><br></br>
          <input
          step="0.01"
            type="number"
            id="precio"
            name="precio"
            min={0}
            className='inputestilo'
            value={nuevaventa.precio}
            onChange={handleInputChange}
          />
        </div> <br></br>
        <button type="button" onClick={handleAddSale} className='boton'>
         Enviar
        </button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Total</th>
          </tr>
        </thead>
     
          {venta.map((ventas, index) => (
            <tr key={index}>
              <td>{ventas.product}</td>
              <td>{ventas.cantidad}</td>
              <td>{ventas.precio}</td>
              <td>{ventas.cantidad * ventas.precio}</td>
            </tr>
          ))}
     
      </table>
    </div>
  );
};
export default Ventas;



 