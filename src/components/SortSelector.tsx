import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { GoChevronDown } from "react-icons/go";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<GoChevronDown />}>
        Order by: Relevance
      </MenuButton>
      <MenuList>
        <MenuItem>Relevance</MenuItem>
        <MenuItem>Date Added</MenuItem>
        <MenuItem>Name</MenuItem>
        <MenuItem>Release Date</MenuItem>
        <MenuItem>Popularity</MenuItem>
        <MenuItem>Average rating</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
