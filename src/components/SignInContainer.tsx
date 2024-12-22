import { Box } from "@mui/material";
import SignInForm from "./SignInForm";

const SignInContainer = () => {
  return (
    <Box
      sx={{
        bgcolor: "#0e1215",
        height: "100vh",
      }}
    >
      <SignInForm />
    </Box>
  );
};

export default SignInContainer;
