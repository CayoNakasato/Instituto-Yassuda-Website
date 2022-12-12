import { Box, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import { IContentData } from "../../interfaces/InfoSection.interface";

export const InfoMilitarySection = ({ content }: IContentData) => {
  return (
    <>
      {content.map((info, index) => {
        return (
          <Box>
            <Flex
              gap={"1rem"}
              flexDirection="column"
              alignItems="center"
              key={index}
            >
              <Image
                width="150px"
                borderRadius="5px"
                src={info.img}
                alt="Brasão"
              />

              <Text>{info.text}</Text>

              <Text>
                <Link paddingLeft="2rem" color="blue" href="#">
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
