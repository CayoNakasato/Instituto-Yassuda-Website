import { Flex, Image, Link } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import imagem from "../../assets/escola.jpeg";

interface InfoCardsProps {
  path: string;
}

export const InfoHighlightsBigCard = ({ path }: InfoCardsProps) => {
  const navigate = useNavigate();
  return (
    <Flex
      flexDir={"column"}
      cursor="pointer"
      maxWidth="550px"
      onClick={() => navigate(path)}
    >
      <Image height={["200px", "300px"]} src={imagem}></Image>
      <Link>Lorem ipsum dolor sit amet consectetur.</Link>
    </Flex>
  );
};
