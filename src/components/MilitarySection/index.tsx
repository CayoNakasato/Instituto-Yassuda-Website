import { Box, Flex, Heading } from "@chakra-ui/react";
import { infoMilitaryTitle } from "../../data/MilitaryData";
import { InfoMilitarySection } from "../InfoMilitarySection";

export const MilitarySection = () => {
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap="3rem"
      minHeight="650px"
    >
      <Heading>Cursos Pré-Militares</Heading>
      <Flex justifyContent="center" gap="5rem">
        {infoMilitaryTitle.map((info, index) => {
          return (
            <Flex
              flexDirection="column"
              width="170px"
              alignItems="center"
              gap="1rem"
              key={index}
              minHeight="550px"
            >
              <Heading fontSize="28px">{info.title}</Heading>

              <InfoMilitarySection content={info.content} />
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
};
