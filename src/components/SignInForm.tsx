import {
  Button,
  Container,
  FormControl,
  Input,
  InputLabel,
} from "@mui/material";
import { useState } from "react";
import sapphire from "../api/sapphireapi";
import useAuth from "../hooks/useAuth";
import { AxiosResponse } from "axios";
import { useNavigate } from "react-router";

interface AuthResponse {
  accessToken: string;
  user: string;
}

const SignInForm = () => {
  const { setAuth } = useAuth();
  const nav = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmission = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    sapphire
      .post("auth/login", {
        username: username,
        password: password,
      })
      .then((resp: AxiosResponse<AuthResponse>) => {
        setAuth({ tk: resp.data.accessToken, name: resp.data.user });
        localStorage.setItem("hello world", "te");
        nav("/hunters");
      })
      .catch((err) => {
        setError(err);
        console.log(error);
      });
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
