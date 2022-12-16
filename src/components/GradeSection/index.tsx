import { Box, Flex, Image } from "@chakra-ui/react";
import topWave from "../../assets/wavesNegative.svg";
import bottomWave from "../../assets/waves.svg";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  hightlight?: boolean;
  noFooter?: boolean;
}

export const GradeSection = ({
  children,
  hightlight,
  noFooter,
}: SectionProps) => { 
  console.log(children)
  return (
    <Box
      bg={hightlight ? "#F3533E" : "white"}
      w={["100%"]}
      position="relative"
      p={["1rem 0"]}
    >
      {hightlight && (
        <Image
          src={bottomWave}
          position="absolute"
          top="-2px"
          width="100%"
          h={"60px"}
        />
      )}

      <Flex
        w={["100%"]}
        alignItems={["center"]}
        flexDirection={["column"]}
        padding={["1rem 0"]}
      >
        {children}
      </Flex>
      {hightlight && (
        <Image
          width="100%"
          h={"60px"}
          src={topWave}
          position="absolute"
          bottom="-1px"
          display={noFooter ? "none" : "block"}
        />
      )}
    </Box>
  );
};
