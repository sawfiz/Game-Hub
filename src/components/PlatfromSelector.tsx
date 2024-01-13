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
import { Platform } from "../hooks/usePlatform";

interface Props {
  selectedPlatform: Platform | null;
  onSelectPlatform: (platform: Platform) => void;
}

const PlatfromSelector = ({ selectedPlatform, onSelectPlatform }: Props) => {
  const { platforms, errors } = usePlatform();

  const capitalizeFirstLetter = (text: string) => {
    if (text === "pc") return "PC";
    if (text === "ios") return "iOS";
    if (text === "playstateion") return "PlayStation";
    if (text === "neo-geo") return "Neo Geo";
    if (text === "commodore-amiga") return "Commodore / Amiga";
    if (text === "3do") return "3DO";
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  if (errors) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<GoChevronDown />}>
        { selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {platforms.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={()=>onSelectPlatform(platform)}
          >
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
