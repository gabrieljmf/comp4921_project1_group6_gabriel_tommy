import {
  Box,
  Center,
  Grid,
  Input,
  Radio,
  RadioGroup,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
// import shortenLink from "./api/bitly";

function ColorToggler() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Center>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>
    </Center>
  );
}

export default function Home() {
  const [value, setValue] = useState("");
  const [radioValue, setRadioValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(event.target.value);
  };

  const upload = async (event, value, radioValue) => {
    console.log("submitted " + value + " and " + radioValue);
    // WIP
    if (radioValue === "text") {
      uploadText(value);
    } else if (radioValue == "link") {
      var fetchURL = "https://api-ssl.bitly.com/v4/shorten";
      var header = {
        Authorization: "Bearer 46a145052835cd7b0a9920f73574efa2a0445b9a",
        "Content-Type": "application/json",
      };
      var payload = {
        domain: "bit.ly",
        long_url: value,
      };
      var options = {
        method: "POST",
        headers: header,
        body: JSON.stringify(payload),
      };
      try {
        const response = await fetch(fetchURL, options);
        if (response.status === 200) {
          const data = await response.json();
          console.log(data.link);
        } else {
          console.log(
            "Bitly API request failed:",
            response.status,
            response.statusText
          );
          res.status(500).json({ error: "Bitly API request failed" });
        }
      } catch (error) {
        console.error("Error while making Bitly API request:", error);
        res.status(500).json({ error: "Internal server error" });
      }
    }
  };
  // WIP
  // const uploadText = async (value) => {
  //   await
  // }

  return (
    <Grid justifyContent={"center"} templateColumns="repeat(3, 1fr)">
      <Box gridColumn={(0, 1)}>
        <Center margin={4}>
          <Button>
            <Link href="/landing">Go to Landing</Link>
          </Button>
        </Center>
      </Box>
      <Box gridColumn={(2, 3)}>
        <ColorToggler />
      </Box>
      <Box gridColumn={(0, 2)}>
        <Input onChange={handleChange} value={value}></Input>
      </Box>
      <Box gridColumn={(1, 2)}>
        <Center margin={4}>
          <RadioGroup
            onChange={(value) => {
              setRadioValue(value);
              console.log(value);
            }}
          >
            <Stack direction="row">
              <Radio value="image">Image</Radio>
              <Radio value="link">Link</Radio>
              <Radio value="text">Text</Radio>
              <Button
                marginLeft={8}
                type="submit"
                onClick={(e) => {
                  upload(e, value, radioValue);
                }}
              >
                Submit
              </Button>
            </Stack>
          </RadioGroup>
        </Center>
      </Box>
    </Grid>
  );
}
