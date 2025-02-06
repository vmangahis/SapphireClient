import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink, Outlet } from "react-router";
import useAuth from "../hooks/useAuth";
import useNavMenu from "../hooks/useNavMenu";
import DrawerNavMobile from "./DrawerNavMobile";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";

const Navigation = () => {
  const { auth } = useAuth();
  const { toggleDrawer, navMenu } = useNavMenu();
  const [profileMenuNav, setProfileMenuNav] = useState<null | HTMLElement>(
    null
  );
  const tm = useTheme();
  const mobileSize = useMediaQuery("(min-width:600px)");
  const handleOpenProfileMenu = (e: React.MouseEvent<HTMLElement>) => {
    setProfileMenuNav(e.currentTarget);
  };
  const handleCloseProfileMenu = () => {
    setProfileMenuNav(null);
  };

  const sapphirePages: { link: string; pagename: string }[] = [
    {
      link: "/",
      pagename: "Home",
    },
    { link: "/hunters", pagename: "Hunters" },
    { link: "/quests", pagename: "Quests" },
  ];

  const ButtonNav = styled(Button)({
    color: "white",
  });

  return (
    <>
      <AppBar position="sticky">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Sapphire
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={toggleDrawer(!navMenu)}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                PaperProps={{
                  sx: {
                    backgroundColor: tm.palette.primary.main,
                  },
                }}
                open={navMenu}
                onClose={toggleDrawer(false)}
              >
                <DrawerNavMobile />
              </Drawer>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {sapphirePages.map(({ link, pagename }) => {
                return (
                  <NavLink to={link} key={pagename}>
                    <ButtonNav>{pagename}</ButtonNav>
                  </NavLink>
                );
              })}
            </Box>
            <Typography
              noWrap
              variant="h5"
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Sapphire
            </Typography>

            {auth?.tk ? (
              mobileSize ? (
                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="Open user menu">
                    <Button
                      sx={{ color: "white" }}
                      onClick={handleOpenProfileMenu}
                    >
                      {/* <Typography variant="subtitle1">{auth.name}</Typography> */}
                      <IconButton>
                        <Avatar alt={auth.name} src={auth.user_avatar} />
                      </IconButton>
                      {auth.name}
                      <KeyboardArrowDownIcon />
                    </Button>
                  </Tooltip>
                  <Menu
                    sx={{ mt: "45px" }}
                    id="profile-menu"
                    anchorEl={profileMenuNav}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(profileMenuNav)}
                    onClose={handleCloseProfileMenu}
                  >
                    {sapphirePages.map((e) => {
                      return (
                        <MenuItem key={e.pagename}>
                          <Typography sx={{ textAlign: "center" }}>
                            {e.pagename}
                          </Typography>
                        </MenuItem>
                      );
                    })}
                  </Menu>
                </Box>
              ) : (
                <Box>
                  <Tooltip title="Open Profile Menu">
                    <IconButton onClick={handleOpenProfileMenu}>
                      <Avatar alt={auth.name} src={auth.user_avatar} />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    id="profile-menu-mobile"
                    anchorEl={profileMenuNav}
                    sx={{ mt: "45px", display: "block" }}
                    open={Boolean(profileMenuNav)}
                    onClose={handleCloseProfileMenu}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                  >
                    {sapphirePages.map((e) => {
                      return (
                        <MenuItem key={e.pagename}>
                          <Typography>{e.pagename}</Typography>
                        </MenuItem>
                      );
                    })}
                  </Menu>
                </Box>
              )
            ) : (
              <NavLink to="/login">
                <ButtonNav>Login</ButtonNav>
              </NavLink>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </>
  );
};

export default Navigation;
