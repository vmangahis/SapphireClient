import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink, Outlet } from "react-router";
import { useState } from "react";

const Navigation = () => {
  const sapphirePages: { link: string; pagename: string }[] = [
    {
      link: "/",
      pagename: "Home",
    },
    { link: "/hunters", pagename: "Hunters" },
    { link: "/quests", pagename: "Quests" },
  ];

  const [navElement, setNavElement] = useState<HTMLElement | null>(null);
  const addNavElement = (e: React.MouseEvent<HTMLElement>) => {
    setNavElement(e.currentTarget);
  };
  const removeNavElement = () => {
    setNavElement(null);
  };

  const ButtonNav = styled(Button)({
    color: "white",
  });

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="lg">
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
                onClick={addNavElement}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                open={Boolean(navElement)}
                anchorEl={navElement}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                onClose={removeNavElement}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                {sapphirePages.map(({ link, pagename }) => {
                  return (
                    <MenuItem key={pagename}>
                      <NavLink to={`${link}`}>
                        <Typography sx={{ color: "white" }}>
                          {pagename}
                        </Typography>
                      </NavLink>
                    </MenuItem>
                  );
                })}
              </Menu>
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
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
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

            <NavLink to="/login">
              <ButtonNav>Login</ButtonNav>
            </NavLink>
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </>
  );
};

export default Navigation;
