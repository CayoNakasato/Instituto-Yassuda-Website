import { Box, Image, Link } from "@chakra-ui/react";
import imagem from "../../assets/escola.jpeg";

export const InfoHighlightsBigCard = () => {
  return (
    <Box maxWidth="550px">
      <Image width={["100%"]} height={["200px", "300px"]} src={imagem}></Image>
      <Link width={["350px"]} height={["200px"]}>
        Lorem ipsum dolor sit amet consectetur.
      </Link>
    </Box>
  );
};
