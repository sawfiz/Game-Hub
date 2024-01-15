import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const Search = () => {
  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />} />
      <Input
        type="tel"
        placeholder="Search games..."
        variant="filled"
        borderRadius={20}
      />
    </InputGroup>
  );
};

export default Search;
