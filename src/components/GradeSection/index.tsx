import { Flex, Heading, Image } from "@chakra-ui/react";
import { infoTitle } from "../../data/GradeData";
import { InfoGradeSection } from "../InfoGradeSection";


export const GradeSection = () => {
  return (
    <>
      {infoTitle.map((info, index) => {
        return (
          <Flex position={"relative"} key={index}>
            <Image src="#" position={"absolute"} top={"0"} />

            <Heading>{info.title}</Heading>

            <InfoGradeSection content={info.content}/>

            <Image src="#" position={"absolute"} bottom={"0"} />
          </Flex>
        );
      })}
    </>
  );
};
