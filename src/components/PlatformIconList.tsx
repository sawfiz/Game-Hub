import React from "react";
import { SiPlaystation2 } from "react-icons/si";
import { SiPlaystation3 } from "react-icons/si";
import { SiPlaystation4 } from "react-icons/si";
import { SiPlaystation5 } from "react-icons/si";
import { SiPlaystationvita } from "react-icons/si";
import { SiXbox } from "react-icons/si";
import { TbBrandXbox } from "react-icons/tb";
import { TbXboxX } from "react-icons/tb";
import { SiWindows10 } from "react-icons/si";
import { FaApple } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";
import { SiNintendoswitch } from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";
import { Platform } from "../hooks/useGame";
import { Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { FaGlobe } from "react-icons/fa";


const PlatformIconList = ({
  platforms,
}: {
  platforms: { platform: Platform }[];
}) => {
  const iconList: { [key: string]: IconType } = {
    playstation2: SiPlaystation2,
    playstation3: SiPlaystation3,
    playstation4: SiPlaystation4,
    playstation5: SiPlaystation5,
    "ps-vita": SiPlaystationvita,
    xbox360: SiXbox,
    "xbox-one": TbBrandXbox,
    "xbox-old": TbBrandXbox,
    "xbox-series-x": TbXboxX,
    pc: SiWindows10,
    macos: FaApple,
    linux: FaLinux,
    android: IoLogoAndroid,
    "nintendo-switch": SiNintendoswitch,
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
