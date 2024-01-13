import { Icon } from "@chakra-ui/react";
import { Platform } from "../hooks/useGame";
import { platformIconList } from "../constants";

const PlatformIconList = ({
  platforms,
}: {
  platforms: { platform: Platform }[];
}) => {
  return (
    <div>
      {/* {platforms.map(obj => <p key={obj.platform.id}>{obj.platform.slug}</p>)} */}
      {platforms.map((obj) => (
        <Icon
          key={obj.platform.id}
          as={platformIconList[obj.platform.slug]}
          margin={1}
          color="gray.500"
        />
      ))}
    </div>
  );
};

export default PlatformIconList;
