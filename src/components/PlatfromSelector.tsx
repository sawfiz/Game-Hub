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
import usePlatformName from "../hooks/usePlatformName";

interface Props {
  selectedPlatform?: number;
  onSelectPlatform: (id: number) => void;
}

const PlatfromSelector = ({ selectedPlatform, onSelectPlatform }: Props) => {
  const { data, error } = usePlatform();
  const displayName = usePlatformName(selectedPlatform);

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<GoChevronDown />}>
        {displayName || "Platforms"}
      </MenuButton>
      <MenuList>
        {data.results.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => onSelectPlatform(platform.id)}
          >
            <HStack align={"center"}>
              <Icon as={platformIconList[platform.slug]}></Icon>
              <Text>{platform.name}</Text>
            </HStack>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatfromSelector;
