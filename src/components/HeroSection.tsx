import { Box, Container, Typography } from "@mui/material";

const HeroSection = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 10 }}>
      {/* for type */}
      <Box>
        <Typography
          sx={{ typography: { md: "h2", xs: "h4", sm: "h3" } }}
          align="center"
        >
          Explore. Adventure. Discover.
        </Typography>
      </Box>
    </Container>
  );
};

export default HeroSection;
