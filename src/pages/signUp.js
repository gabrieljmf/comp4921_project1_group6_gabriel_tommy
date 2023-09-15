import { Form } from "@saas-ui/forms";
import {
  Flex,
  Center,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";
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
    console.log(password);
    if (pattern.test(password)) {
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
    <Flex
      width={"100vw"}
      height={"100vh"}
      alignContent={"center"}
      justifyContent={"center"}
      bg="#161b22"
    >
      <Center>
        <Form onSubmit={onSubmit}>
          <FormControl bg="#0d1117" p="20px 50px" borderRadius="30px">
            <FormLabel color="white" mb="0rem">
              Username
            </FormLabel>
            <Input
              type="text"
              placeholder="Enter Username"
              mb=".5rem"
              borderColor="#555"
              _placeholder={{ color: "#555" }}
              color="white"
              onChange={(e) => setUsername(e.target.value)}
            />
            <FormLabel color="white" mb="0rem">
              Password
            </FormLabel>
            <Input
              type="password"
              placeholder="Enter Password"
              mb=".5rem"
              borderColor="#555"
              _placeholder={{ color: "#555" }}
              color="white"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              m="0 0 .75rem"
              p=".75rem 1rem"
              width="100%"
              bg="#161b22"
              color="#ccc"
              type="submit"
            >
              Sign Up
            </Button>
          </FormControl>
        </Form>
      </Center>
    </Flex>
  );
}
