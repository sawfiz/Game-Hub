import {
  Button,
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { GoChevronDown } from "react-icons/go";
import { platformIconList } from "../constants";

const PlatfromSelector = () => {
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
                <Icon as={platformIconList[platform]}></Icon>
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
