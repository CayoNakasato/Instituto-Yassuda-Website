import {
  Box,
  Flex,
  Image,
  Link,
  Text,
  Heading,
  Card,
  CardBody,
} from "@chakra-ui/react";
import { IContentData } from "../../interfaces/InfoSection.interface";

export const InfoMilitarySection = ({ content, title }: IContentData) => {

  const handleClick = (title: string) =>{
    console.log(title.toLowerCase())
  }

  console.log(content);
  
  return (
    <>
      {content.map((info, index) => {
        return (
          <Card minWidth="200px" key={index} p="16px 0">
            <Flex
              gap={"1rem"}
              flexDirection="column"
              alignItems="center"
              margin={"0 auto"}
              width="80%"
            >
              <Image
                maxWidth="100px"
                width={"100%"}
                borderRadius="5px"
                src={info.img}
                alt="Brasão"
              />
              <Heading size="lg">{title}</Heading>
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
          </Card>
        );
      })}
    </>
  );
};
