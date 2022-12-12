import { Flex, Image, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ContentProps {
  children: ReactNode;
  img: string;
  reverse?: boolean;
}

export const ContentSection = ({ children, img, reverse }: ContentProps) => {
  return (
    <Flex
      padding={["5"]}
      flexDir={reverse ? ["column", "row-reverse"] : ["column", "row"]}
      align={["center"]}
      gap={["1rem"]}
      maxW="1200px"
    >
      <Image src={img} width={["100%"]} maxW="200px" />
      <Flex flexDir={["column"]} gap={["1rem"]}>
        {children}
      </Flex>
    </Flex>
  );
};
