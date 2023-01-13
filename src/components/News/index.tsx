import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { CardArchive } from "./CardArchives";
import { CardNews } from "./CardNews";

export const News = () => {
  return (
    <Box width="100%" p="1rem">
      <Flex flexDir={"column"}>
        <Heading>Latest</Heading>
        <Divider mt="0.25rem" />
        <Flex
          p="1rem"
          flexDir={["column", "column", "column", "row"]}
          gap="1rem"
        >
          <Image
            maxW={"600px"}
            src="https://horario.com.br/wp-content/uploads/2019/09/05_geha_blog_impacto_horario_escolar.jpg"
          />
          <Flex flexDir={["column"]} gap="1rem">
            <Heading>Titulo</Heading>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam quam nisi eos tenetur, ex neque. Suscipit blanditiis
              quis dolorum est neque fugit aspernatur nemo, doloremque
              accusantium, possimus debitis quae libero!
            </Text>
            <Button>Leia mais</Button>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        flexDir={["column", "column", "column", "row"]}
        gap="1rem"
        width={"100%"}
      >
        <Flex flexDir="column" width={["100%", "100%", "100%", "70%"]}>
          <Heading mb="0.25rem">
            Antigas
          </Heading>
          <Divider />
          <Flex
            overflowX={["auto", "auto", "auto", "inherit"]}
            wrap={["nowrap", "nowrap", "nowrap", "wrap"]}
            gap="1rem"
            p="1rem"
            justifyContent={["space-between"]}
          >
            <CardNews />
            <CardNews />
            <CardNews />
          </Flex>
        </Flex>
        <Flex flexDir={"column"} maxW={["100%", "100%", "100%", "300px"]}>
          <Heading mb="0.25rem">
            Arquivos
          </Heading>
          <Divider />
          <Flex flexDir={"column"} p="1rem" gap="2rem">
            <CardArchive />
            <CardArchive />
            <CardArchive />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};
