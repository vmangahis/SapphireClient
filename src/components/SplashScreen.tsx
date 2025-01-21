import { Box, CircularProgress, useTheme } from "@mui/material";
import { Outlet } from "react-router";

const SplashScreen = () => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundColor: theme.palette.primary.main,
          zIndex: "modal",
        }}
      >
        <CircularProgress color="secondary" />
      </Box>
      <Outlet />
    </>
  );
};

export default SplashScreen;
