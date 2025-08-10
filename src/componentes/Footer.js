export const Footer = (props) => {
  return (
    <div>
      <br></br> 
      <footer className="footer-estilo">
        <ul className="footer-lista">
          <li><a href="/">INICIO</a></li>
          <li><a href="especialidades">ESPECIALIDADES</a></li>
          <li><a href="/ingreso">INGRESA TUS DATOS</a></li>
          <li><a href="/imagenes">IMÁGENES</a></li>
          <li><a href="https://www.facebook.com/clinicaveterinariaambato">SIGUENOS EN FACEBOOK</a></li>
        </ul>
        <p>&copy; {props.year} Clínica Veterinaria Proyecto Jorge Patricio Santamaría Cherrez</p>
      </footer>
    </div>
  );
};

