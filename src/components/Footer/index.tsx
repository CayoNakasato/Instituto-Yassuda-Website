import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { FaFacebook } from "react-icons/fa";
import {
  Box,
  Divider,
  Flex,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import Logo from "../../assets/logoEscola/logoNoBg.png";
import { Topics } from "./Topics";

export const Footer = () => {
  return (
    <Box
      width="100%"
      height="100%"
      margin="0 auto"
      bg={"lightgray"}
      padding="4rem"
    >
      <Flex
        flexDirection={["column", "column", "column", "row"]}
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Flex>
          <Flex
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Image src={Logo} maxWidth="250px" width={"100%"} />

            <Text fontWeight="600">Instituto Yassuda</Text>

            <Text
              width="300px"
              alignItems="center"
              display={["none", "none", "none", "block"]}
              marginBottom="1rem"
            >
              Escola onde você aprende a aprender, metodologia diferente e
              eficaz. Entre em contato e venha fazer parte dessa mudança e crie
              um futuro promissor com a educação.
            </Text>

            <Divider display={["block", "block", "block", "none"]} margin="1rem" />

            <Flex gap="10px" flexDirection={["column"]}>
              <Flex gap="1rem" justifyContent="center" alignItems="center">
                <PhoneIcon />
                <Text fontSize={"14px"}>(67) 99999-9999</Text>
              </Flex>

              <Flex gap="1rem" justifyContent="center" alignItems="center">
                <EmailIcon />
                <Text fontSize={"14px"}>institutoYassuda@gmail.com</Text>
              </Flex>

              <Flex gap="1rem" justifyContent="center" alignItems="center">
                <FaFacebook />
                <Link
                  fontSize={"14px"}
                  href="https://www.facebook.com/InstitutoYassuda/"
                  isExternal
                >
                  Instituto Yassuda
                </Link>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Divider display={["block", "block", "block", "none"]} margin="1rem" />

        <Flex
          alignItems="center"
          flexDirection={["column", "column", "row"]}
          justifyContent="space-evenly"
          gap={"5rem"}
        >
          <Flex flexDirection={["column", "column", "column", "column", "row"]}>
            <Flex flexDirection="column" textAlign="left">
              <Heading fontSize="15px" fontWeight="500">
                Páginas
              </Heading>
              <Topics>Quem somos</Topics>
              <Topics>Fundalmental I</Topics>
              <Topics>Fundalmental II</Topics>
              <Topics>Ensino Médio</Topics>
              <Topics>Curso Pré-Vestibulares</Topics>
              <Topics>Curso Pré-Militares</Topics>
            </Flex>

            <Flex flexDirection={"column"}>
              <Topics>Termos de Uso</Topics>
              <Topics>Política de Privacidade</Topics>
            </Flex>
          </Flex>
          <Flex flexDirection={["column"]} gap="1rem">
            <Text fontWeight={"500"}>Localização</Text>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3738.4136974438125!2d-54.60839458444331!3d-20.44819485991355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9486e62906f33f47%3A0x97b5321a69785112!2sINSTY%20-%20Instituto%20Yassuda%20Col%C3%A9gio%20e%20Cursos!5e0!3m2!1spt-BR!2sbr!4v1670854335741!5m2!1spt-BR!2sbr"
              width="350"
              height="250"
            ></iframe>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};
