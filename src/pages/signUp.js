import { Form, FormLayout, Field, SubmitButton } from "@saas-ui/forms";
import React from "react";

export default function signUp() {
  return (
    <Form>
      <FormLayout>
        <Field name="firstName" label="First Name" type="text" />
        <Field name="lastName" type="text" label="Last Name" />
        {/* TODO: Make a CreateCredentials function and pass the formData. async await query, validate, add to db, then redirect */}
        <SubmitButton onSubmit={(formData) => CreateCredentials(formData)}>
          Sign Up
        </SubmitButton>
      </FormLayout>
    </Form>
  );
}
