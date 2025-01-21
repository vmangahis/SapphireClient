import { Backdrop, Box, Collapse, keyframes } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { useEffect, useState } from "react";
import { TransitionGroup } from "react-transition-group";

const LoadingComponent = () => {
  return (
    <Collapse orientation="horizontal" in={true}>
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundColor: "green",
          zIndex: "modal",
        }}
      >
        <CircularProgress color="error" />
      </Box>
    </Collapse>
  );
};
export default LoadingComponent;
