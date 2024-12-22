import {
  Button,
  Container,
  FormControl,
  Input,
  InputLabel,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";

const SignInForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmission = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    axios
      .get("https://localhost:7156/api/hunter/")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "20%",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        gap: "50px",
      }}
    >
      <FormControl required>
        <InputLabel htmlFor="u-name">Username</InputLabel>
        <Input
          type="text"
          id="u-name"
          onChange={(e) => setUsername(e.target.value)}
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="password">Password</InputLabel>
        <Input
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormControl>
      <FormControl>
        <Button
          type="submit"
          onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
            handleSubmission(e)
          }
        >
          Submit
        </Button>
      </FormControl>
    </Container>
  );
};

export default SignInForm;
