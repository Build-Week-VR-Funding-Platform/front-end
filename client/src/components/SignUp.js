import React from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";

const SignUp = ({ errors, touched, status, isSubmitting }) => {
  return (
    <div className="form">
      <p>Sign Up here!</p>
      <Form>
      <Field type="text" name="username" placeholder="Username" />
        {touched.username && errors.username && (
          <p className="error">{errors.username}</p>
        )}
        <Field type="password" name="password" placeholder="Password" />
        {touched.password && errors.password && (
          <p className="error">{errors.password}</p>
        )}
        <Field type="text" name="name" placeholder="Name" />
        {touched.name && errors.name && <p className="error">{errors.name}</p>}
        <Field type="text" name="email" placeholder="Email" />
        {touched.email && errors.email && (
          <p className="error">{errors.email}</p>
        )}
        {/* <label className="checkbox-container">
          <Field type="checkbox" name="term" className="checkbox" />
          <span>Accept Terms of Service</span>
        </label> */}
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
};

const FormikUserForm = withFormik({
  mapPropsToValues(values) {
    return {
      username: values.username || "",
      password: values.password || "",
      name: values.name || '',
      email: values.email || "",
      // term: values.term || false
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

  handleSubmit(values) {
    console.log("handleSubmit clicked");
    axiosWithAuth()
      .post("https://vr-funding-app.herokuapp.com/api/auth/reg", values)
      .then(res => {
        console.log(res)
        // use axios and post user info to backend?
      })
      .catch(err => console.log(err.response));
  }
})(SignUp);

export default FormikUserForm;
