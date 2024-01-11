import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justify={"space-between"}>
      <Image src={logo} boxSize="60px" margin={1} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
