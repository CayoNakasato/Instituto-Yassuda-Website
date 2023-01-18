import { Divider, Flex, Heading, Link } from "@chakra-ui/react";
import { InfoHighlightsBigCard } from "../InfoHighlightBigCard";
import { InfoHighlightsSmallCard } from "../InfoHighlightSmallCard";

export const InfoHighlightsSection = () => {
  return (
    <Flex flexDirection="column" gap="2rem" padding="2rem" id="highlights">
      <Heading margin="0 auto">Notícias</Heading>
      <Divider />
      <Flex
        flexDirection={["column", "column", "column", "column", "row", "row"]}
        justifyContent="space-evenly"
        alignItems={["center"]}
        padding="2rem"
      >
        <Flex
          alignSelf={"flex-start"}
          justifyContent="space-around"
          flexDirection={["row", "row", "row", "row", "column"]}
          gap="1rem"
        >
          <InfoHighlightsBigCard path={"/"} />
          <Flex
            width={"100%"}
            display={["none", "none", "none", "none", "flex"]}
          >
            <InfoHighlightsBigCard path={"/"} />
          </Flex>
        </Flex>

        <Flex gap="1rem" flexDirection={"column"} alignSelf="flex-start">
          <Flex
            flexDirection={["row", "row", "row", "row", "column", "column"]}
            gap="2rem"
            display={["none", "none", "none", "none", "flex", "flex"]}
          >
            <InfoHighlightsSmallCard path={"/"} />
            <InfoHighlightsSmallCard path={"/"} />
            <InfoHighlightsSmallCard path={"/"} />
            <InfoHighlightsSmallCard path={"/"} />
          </Flex>
          <Link href="/news" color="blue" marginTop={["0", "0", "3rem"]}>
            Veja mais notícias...
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};
