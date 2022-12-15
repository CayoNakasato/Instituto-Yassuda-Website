import { Box, Flex, Heading } from "@chakra-ui/react";
import { infoMilitaryData } from "../../data/MilitaryData";
import { InfoMilitarySection } from "../InfoMilitarySection";

export const MilitarySection = () => {
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap="3rem"
      minHeight="650px"
      bg="red"
      width="100%"
      wrap="wrap"
    >
      <Heading>Cursos Pré-Militares</Heading>
      <Flex overflow="auto" justifyContent="center" minWidth="90%" gap="5rem" bg="blue">
        {infoMilitaryData.map((info, index) => {
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
