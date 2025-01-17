import {
  Button,
  Container,
  FormControl,
  Input,
  InputLabel,
} from "@mui/material";
import { useState } from "react";
import { axiosIntercept } from "../api/sapphireapi";
import useAuth from "../hooks/useAuth";
import { AxiosResponse } from "axios";
import { useNavigate } from "react-router";

interface AuthResponse {
  accessToken: string;
  user: string;
  user_avatar: string;
}

const SignInForm = () => {
  const { setAuth } = useAuth();
  const nav = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [disableButton, setDisableButton] = useState(false);

  const handleSubmission = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setDisableButton(true);
    axiosIntercept
      .post("auth/login", {
        username: username,
        password: password,
      })
      .then((resp: AxiosResponse<AuthResponse>) => {
        console.log(resp);
        setAuth({
          tk: resp.data.accessToken,
          name: resp.data.user,
          user_avatar: resp.data.user_avatar
            ? resp.data.user_avatar
            : "https://i.pravatar.cc/300",
        });
        nav("/");
      })
      .catch((err) => {
        setError(err);
        console.log(error);
      })
      .finally(() => {
        setDisableButton(false);
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
          variant="outlined"
          disabled={disableButton}
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
