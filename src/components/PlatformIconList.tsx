import { Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { FaApple, FaGlobe, FaLinux } from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";
import { MdPhoneIphone } from "react-icons/md";
import {
  SiNintendoswitch,
  SiPlaystation,
  SiWindows10,
  SiXbox,
} from "react-icons/si";
import { Platform } from "../hooks/useGame";

const PlatformIconList = ({
  platforms,
}: {
  platforms: { platform: Platform }[];
}) => {
  const iconList: { [key: string]: IconType } = {
    playstation: SiPlaystation,
    xbox: SiXbox,
    pc: SiWindows10,
    mac: FaApple,
    linux: FaLinux,
    android: IoLogoAndroid,
    nintendo: SiNintendoswitch,
    ios: MdPhoneIphone,
    web: FaGlobe,
  };

  return (
    <div>
      {/* {platforms.map(obj => <p key={obj.platform.id}>{obj.platform.slug}</p>)} */}
      {platforms.map((obj) => (
        <Icon
          key={obj.platform.id}
          as={iconList[obj.platform.slug]}
          margin={1}
          color="gray.500"
        />
      ))}
    </div>
  );
};

export default PlatformIconList;
