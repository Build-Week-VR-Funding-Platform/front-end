import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";

import { Button } from "semantic-ui-react";

const SignUp = ({ errors, touched, status, isSubmitting }) => {
  return (
    <div className="form-container">
      <h2>Sign up</h2>
      <Form>
        <p>Name:</p>
        <Field type="text" name="name" placeholder="Name" />
        {touched.name && errors.name && <p className="error">{errors.name}</p>}
        <p>Email address:</p>
        <Field type="text" name="email" placeholder="Email" />
        {touched.email && errors.email && (
          <p className="error">{errors.email}</p>
        )}
        <p>Username:</p>
        <Field type="username" name="username" placeholder="Username" />
        {touched.username && errors.username && (
          <p className="error">{errors.username}</p>
        )}
        <p>Password:</p>
        <Field type="password" name="password" placeholder="Password" />
        {touched.password && errors.password && (
          <p className="error">{errors.password}</p>
        )}
        <Button type="submit" style={{backgroundColor: "#011638", color: "white"}}>Submit</Button>
      </Form>
    </div>
  );
};

const FormikUserForm = withFormik({
  mapPropsToValues(values) {
    return {
      name: values.name || "",
      email: values.email || "",
      username: values.username || "",
      password: values.password || "",
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup.string().required("Name is required!"),
    email: Yup.string()
      .email("Email not valid")
      .required("Email is required!"),
    username: Yup.string().required("Username is required!"),
    password: Yup.string()
      .min(8, "Password must be 8 characters of longer")
      .required("Password is required!")
  }),

  handleSubmit(values) {
    console.log("handleSubmit clicked");
    axiosWithAuth()
    .post("https://vr-funding-app.herokuapp.com/api/auth/login", values)
    .then(res => {
      console.log("res: " ,res)
      localStorage.setItem('token', res.data.token)
    })
    .catch(err => console.log("ERROR: ", err.response));
  }
})(SignUp);

export default FormikUserForm;
