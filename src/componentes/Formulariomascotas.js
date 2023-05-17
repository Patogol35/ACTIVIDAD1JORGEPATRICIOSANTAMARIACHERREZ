import React from "react";
import useForm from "../hooks/useForm";
import FormInput from "./FormInput";

const Formulariomascotas = () => {
  const formumascota= () => {
    alert(`Valores del formulario: ${JSON.stringify(values)}`);
  };

  const { values, handleChange, handleSubmit } = useForm(formumascota);
  
  return (
    
    <form onSubmit={handleSubmit}>
      <div >
      <h1 className="estilostexto">FORMULARIO DE INGRESO DE DATOS DE MASCOTAS</h1>
      <FormInput
          label="Nombre"
          type="text"
          id="nombre"
          name="nombre"
          onChange={handleChange}
        />
      </div>
      <br />
      <div>
        <FormInput
          label="Edad"
          type="text"
          id="edad"
          name="edad"
          onChange={handleChange}
        />
      </div>
      <br />
      <div>
        <FormInput
          label="Especie"
          type="text"
          id="especie"
          name="especie"
          onChange={handleChange}
        />
      </div>
      <br />
      <div>
        <FormInput
          label="Raza"
          type="text"
          id="Raza"
          name="Raza"
          onChange={handleChange}
        />
      </div>
      <br />
      <div>
        <FormInput
          label="Sexo"
          type="text"
          id="sexo"
          name="sexo"
          onChange={handleChange}
        />
      </div><br></br>

      <FormInput
       label="Propietario"
       type="text"
       id="propietario"
       name="propietario"
       onChange={handleChange}
      
      />
      
      <button type="submit" className="boton">
        Enviar
      </button>
    </form>
  );
};

export default Formulariomascotas;