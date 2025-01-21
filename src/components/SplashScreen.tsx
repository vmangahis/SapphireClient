import { Box, CircularProgress, Paper } from "@mui/material";

const SplashScreen = () => {
  const icon = (
    <Paper sx={{ m: 1, width: 100, height: 100 }} elevation={4}>
      <svg>
        <Box
          component="polygon"
          points="0,100 50,00, 100,100"
          sx={(theme) => ({
            fill: theme.palette.common.white,
            stroke: theme.palette.divider,
            strokeWidth: 1,
          })}
        />
      </svg>
    </Paper>
  );
  return (
    <Box
      sx={{
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundColor: "green",
        zIndex: "modal",
      }}
    >
      {icon}
      <CircularProgress color="error" />
    </Box>
  );
};

export default SplashScreen;
