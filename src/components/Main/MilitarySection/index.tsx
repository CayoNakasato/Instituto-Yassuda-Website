import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import { infoMilitaryTitle } from "../../../data/MilitaryData";
import { InfoMilitarySection } from "../InfoMilitarySection";
import Waves from "../../../assets/waves.svg";

export const MilitarySection = () => {
  return (
    <Box bg={"gray"}>
      {infoMilitaryTitle.map((info, index) => {
        return (
          <Flex
            key={index}
            flexDirection={"column"}
            gap={"1rem"}
            bg={"lightblue"}
          >
            <Heading>{info.title}</Heading>

            <InfoMilitarySection content={info.content} />
          </Flex>
        );
      })}
    </Box>
  );
};
