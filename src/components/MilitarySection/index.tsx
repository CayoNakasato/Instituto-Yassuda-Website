import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import { infoMilitaryTitle } from "../../data/MilitaryData";
import { InfoMilitarySection } from "../InfoMilitarySection";
import Waves from "../../assets/waves.svg"

export const MilitarySection = () => {
  return (
    <Box bg={'gray'}>
      {infoMilitaryTitle.map((info, index) => {
        return(
          <Flex flexDirection={"column"} width={"170px"} key={index}>
            <Image src={Waves} position={"absolute"} top={"0"} />

            <Heading>{info.title}</Heading>

            <InfoMilitarySection content={info.content}/>

          </Flex>
        );
      })}
    </Box>
  );
};
