import { Box, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import { IContentData } from "../../interfaces/InfoSection.interface";

export const InfoMilitarySection = ({ content }: IContentData) => {
  return (
    <>
      {content.map((info, index) => {
        return (
          <Box key={index}>
            <Flex
              gap={"1rem"}
              flexDirection="column"
              alignItems="center"
              margin={"0 auto"}
              width="80%"
            >
              <Image
                maxWidth="150px"
                width={"100%"}
                borderRadius="5px"
                src={info.img}
                alt="Brasão"
              />

              <Text size="md">{info.text}</Text>

              <Text>
                <Link
                  paddingLeft="2rem"
                  href={info.link}
                  isExternal
                  color={"blue"}
                >
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
