import { Flex, Image, Link } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import imagem from "../../assets/escola.jpeg";

interface InfoSmallProps {
  path: string;
}

export const InfoHighlightsSmallCard = ({ path }: InfoSmallProps) => {
  const navigate = useNavigate();
  return (
    <Flex
      maxWidth="200px"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      onClick={() => navigate(path)}
      cursor="pointer."
    >
      <Image width="200px" src={imagem} />
      <Link>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Link>
    </Flex>
  );
};
