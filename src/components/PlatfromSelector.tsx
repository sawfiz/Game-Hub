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
import usePlatform from "../hooks/usePlatform";
import { Platform } from "../hooks/useGame";

const PlatfromSelector = ({
  selectedPlatform,
}: {
  selectedPlatform: (platform: string) => void;
}) => {
  const {platforms, errors, isLoading} = usePlatform();

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
        {platforms.map((platform) =>(
            <MenuItem key={platform.id}>
              <HStack align={"center"}>
                <Icon as={platformIconList[platform.slug]}></Icon>
                <Text>{capitalizeFirstLetter(platform.slug)}</Text>
              </HStack>
            </MenuItem>
          )
        )}
      </MenuList>
    </Menu>
  );
};

export default PlatfromSelector;
