import { Flex, Heading, Image } from "@chakra-ui/react";
import { infoGradeTitle } from "../../data/GradeData";
import { InfoGradeSection } from "../InfoGradeSection";


export const GradeSection = () => {
  return (
    <>
      {infoGradeTitle.map((info, index) => {
        return (
          <Flex position={"relative"} key={index}>
            <Image src="#" position={"absolute"} top={"0"} />

            <Heading>{info.title}</Heading>

            <InfoGradeSection content={info.content}/>

          </Flex>
        );
      })}
    </>
  );
};
