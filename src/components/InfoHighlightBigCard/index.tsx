import { Box, Image, Link } from "@chakra-ui/react";
import imagem from "../../assets/escola.jpeg";

export const InfoHighlightsBigCard = () => {
  return (
    <Box maxWidth="450px">
      <Image width="450px" height="250px" src={imagem}></Image>
      <Link>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
        delectus dolorum voluptas dignissimos perspiciatis vitae eligendi
        deleniti dolor quos explicabo!
      </Link>
    </Box>
  );
};
