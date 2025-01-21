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
import PostAddIcon from "@mui/icons-material/PostAdd";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import GroupsIcon from "@mui/icons-material/Groups";
const QuestsHomePage = () => {
  return (
    <Container maxWidth="lg" sx={{ p: 10 }}>
      <Grid
        container
        columns={2}
        spacing={10}
        direction="column"
        alignItems="center"
        sx={{
          display: "flex",
          p: 5,
          flexDirection: { md: "row" },
        }}
      >
        <Grid
          container
          size={{ md: 1, xs: 2 }}
          direction="column"
          spacing={2}
          alignItems="center"
        >
          <Grid>
            <Typography variant="h3" textAlign="center">
              Accept quests posted by the Guild
            </Typography>
          </Grid>
          {/* <Typography></Typography> */}
          <Grid>
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
                <Typography>
                  Connect with clients looking for hunters.
                </Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ExploreOutlinedIcon />
                </ListItemIcon>
                <Typography>
                  Explore with the clients and Guild handlers.
                </Typography>
              </ListItem>
            </List>
          </Grid>
          <Grid>
            <Button>Get Started</Button>
          </Grid>
        </Grid>
        <Grid
          size={{ md: 1, xs: 0 }}
          sx={{ textAlign: "center", display: { md: "block", xs: "none" } }}
        >
          <Box>
            <img src="https://placehold.co/600x600" className="hero-image" />
          </Box>
        </Grid>
      </Grid>
      <Grid
        container
        columns={2}
        spacing={10}
        direction="column"
        alignItems="center"
        sx={{
          display: "flex",
          p: 5,
          flexDirection: { md: "row" },
        }}
      >
        <Grid
          size={{ md: 1, xs: 0 }}
          sx={{ textAlign: "center", display: { md: "block", xs: "none" } }}
        >
          <Box>
            <img src="https://placehold.co/600x600" className="hero-image" />
          </Box>
        </Grid>
        <Grid
          container
          size={{ md: 1, xs: 2 }}
          direction="column"
          spacing={2}
          alignItems="center"
        >
          <Grid>
            <Typography variant="h3" textAlign="center">
              Start quests for hunters
            </Typography>
          </Grid>
          <Grid>
            <List>
              <ListItem>
                <ListItemIcon>
                  <PostAddIcon />
                </ListItemIcon>
                <Typography>
                  Post quests and start various adventures.
                </Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <PersonSearchIcon />
                </ListItemIcon>
                <Typography>
                  Search and invite hunters to your posted quests.
                </Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <GroupsIcon />
                </ListItemIcon>
                <Typography>
                  Connect with hunters and explore adventures together.
                </Typography>
              </ListItem>
            </List>
          </Grid>
          <Grid>
            <Button>Get Started</Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default QuestsHomePage;
