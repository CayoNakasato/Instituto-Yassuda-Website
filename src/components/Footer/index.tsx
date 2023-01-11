<<<<<<< Updated upstream
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram, AiFillPhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
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
import { ContactForm } from "./ContactForm";
//#5a5a5a
export const Footer = () => {
  return (
    <Flex flexDir={"column"} bg={"#5a5a5a"} color="white" p={"1rem 0"} gap="1rem">
      <Flex
        flexDirection={["column", "column", "column", "row"]}
        gap={3}
        justifyContent="space-evenly"
      >
        <Flex id="LogoYassuda" justifyContent={"center"}>
          <Flex flexDirection="column" alignItems="center" gap={"0.4rem"}>
            <Image src={Logo} maxWidth="200px" />

            <Text fontSize={"20px"} fontWeight="600">
              Instituto Yassuda
            </Text>

            <Flex gap="10px" flexDirection={["column"]}>
              <Flex gap="1rem" justifyContent="center" alignItems="center">
                <AiFillPhone size="20px" />
                <Text fontSize={"14px"}>(67) 99999-9999</Text>
              </Flex>

              <Flex gap="1rem" justifyContent="center" alignItems="center">
                <MdEmail size="20px" />
                <Link
                  href="mailto: institutoYassuda@gmail.com"
                  fontSize={"14px"}
                >
                  institutoYassuda@gmail.com
                </Link>
              </Flex>

              <Flex gap="1rem" justifyContent="center" alignItems="center">
                <FaFacebook size="20px" />
                <Link
                  fontSize={"14px"}
                  href="https://www.facebook.com/InstitutoYassuda/"
                  isExternal
                >
                  Instituto Yassuda
                </Link>
              </Flex>
              <Flex gap="1rem" justifyContent="center" alignItems="center">
                <AiFillInstagram size="20px" />
                <Link
                  fontSize={"14px"}
                  href="https://www.instagram.com/insty_instituto_yassuda/"
                  isExternal
                >
                  Instituto Yassuda
                </Link>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Divider display={["block", "block", "block", "none"]} p="1rem 0" />
        <Flex
          id="paginas"
          flexDirection={["column", "column", "row"]}
          gap={"1rem"}
        >
          <Flex
            flexDirection={["row", "row", "column", "column", "row"]}
            justifyContent="center"
          >
            <Flex flexDirection="column" gap={"0.7rem"}>
              <Heading size={"md"}>Páginas</Heading>
              <Topics to="#highlights">Novidades</Topics>
              <Topics to="#QuemSomos">Quem somos</Topics>
              <Topics to="#FundamentalI">Fundalmental I</Topics>
              <Topics to="#FundamentalII">Fundalmental II</Topics>
              <Topics to="#EnsinoMedio">Ensino Médio</Topics>
              <Topics to="#CPV">Curso Pré-Vestibulares</Topics>
              <Topics to="#CPM">Curso Pré-Militares</Topics>
              <Topics to="/privacyTerms">Política de Privacidade</Topics>
            </Flex>
          </Flex>
        </Flex>
        <Divider display={["block", "block", "block", "none"]} p="1rem 0" />
        <Flex flexDirection="column" gap={"0.7rem"} alignItems="center">
          <Heading size={"md"}>Políticas e Termos</Heading>
          <Topics to="#">Termos de Uso</Topics>
          <Topics to="#">Política de Privacidade</Topics>
        </Flex>
      </Flex>
      <Divider width="100%" p="1rem 0" />
      <Flex
        flexDirection={["column", "column", "column", "row"]}
        gap={3}
        justifyContent="space-around"
      >
        <Flex flexDirection={["column"]} gap="1rem" alignItems={"center"}>
          <Heading size={'md'} fontWeight={"500"}>Localização</Heading>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3738.4136974438125!2d-54.60839458444331!3d-20.44819485991355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9486e62906f33f47%3A0x97b5321a69785112!2sINSTY%20-%20Instituto%20Yassuda%20Col%C3%A9gio%20e%20Cursos!5e0!3m2!1spt-BR!2sbr!4v1670854335741!5m2!1spt-BR!2sbr"
            width="450"
            height="350"
          ></iframe>
          <Text>Endereço: R. São Paulo, 828 - Monte Castelo, Campo Grande - MS, 79010-050</Text>
        </Flex>
        <Divider display={["block", "block", "block", "none"]} p="1rem 0" />
        <ContactForm />
      </Flex>
    </Flex>
=======
import { Link } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ITopicsProps {
  children: ReactNode;
  to?: string;
  path?: string
}

export const Topics = ({ children, to, path }: ITopicsProps) => {
  return (
    <Link
      color="#504444"
      paddingLeft="10px"
      fontSize="15px"
      textDecoration="none"
      _hover={{
        color: "red",
        transition: "200ms",
      }}
      href={to}
    >
      {children}
    </Link>
>>>>>>> Stashed changes
  );
};