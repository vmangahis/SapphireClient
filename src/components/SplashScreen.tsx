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
          height: "100vh",
          backgroundColor: theme.palette.primary.main,
          zIndex: "modal",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            height: "100%",
            alignItems: "center",
          }}
        >
          <CircularProgress color="secondary" />
        </Box>
      </Box>
      <Outlet />
    </>
  );
};

export default SplashScreen;
