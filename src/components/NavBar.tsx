import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import Search from "./Search";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" margin={1} />
      <Search />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
