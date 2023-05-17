import React from "react";
import useForm from "../hooks/useForm";
import FormInput from "./FormInput";

const Formulario = () => {
  const formuusuario = () => {
    alert(`Valores del formulario: ${JSON.stringify(values)}`);
  };

  const { values, handleChange, handleSubmit } = useForm(formuusuario);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h1 className="estilostexto">FORMULARIO DE INGRESO DE DATOS DEL USUARIO</h1>
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
          label="Apellido"
          type="text"
          id="apellido"
          name="apellido"
          onChange={handleChange}
        />
      </div>
      <br />
      <div>
        <FormInput
          label="Email"
          type="email"
          id="email"
          name="email"
          onChange={handleChange}
        />
      </div>
      <br />
      <div>
        <FormInput
          label="Teléfono"
          type="text"
          id="telefono"
          name="telefono"
          onChange={handleChange}
        />
      </div>
      <br />
      <div>
        <FormInput
          label="DNI"
          type="number"
          id="DNI"
          name="DNI"
          onChange={handleChange}
        />
      </div>
      <br />
      <button type="submit" className="boton">
        Enviar
      </button>
    </form>
  );
};

export default Formulario;
