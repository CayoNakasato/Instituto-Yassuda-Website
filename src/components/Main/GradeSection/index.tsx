import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import { infoGradeTitle } from "../../../data/GradeData";
import { InfoGradeSection } from "../InfoGradeSection";
import waves from "../../../assets/waves.svg";

export const GradeSection = () => {
  return (
    <>
      {infoGradeTitle.map((info, index) => {
        return (
          <Box key={index}>
            <Flex
              position={"relative"}
              flexDirection={"column"}
              gap={"1rem"}
              bg={"lightblue"}
              padding={"2rem 0"}
            >
              <Image
                src={waves}
                position={"absolute"}
                top={"0"}
              />

              <Heading margin={"0 auto"}>{info.title}</Heading>

              <InfoGradeSection content={info.content} />
            </Flex>
          </Box>
        );
      })}
    </>
  );
};
