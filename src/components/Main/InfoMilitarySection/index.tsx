import { Flex, Image, Text } from "@chakra-ui/react";
import { IContentData } from "../../../interfaces/InfoSection.interface";

export const InfoMilitarySection = ({ content }: IContentData) => {
  return (
    <>
      {content.map((info, index) => {
        return (
          <Flex gap={"1rem"} flexDirection={"column"} key={index}>
            <Image
              src={info.img}
              alt="Brasão"
              borderRadius={"10px"}
              width={"100px"}
            />

            <Text>{info.text}</Text>
          </Flex>
        );
      })}
    </>
  );
};
