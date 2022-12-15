import { Box, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import { IContentData } from "../../interfaces/InfoSection.interface";

export const InfoMilitarySection = ({ content }: IContentData) => {
  return (
    <>
      {content.map((info, index) => {
        console.log(info)
        return (
          <Box key={index}>
            <Flex
              gap={"1rem"}
              flexDirection="column"
              alignItems="center"
            >
              <Image
                width="150px"
                borderRadius="5px"
                src={info.img}
                alt="Brasão"
              />

              <Text>{info.text}</Text>

              <Text>
                <Link paddingLeft="2rem" color="blue" href="#" isExternal>
                  Saiba mais...
                </Link>
              </Text>
            </Flex>
          </Box>
        );
      })}
    </>
  );
};
