import { Box, Container, InputBase, styled, Typography } from "@mui/material";

const HeroSection = () => {
  const SearchBar = styled(InputBase)({
    border: "2px solid #f3f3f5",
    width: "50%",
    borderRadius: "20px",
    backgroundColor: "#f3f3f5",
    "& input": {
      textAlign: "center",
      padding: "10px",
    },
  });
  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      {/* for type */}
      <Box>
        <Typography variant="h1" align="center">
          Explore. Adventure. Discover.
        </Typography>
      </Box>
      {/* for search */}

      <Box sx={{ display: "flex", justifyContent: "center" }} py={5}>
        <SearchBar placeholder="Search..." />
      </Box>
    </Container>
  );
};

export default HeroSection;
