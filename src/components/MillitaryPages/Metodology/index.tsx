import { Divider, Flex, Heading, Image, Text } from "@chakra-ui/react";
import exemplo from "../../../assets/escola.jpeg";

export const Metodoloy = () => {
  return (
    <>
      <Heading>Nossa Metodologia</Heading>
      <Divider />
      <Flex gap={"3rem"}>
        <Image src={exemplo} />
        <Image display={["none", "none", "none", "flex"]} src={exemplo} />
        <Image
          display={["none", "none", "none", "none", "flex"]}
          src={exemplo}
        />
        <Image
          display={["none", "none", "none", "none", "none", "flex"]}
          src={exemplo}
        />
      </Flex>
      <Flex flexDir={"column"} gap={"2rem"}  paddingLeft="1rem">
        <Text>
          Vivamus luctus quis nibh vitae gravida. Vivamus lorem quam, congue
          tristique magna sit amet, maximus pharetra nibh. Suspendisse potenti.
          Sed congue tempor diam.Vivamus luctus quis nibh vitae gravida. Vivamus
          lorem quam, congue tristique magna sit amet, maximus pharetra nibh.
          Suspendisse potenti. Sed congue tempor diam. Vivamus luctus quis nibh
          vitae gravida.
        </Text>

        <Text>
          Vivamus lorem quam, congue tristique magna sit amet, maximus pharetra
          nibh. Suspendisse potenti. Sed congue tempor diam.Vivamus luctus quis
          nibh vitae gravida. Vivamus lorem quam, congue tristique magna sit
          amet, maximus pharetra nibh. Suspendisse potenti. Sed congue tempor
          diam.
        </Text>

        <Text>
          Vivamus luctus quis nibh vitae gravida. Vivamus lorem quam, congue
          tristique magna sit amet, maximus pharetra nibh. Suspendisse potenti.
          Sed congue tempor diam.
        </Text>
      </Flex>
    </>
  );
};
