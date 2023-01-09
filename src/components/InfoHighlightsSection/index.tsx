import { Box, Flex, Heading, Link } from "@chakra-ui/react";
import { InfoHighlightsBigCard } from "../InfoHighlightBigCard";
import { InfoHighlightsSmallCard } from "../InfoHighlightSmallCard";

export const InfoHighlightsSection = () => {
  return (
    <Flex flexDirection="column" gap="2rem" padding="2rem">
      <Box id="highlights" position="relative" top="-100"></Box>

      <Heading width="180px" margin="0 auto">
        Notícias
      </Heading>
      <Flex
        flexDirection={["column", "column", "column", "column", "row", "row"]}
        justifyContent="space-evenly"
        alignItems={["center", "center", "center", "center", "center"]}
        padding="2rem"
      >
        <Flex flexDirection={["row", "row", "row", "row", "column"]} gap="2rem">
          <InfoHighlightsBigCard path={"/"} />

          <Flex
            width={"100%"}
            display={["none", "none", "none", "none", "flex"]}
          >
            <InfoHighlightsBigCard path={"/"} />
          </Flex>
        </Flex>

        <Flex gap="1rem" flexDirection={"column"} alignItems="center">
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
          <Link href="/" color="blue" marginTop={"3rem"}>
            Veja mais notícias...
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};
