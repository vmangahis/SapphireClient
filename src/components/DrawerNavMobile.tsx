import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@mui/material";
import useNavMenu from "../hooks/useNavMenu";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import RequestPageIcon from "@mui/icons-material/RequestPage";

const DrawerNavMobile = () => {
  const { toggleDrawer } = useNavMenu();
  const tm = useTheme();
  return (
    <Box
      sx={{ width: 250, backgroundColor: tm.palette.primary.main }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List>
        <ListItem key="HOME">
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="HOME" />
          </ListItemButton>
        </ListItem>

        <ListItem key="HUNTERS">
          <ListItemButton>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="HUNTERS" />
          </ListItemButton>
        </ListItem>

        <ListItem key="QUESTS">
          <ListItemButton>
            <ListItemIcon>
              <RequestPageIcon />
            </ListItemIcon>
            <ListItemText primary="QUESTS" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default DrawerNavMobile;
