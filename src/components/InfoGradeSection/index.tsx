import { Flex, Text, Image } from "@chakra-ui/react";
import { IContentData } from "../../interfaces/InfoSection.interface";

export const InfoGradeSection = ({ content }: IContentData) => {
  return (
    <>
      {
      content.map((info, index) => {
        return (
          <Flex gap={"1rem"} key={index}>
            <Image src={info.img} alt="#" />

            <Text>{info.text}</Text>
          </Flex>
        );
      })}
    </>
  );
};
