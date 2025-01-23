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
        {["HOME", "HUNTERS", "QUESTS"].map((text) => (
          <ListItem key={text}>
            <ListItemButton>
              <ListItemIcon></ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default DrawerNavMobile;
