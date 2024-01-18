import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../zustand/store";

const Search = () => {
  const [searchString, setSearchString] = useState("");
  const setSearchText = useGameQueryStore((s) => s.setSearchText);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchText(searchString);
  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          type="tel"
          placeholder="Search games..."
          variant="filled"
          borderRadius={20}
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
        />
      </InputGroup>
    </form>
  );
};

export default Search;
