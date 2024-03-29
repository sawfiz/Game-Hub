import { HStack, useColorMode } from "@chakra-ui/react";
import { CiDark, CiLight } from "react-icons/ci";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack margin={2}>
      {/* <Switch isChecked={colorMode === 'dark'} onChange={toggleColorMode}/> */}
      {colorMode === "dark" ? (
        <CiDark size={25} onClick={toggleColorMode} />
      ) : (
        <CiLight size={25} onClick={toggleColorMode} />
      )}
    </HStack>
  );
};

export default ColorModeSwitch;
