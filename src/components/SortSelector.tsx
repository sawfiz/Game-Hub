import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { GoChevronDown } from "react-icons/go";

interface Props {
  sortOrder: string | null;
  onSelectOrder: (order: string) => void;
}
const SortSelector = ({ sortOrder, onSelectOrder }: Props) => {
  const sortOptions: { label: string; value: string }[] = [
    { label: "Name", value: "name" },
    { label: "Released", value: "-released" },
    { label: "Popularity", value: "-metacritic" },

  ];

  const currentSort = sortOptions.find(
    (option) => option.value === sortOrder
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<GoChevronDown />}>
        Order by:{' '} 
        {currentSort?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOptions.map((option) => (
          <MenuItem
            key={option.label}
            onClick={() => onSelectOrder(option.value)}
          >
            {option.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
