import { Box, CircularProgress, Collapse, Fade, useTheme } from "@mui/material";
import { TransitionGroup } from "react-transition-group";

const SplashScreen = ({ appLoad }: { appLoad: boolean }) => {
  const theme = useTheme();

  return (
    <TransitionGroup exit={false} component={null}>
      <Collapse orientation="vertical" in={appLoad}>
        <Box
          sx={{
            width: "100vw",
            height: "100vh",
            zIndex: "modal",
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
            <Fade in={appLoad}>
              <CircularProgress color="secondary" />
            </Fade>
          </Box>
        </Box>
      </Collapse>
    </TransitionGroup>
  );
};

export default SplashScreen;
