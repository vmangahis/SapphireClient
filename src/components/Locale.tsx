import { Box, Button, Container, Typography } from "@mui/material";
import QuestCards from "./QuestCards";

const Locale = () => {
  return (
    <Container maxWidth="xl" sx={{ background: "yellow", p: 4 }}>
      <Box>
        <Typography variant="h4">Locale</Typography>
      </Box>

      <Box
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "space-around",
          p: 2,
        }}
      >
        <Button sx={{ position: "absolute", left: 0, top: "40%" }}>Left</Button>
        <QuestCards />
        <QuestCards />

        <QuestCards />

        <Button sx={{ position: "absolute", right: 0, top: "40%" }}>
          Right
        </Button>
      </Box>
    </Container>
  );
};

export default Locale;
