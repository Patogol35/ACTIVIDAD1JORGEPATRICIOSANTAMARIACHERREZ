
import './App.css';
import { Routes, Route } from 'react-router-dom';
import   BIENVENIDOS  from './componentes/BIENVENIDOS';
import Paginanoexiste  from './componentes/Paginanoexiste';
import './estilos/estilos.css';
import  Menu  from './componentes/Menu';
import { Footer } from './componentes/Footer';
import Especialidades from './componentes/Especialidades';
import Busqueda from './componentes/Busqueda';
import Ventas from './componentes/Ventas';
import Formulariomascotas from './componentes/Formulariomascotas';
import Formulariovisitas from './componentes/Formulariovisitas';
import Formulario from './componentes/Formulario';
import Imagenes from './componentes/Imagenes';


function App() {
  const currentYear = new Date().getFullYear();
  const opcionesMenu = [
    { texto: "INICIO", ruta: "/" },
    { texto: "INGRESA TUS DATOS", ruta: "/ingreso" },
    { texto: "INGRESA LOS DATOS DE TU MASCOTA", ruta: "/ingresomascotas" },
    { texto: "BÚSQUEDA DE MASCOTAS", ruta: "/busqueda" },
    { texto: "AGENDAR VISITA", ruta: "/agendar" },
    { texto: "ESPECIALIDADES", ruta: "/especialidades" },
    { texto: "TIENDA", ruta: "/ventas" },
  ];
  return (
    <div className="App">
  
      <Routes>
<Route path='/' element={<Menu opciones={opcionesMenu} />} >
<Route path='/ingreso' element={<Formulario ></Formulario>}/>
<Route path='/' element={<BIENVENIDOS 
Actividad={"ACTIVIDAD REALIZADA POR JORGE PATRICIO SANTAMARÍA CHERREZ"} 
bienvenidos={"BIENVENIDOS"} 
texto={"Veterinaria Ambato es una clínica veterinaria de Ambato- Ecuador que ofrece los siguientes servicios:Tratamiento y hospitalización de mascotas, cirugías, traumatología, fisioterapia, peluquería canina, venta de alimentos EMERGENCIAS LAS 24 HORAS"}></BIENVENIDOS>}/>
<Route path='/busqueda' element={<Busqueda busqueda={"ESCRIBE EL NOMBRE DE TU MASCOTA"}></Busqueda>}/>
<Route path='/agendar' element={<Formulariovisitas></Formulariovisitas>}/>
<Route path='/especialidades' element={<Especialidades especialidades={"CLÍNICA SANTA PRISCA"}
 especialidades2={"ESPECIALIDADES"} 
 doc1={"Dr. Patricio Santamaría: Cirugías"} 
 doc2={"Dr. Julio Rodriguez: Traumatología"}
 doc3={"Dr. Lucía Cherrez: Peluquería"} 
 doc4={"Dr Luis Mayorga: Fisioterapia"}></Especialidades>}/>
<Route path='/imagenes' element={<Imagenes></Imagenes>}/>
<Route path='/ingresomascotas' element={<Formulariomascotas></Formulariomascotas>}/>
<Route path='/ventas' element={<Ventas ventas={"COMPRA TUS PRODUCTOS"}></Ventas>}/>
<Route path='*' element={<Paginanoexiste nombre={"Página no existe"}></Paginanoexiste>}/>
</Route>
      </Routes>
    <Footer year={currentYear} />
    </div>
  );
}

export default App;
