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

export const platformIconList: { [key: string]: IconType } = {
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