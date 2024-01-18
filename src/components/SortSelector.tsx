import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { GoChevronDown } from "react-icons/go";
import useGameQueryStore from "../zustand/store";

const SortSelector = () => {
  const selectedSortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);
  const setSortOrder = useGameQueryStore((s) => s.setSortOrder);

  const sortOptions: { label: string; value: string }[] = [
    { label: "Name", value: "name" },
    { label: "Released", value: "-released" },
    { label: "Popularity", value: "-metacritic" },
  ];

  const currentSort = sortOptions.find(
    (option) => option.value === selectedSortOrder
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<GoChevronDown />}>
        Order by: {currentSort?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOptions.map((option) => (
          <MenuItem
            key={option.label}
            onClick={() => setSortOrder(option.value)}
          >
            {option.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
