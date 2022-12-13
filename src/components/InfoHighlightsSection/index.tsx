import { Flex, Heading } from "@chakra-ui/react";
import { InfoHighlightsBigCard } from "../InfoHighlightBigCard";
import { InfoHighlightsSmallCard } from "../InfoHighlightSmallCard";

export const InfoHighlightsSection = () => {
  return (
    <Flex
      flexDirection="column"
      minHeight="650px"
      gap="2rem"
      padding="2rem"
    >
      <Heading width="180px" margin="0 auto">Novidades</Heading>
      <Flex justifyContent="space-evenly" alignItems="center" padding="2rem">
        <Flex flexDirection="column" gap="2rem">
          <InfoHighlightsBigCard />
          <InfoHighlightsBigCard />
        </Flex>
        <Flex flexDirection="column" gap="2rem">
          <InfoHighlightsSmallCard />
          <InfoHighlightsSmallCard />
          <InfoHighlightsSmallCard />
          <InfoHighlightsSmallCard />
        </Flex>
      </Flex>
    </Flex>
  );
};
