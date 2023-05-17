import React from 'react'
import { Outlet } from 'react-router-dom'
import logo from '../imagenes/logo.png';

export const Menu = ({ opciones }) => {
  return (
    <div>
      <nav className="menu">
        <a href="/">
          <img src={logo} alt="logo" className="logo" />
        </a>
        <div>
          <ul>
            {opciones.map((opcion) => (
              <li key={opcion.texto}>
                <a href={opcion.ruta}>{opcion.texto}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <br></br>
      <Outlet />
    </div>
  )
}

export default Menu;
