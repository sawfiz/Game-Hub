import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchString: string) => void;
}

const Search = ({ onSearch }: Props) => {
  const [searchString, setSearchString] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchString);
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
