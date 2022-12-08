import { Flex, Image, Text } from "@chakra-ui/react";
import { IContentData } from "../../interfaces/InfoSection.interface";

export const InfoMilitarySection = ({ content }: IContentData) => {
  return (
    <>
      {content.map((info, index) => {
        console.log(info)
        return (
          <Flex gap={"1rem"} flexDirection={'column'} key={index}>
            <Image src={info.img} alt="Brasão"/>

            <Text>{info.text}</Text>
          </Flex>
        );
      })}
    </>
  );
};
