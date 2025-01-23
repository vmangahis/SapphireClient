import { Box, CircularProgress, Collapse, Fade, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { Outlet } from "react-router";

const SplashScreen = () => {
  const [appLoading, setAppLoading] = useState(true);
  const theme = useTheme();
  useEffect(() => {
    let removeAppLoading = setTimeout(() => {
      setAppLoading((prev) => !prev);
    }, 5000);
    return () => {
      clearTimeout(removeAppLoading);
    };
  }, []);

  return appLoading ? (
    <Collapse orientation="horizontal" in={appLoading}>
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          backgroundColor: theme.palette.primary.main,
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
          <Fade in={appLoading}>
            <CircularProgress color="secondary" />
          </Fade>
        </Box>
      </Box>
    </Collapse>
  ) : (
    <>
      <Collapse in={appLoading}>
        <Box
          sx={{
            width: "100vw",
            height: "100vh",
            backgroundColor: theme.palette.primary.main,
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
            <Fade in={appLoading}>
              <CircularProgress color="secondary" />
            </Fade>
          </Box>
        </Box>
      </Collapse>
      <Outlet />
    </>
  );
};

export default SplashScreen;
