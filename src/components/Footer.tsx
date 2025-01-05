import {
  Box,
  List,
  ListItem,
  styled,
  Typography,
  useTheme,
} from "@mui/material/";
import Grid from "@mui/material/Grid2";
import XIcon from "@mui/icons-material/X";
import { NavLink } from "react-router";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  const FooterNav = styled(NavLink)({
    color: "black",
  });
  const theme = useTheme();
  return (
    <Box sx={{ backgroundColor: theme.palette.primary.main, p: 5 }}>
      <Grid
        container
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        spacing={5}
      >
        <Box>
          <Typography
            variant="h2"
            noWrap
            component="a"
            textAlign="center"
            sx={{
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Sapphire
          </Typography>
        </Box>
        <Box>
          <List>
            <ListItem>Hunters</ListItem>
            <ListItem>Quest</ListItem>
            <ListItem></ListItem>
          </List>
        </Box>
        <Box>
          <Grid
            container
            flexDirection="row"
            justifyContent="center"
            spacing={5}
          >
            <FooterNav
              to="https://www.x.com"
              style={{ textDecoration: "none" }}
            >
              <XIcon sx={{ fontSize: "50px" }} />
            </FooterNav>
            <FooterNav
              to="https://www.fb.com"
              style={{ textDecoration: "none" }}
            >
              <FacebookIcon sx={{ fontSize: "50px" }} />
            </FooterNav>
            <FooterNav to="https://www.linkedin.com">
              <LinkedInIcon sx={{ fontSize: "50px" }} />
            </FooterNav>
          </Grid>
        </Box>
      </Grid>
    </Box>
  );
};

export default Footer;
