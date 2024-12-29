import { Box, Button, Container, Typography } from "@mui/material";
import QuestCards from "./QuestCards";

const Quests = () => {
  return (
    <Container maxWidth="xl">
      <Box>
        <Typography variant="h4">Quests</Typography>
      </Box>

      <Box
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Button sx={{ position: "absolute", left: 0, top: "50%" }}>Left</Button>
        <QuestCards />
        <QuestCards />

        <QuestCards />

        <Button sx={{ position: "absolute" }}>Right</Button>
      </Box>
    </Container>
  );
};

export default Quests;
