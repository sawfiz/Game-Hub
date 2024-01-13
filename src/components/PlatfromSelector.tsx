import {
  Button,
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { GoChevronDown } from "react-icons/go";
import { platformIconList } from "../constants";
import usePlatform from "../hooks/usePlatform";

const PlatfromSelector = ({
  selectedPlatform,
}: {
  selectedPlatform: (platform: string) => void;
}) => {
  const { platforms, errors } = usePlatform();

  const capitalizeFirstLetter = (text: string) => {
    if (text === "pc") return "PC";
    if (text === "ios") return "iOS";
    if (text === "playstateion") return "PlayStation";
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  if (errors) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<GoChevronDown />}>
        Platforms
      </MenuButton>
      <MenuList>
        {platforms.map((platform) => (
          <MenuItem key={platform.id}>
            <HStack align={"center"}>
              <Icon as={platformIconList[platform.slug]}></Icon>
              <Text>{capitalizeFirstLetter(platform.slug)}</Text>
            </HStack>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatfromSelector;
