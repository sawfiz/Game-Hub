import {
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { GoChevronDown } from "react-icons/go";
import { Icon } from "@chakra-ui/react";
import { FaApple, FaGlobe, FaLinux } from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";
import { MdPhoneIphone } from "react-icons/md";
import {
  SiNintendoswitch,
  SiPlaystation,
  SiWindows10,
  SiXbox,
} from "react-icons/si";
import { IconType } from "react-icons";

const PlatfromSelector = () => {
  const iconList: { [key: string]: IconType } = {
    playstation: SiPlaystation,
    xbox: SiXbox,
    pc: SiWindows10,
    mac: FaApple,
    linux: FaLinux,
    android: IoLogoAndroid,
    nintendo: SiNintendoswitch,
    ios: MdPhoneIphone,
    web: FaGlobe,
  };

  const platforms = [
    "pc",
    "mac",
    "linux",
    "",
    "playstation",
    "xbox",
    "nintendo",
    "",
    "android",
    "ios",
    "",
    "web",
  ];

  const capitalizeFirstLetter = (text: string) => {
    if (text === "pc") return "PC";
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<GoChevronDown />}>
        Platforms
      </MenuButton>
      <MenuList>
        {platforms.map((platform) =>
          platform === "" ? (
            <MenuDivider />
          ) : (
            <MenuItem>
              <HStack align={"center"}>
                <Icon as={iconList[platform]}></Icon>
                <Text>{capitalizeFirstLetter(platform)}</Text>
              </HStack>
            </MenuItem>
          )
        )}
      </MenuList>
    </Menu>
  );
};

export default PlatfromSelector;
