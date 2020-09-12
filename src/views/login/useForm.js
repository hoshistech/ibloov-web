import React, { useState } from "react";

const useForm = ({ initialValues, onSubmit, validate }) => {
  // highlight line
  const [values, setValues] = useState(initialValues || {});
  const [touchedValues, setTouchedValues] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    const e = validate(values);

    setErrors({
      ...errors,
      ...e
    // [name]: e
    });

    setValues({
      ...values,
      [name]: value
    });
  };

  const handleBlur = event => {
    const target = event.target;
    const name = target.name;
    setTouchedValues({
      ...touchedValues,
      [name]: true
    });
    const e = validate(values);
    setErrors({
      ...errors,
      ...e
    });
  };

  return {
    values,
    touchedValues,
    errors,
    handleChange,
    handleBlur
  };
};

export default useForm;
