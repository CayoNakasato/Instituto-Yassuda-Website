import { Flex, Heading, Link } from "@chakra-ui/react";
import { InfoHighlightsBigCard } from "../InfoHighlightBigCard";
import { InfoHighlightsSmallCard } from "../InfoHighlightSmallCard";

export const InfoHighlightsSection = () => {
  return (
    <Flex flexDirection="column" minHeight="650px" gap="2rem" padding="2rem">
      <Heading width="180px" margin="0 auto">
        Novidades
      </Heading>
      <Flex
        flexDirection={["column", "column", "column", "column", "row", "row"]}
        justifyContent="space-evenly"
        alignItems={["center", "center","center", "center", "flex-start"]}
        padding="2rem"
      >
        <Flex
          flexDirection={["row", "row", "row", "row", "column", "column"]}
          gap="2rem"
        >
          <InfoHighlightsBigCard />
          <Flex display={["none", "none", "none", "flex", "flex", "flex"]} alignSelf={"flex-start"} >
            <InfoHighlightsBigCard />
          </Flex>
        </Flex>

        <Flex gap="1rem" flexDirection={"column"} alignItems="center">
          <Flex
            flexDirection={["row", "row", "row", "row", "column", "column"]}
            gap="2rem"
            display={["none", "none", "none", "none", "flex", "flex"]}
          >
            <InfoHighlightsSmallCard />
            <InfoHighlightsSmallCard />
            <InfoHighlightsSmallCard />
            <InfoHighlightsSmallCard />
          </Flex>
          <Link color="blue" marginTop={"3rem"}>
            Veja mais novidades...
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};
