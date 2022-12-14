import { Box, Flex, Heading } from "@chakra-ui/react";
import { infoMilitaryData } from "../../data/MilitaryData";
import { InfoMilitarySection } from "../InfoMilitarySection";

export const MilitarySection = () => {
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      gap="3rem"
      minHeight="650px"
    >
      <Box id="CPM" position="relative" top="-100"></Box>

      <Heading margin={"0 auto"}>
        Curso Pré-Militares
      </Heading>
      <Flex overflow="auto" gap="3rem">
        {infoMilitaryData.map((info, index) => {
          return (
            <Flex
              key={index}
              flexDirection="column"
              minWidth="200px"
              width={"100%"}
              alignItems="center"
              gap="1rem"
              maxHeight="500px"
              padding={"1rem"}
              ml="10px"
            >
              <InfoMilitarySection title={info.title} content={info.content} />
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
};