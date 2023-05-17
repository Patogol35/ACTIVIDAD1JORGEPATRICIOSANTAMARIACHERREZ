import { useState, useEffect } from "react";

const useForm = (callback) => {
  const [values, setValues] = useState({});

  useEffect(() => {
    console.log("FORMULARIO ACTUALIZADO: ", values);
  }, [values]);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    callback();
  };

  const handleChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
  };
};

export default useForm;