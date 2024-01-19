import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import Search from "./Search";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack>
      <Link to="/">
        <Image src={logo} boxSize="60px" margin={1} />
      </Link>
      <Search />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
