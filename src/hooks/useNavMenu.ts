import { useState } from "react";

const useNavMenu = () => {
  const [navMenu, toggleNavMenu] = useState(false);
  const toggleDrawer = (openState: boolean) => () => {
    toggleNavMenu(openState);
  };
  return { toggleDrawer, navMenu };
};

export default useNavMenu;
