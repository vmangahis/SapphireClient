import {
  Box,
  Button,
  Container,
  List,
  ListItem,
  ListItemIcon,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import AccessibilityNewOutlinedIcon from "@mui/icons-material/AccessibilityNewOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
const Quests = () => {
  return (
    <Container maxWidth="lg" sx={{ background: "red", p: 4 }}>
      <Grid container direction="row" columns={2}>
        <Grid container size={1} direction="column" spacing={2}>
          <Grid>
            <Typography variant="h3">
              Accept quests posted by the Guild
            </Typography>
          </Grid>
          {/* <Typography></Typography> */}
          <List>
            <ListItem>
              <ListItemIcon>
                <AccessibilityNewOutlinedIcon />
              </ListItemIcon>
              <Typography>Assist other hunters currently hunting.</Typography>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <LanguageOutlinedIcon />
              </ListItemIcon>
              <Typography>Connect with clients looking for hunters.</Typography>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ExploreOutlinedIcon />
              </ListItemIcon>
              <Typography>
                Explore locales with our current handlers.
              </Typography>
            </ListItem>
          </List>
          <Grid>
            <Button>Get Started</Button>
          </Grid>
        </Grid>
        <Grid size={1}>
          <Typography>Image Here</Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Quests;
