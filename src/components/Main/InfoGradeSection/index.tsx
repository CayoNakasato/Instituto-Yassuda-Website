import { Flex, Text, Image } from "@chakra-ui/react";
import { IContentData } from "../../../interfaces/InfoSection.interface";

export const InfoGradeSection = ({ content }: IContentData) => {
  return (
    <>
      {content.map((info, index) => {
        if (index % 2 != 0) {
          return (
            <Flex
              gap={"1rem"}
              key={index}
              flexDirection={"row-reverse"}
              width={"800px"}
              bg={"green"}
              borderRadius={"5px"}
              margin={"0 40%"}
            >
              <Image
                src={info.img}
                alt="#"
                borderRadius={"5px"}
                width={"250px"}
              />

              <Text>{info.text}</Text>
            </Flex>
          );
        } else {
          return (
            <Flex
              width={"800px"}
              gap={"1rem"}
              key={index}
              bg={"red"}
              borderRadius={"5px"}
              margin={"0 5%"}
            >
              <Image
                src={info.img}
                alt="#"
                borderRadius={"5px"}
                width={"250px"}
              />

              <Text>{info.text}</Text>
            </Flex>
          );
        }
      })}
    </>
  );
};
