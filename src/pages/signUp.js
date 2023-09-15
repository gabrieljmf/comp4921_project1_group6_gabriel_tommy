import { Form, FormLayout, Field, SubmitButton } from "@saas-ui/forms";
import React, { useState } from "react";
import { useRouter } from "next/router";
// import mongoose from "mongoose";
// import user from "../../models/user";
// import CreateCredentials from "./createUser";

export default function signUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  const onSubmit = async (e) => {
    var pattern = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$"
    );

    var minLen = 10;

    if (pattern.test(password) && password.length >= minLen) {
      try {
        const res = await fetch("api/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
          }),
        });

        if (res.ok) {
          router.push("/landing");
          console.log("Creating User Successful");
        } else {
          console.log("Creating User failed.");
        }
      } catch (error) {
        console.log("Error: ", error);
      }
    } else {
      // State that the user has invalid password
      console.log("No");
    }
  };
  return (
    <Form onSubmit={onSubmit}>
      <FormLayout>
        <Field
          name="username"
          type="text"
          label="Username"
          placeholder="Enter Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <Field
          name="password"
          type="password"
          label="Password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* TODO: Make a CreateCredentials function and pass the formData. async await query, validate, add to db, then redirect */}
        <SubmitButton>Sign Up</SubmitButton>
      </FormLayout>
    </Form>
  );
}
