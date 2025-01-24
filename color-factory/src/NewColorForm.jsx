import React from "react";
import {useFormik} from "formik";

const NewColorForm = ({addNewColor}) => {
  const validate = (values) => {
    const errors = {};
    for (let value in values) {
      if (!values[value]) errors[value] = "Required!";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      hex: ''
    },
    validate,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: values => {
      addNewColor(values);
    }
  });

  return (
    <form className="NewColorForm" onSubmit={formik.handleSubmit}>
      <h2 className="NewColorForm-instructions">Enter a name for the color and choose its hex value from the color picker below.</h2>

      <label htmlFor="NewColorForm-name-field" className="NewColorForm-name-label">Color name:</label>
      <input id="NewColorForm-name-field" className="NewColorForm-input" type="text" name="name"
      size="25" value={formik.values[name]} onChange={formik.handleChange}/>
      {formik.errors[name] ? <div className="NewColorForm-error">{formik.errors[name]}</div> : null}

      <label htmlFor="NewColorForm-hex-field" className="NewColorForm-hex-label">Hex value:</label>
      <input id="NewColorForm-hex-field" className="NewColorForm-input" type="color" name="hex"
      value={formik.values[hex]} onChange={formik.handleChange}/>
      {formik.errors[hex] ? <div className="NewColorForm-error">{formik.errors[hex]}</div> : null}

      <button className="NewColorForm-submit-button" type="submit">Add Color</button>
    </form>
  );
};

export default NewColorForm;