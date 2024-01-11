import { Badge } from "@chakra-ui/react";
const MeteCritic = ({ metacritic }: { metacritic: number }) => {
  let color = metacritic > 80 ? "green" : metacritic > 60 ? "yellow" : "" 

  return (
    <Badge colorScheme={color} paddingX={2} fontSize={'14px'} borderRadius={"4px"}>
      {metacritic}
    </Badge>
  );
};

export default MeteCritic;
