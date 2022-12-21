import { Flex, Heading, Link } from "@chakra-ui/react";
import { InfoHighlightsBigCard } from "../InfoHighlightBigCard";
import { InfoHighlightsSmallCard } from "../InfoHighlightSmallCard";

export const InfoHighlightsSection = () => {
  return (
    <Flex flexDirection="column" gap="2rem" padding="2rem">
      <Heading width="180px" margin="0 auto">
        Novidades
      </Heading>
      <Flex
        flexDirection={["column", "column", "column", "column", "row", "row"]}
        justifyContent="space-evenly"
        alignItems={["center", "center", "center", "center", "center"]}
        padding="2rem"
      >
        <Flex flexDirection={["row", "row", "row", "row", "column"]} gap="2rem">
          <InfoHighlightsBigCard />

          <Flex
            width={"100%"}
            display={["none", "none", "none", "none", "flex"]}
          >
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
