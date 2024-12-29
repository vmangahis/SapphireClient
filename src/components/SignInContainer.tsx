import { Box } from "@mui/material";
import SignInForm from "./SignInForm";

const SignInContainer = () => {
  return (
    <Box
      sx={{
        height: "100vh",
      }}
    >
      <SignInForm />
    </Box>
  );
};

export default SignInContainer;
