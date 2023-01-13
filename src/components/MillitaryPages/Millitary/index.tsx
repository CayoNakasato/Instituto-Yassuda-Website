import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { infoMilitaryData } from "../../../data/MilitaryData";
import { Footer } from "../../Footer";
import { Header } from "../../Header";
import { Metodoloy } from "../Metodology";

export const Millitary = () => {
  const { title } = useParams();

  const militar = infoMilitaryData.filter((obj) => obj.title === title)[0];

  const militarInfo = militar.content[0];

  return (
    <>
      <Header />
      <Flex
        padding="2rem"
        flexDir={"column"}
        width={["90vw", "70vw"]}
        margin="2rem auto"
        gap={"1rem"}
      >
        <Heading textAlign={"center"} marginBottom={"2rem"}>
          {militarInfo.name}
        </Heading>
        <Flex
          flexDir={["column", "column", "column", "column", "row"]}
          justifyContent={"center"}
          alignItems="center"
          gap={["2rem", "2rem", "2rem", "2rem", "4rem"]}
          marginBottom={"2rem"}
          padding="1rem"
          borderRadius={"5px"}
          bg="#B9ACAC"
        >
          <Image src={militarInfo.img} />
          <Text >{militarInfo.text}</Text>
        </Flex>
        <Flex padding="2rem"  borderRadius={"5px"}  gap="2rem" flexDir={"column"}>
          <Heading >Sobre</Heading>
          <Flex flexDir={"column"} gap={"2rem"} paddingLeft="1rem">
            <Text>{militarInfo.description1}</Text>
            <Text>{militarInfo.description2}</Text>
          </Flex>
        </Flex>
        <Metodoloy />
      </Flex>
      <Footer />
    </>
  );
};
