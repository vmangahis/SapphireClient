import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router";

const QuestCards = () => {
  return (
    <Box>
      <NavLink to="#" style={{ textDecoration: "none" }}>
        <Box>
          <img src="https://placehold.co/300x300" />
        </Box>
        <Box>
          <Typography variant="subtitle1" sx={{ textDecoration: "none" }}>
            Dummy Quest
          </Typography>
        </Box>
      </NavLink>
    </Box>
  );
};

export default QuestCards;
