import { Box, Container, Typography } from "@mui/material";

const HeroSection = () => {
  return (
    <Container
      maxWidth={false}
      sx={{
        p: 20,
        backgroundImage:
          "url('https://res.cloudinary.com/dg1bym3ax/image/upload/v1737445302/sapphire-client/wilds-wallpaper-v0-ii61sry7705c1_ce7mij.webp')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "500px",
        backgroundPosition: "center",
      }}
    >
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
