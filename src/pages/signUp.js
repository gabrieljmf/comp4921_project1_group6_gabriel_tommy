import { Form, FormLayout, Field, SubmitButton } from "@saas-ui/forms";
import React from "react";
import mongoose from "mongoose";
import user from "../../models/user";
// import CreateCredentials from "./createUser";

export default function signUp() {
  const onSubmit = (params) => {
    console.log(params.username);
    console.log(params.password);
  };
  return (
    <Form onSubmit={onSubmit}>
      <FormLayout>
        <Field
          name="username"
          type="text"
          label="Username"
          placeholder="Enter Username"
        />
        <Field
          name="password"
          type="password"
          label="Password"
          placeholder="Enter Password"
        />
        {/* TODO: Make a CreateCredentials function and pass the formData. async await query, validate, add to db, then redirect */}
        <SubmitButton>Sign Up</SubmitButton>
      </FormLayout>
    </Form>
  );
}
