import React from "react";
import useForm from "../hooks/useForm";
import FormInput from "./FormInput";
const Formulariovisitas = () => {
  const Formuvisita = () => {
    alert(`Valores del formulario: ${JSON.stringify(values)}`);
  };

  const { values, handleChange, handleSubmit } = useForm(Formuvisita);

  return (
    <form onSubmit={handleSubmit}>
      <div >
      <h1 className="estilostexto">AGENDAR VISITA</h1>
      <FormInput
          label="FECHA DE VISITA"
          type="date"
          id="fecha"
          name="fecha"
          onChange={handleChange}
        />
      </div>
      <br />
      <div>
        <FormInput
          label="NOMBRE DE MASCOTA"
          type="text"
          id="nombre"
          name="nombre"
          onChange={handleChange}
        />
      </div>
      <br />
      <div>
        <FormInput
          label="ESPECIALIDAD"
          type="text"
          id="especialidad"
          name="especialidad"
          onChange={handleChange}
        />
            </div><br></br>
      
      <button type="submit" className="boton">
      Agendar
      </button>
    </form>
  );
};

export default Formulariovisitas;