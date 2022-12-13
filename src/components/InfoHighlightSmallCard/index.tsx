import {Flex, Image, Link} from "@chakra-ui/react";
import imagem from "../../assets/escola.jpeg";

export const InfoHighlightsSmallCard = () => {
  return (
    <Flex
      maxWidth="200px"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Image width="200px" src={imagem}></Image>
      <Link>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Link>
    </Flex>
  );
};
