import React from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";

const Login = ({ errors, touched, status, isSubmitting }) => {
  return (
    <div className="form">
      <p>Login</p>
      <Form>
        <Field type="text" name="username" placeholder="Username" />
        {touched.name && errors.name && <p className="error">{errors.name}</p>}
       
        <Field type="password" name="password" placeholder="Password" />
        {touched.password && errors.password && (
          <p className="error">{errors.password}</p>
        )}
     
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
};

const FormikLoginForm = withFormik({
  mapPropsToValues(values) {
    return {
     username: values.username || '',
      password: values.password || "",
    
    };
  },

  // validationSchema: Yup.object().shape({
  //   name: Yup.string().required("Name is required!"),
  //   email: Yup.string()
  //     .email("Email not valid")
  //     .required("Email is required!"),
  //   password: Yup.string()
  //     .min(8, "Password must be 8 characters of longer")
  //     .required("Password is required!"),
  //   term: Yup.bool().oneOf([true], "Term must be checked")
  // }),

  handleSubmit(values) { // to do when melanie is ready with an endpoint for us 
    console.log("handleSubmit clicked");
    axiosWithAuth()
      .post("https://vr-funding-app.herokuapp.com/api/auth/login", values)
      .then(res => {
        console.log("res: " ,res)
        localStorage.setItem('token', res.data.token)
        // use axios and post user info to backend?
      })
      .catch(err => console.log("ERROR: ", err.response));
  }
})(Login);

export default FormikLoginForm;
