import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { FaFacebook } from "react-icons/fa";
import { Box, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import style from "./style.module.css";
import Logo from "../../assets/logoEscola/logoNoBg.png"

export const Footer = () => {
  return (
    <Box width="100%" height="400px" margin="0 auto" bg={"lightgray"} padding="1rem">
      <Flex justifyContent="space-evenly" alignItems="center">
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          gap="10px"
        >
          <Image src={Logo} width="350px" height="150px" />

          <Text fontWeight="600">Instituto Yassuda</Text>

          <Text width="300px" alignItems="center">
            Escola onde você aprende a aprender, metodologia diferente e eficaz.
            Entre em contato e venha fazer parte dessa mudança e crie um futuro
            promissor com a educação.
          </Text>

          <Flex gap="10px">
            <Flex justifyContent="center" alignItems="center">
              <PhoneIcon />
              <Text>(67) 9999-9999</Text>
            </Flex>

            <Flex justifyContent="center" alignItems="center">
              <EmailIcon />
              <Text>institutoYassuda@gmail.com</Text>
            </Flex>

            <Flex justifyContent="center" alignItems="center">
              <FaFacebook />
              <Link
                href="https://www.facebook.com/InstitutoYassuda/"
                isExternal
              >
                Instituto Yassuda
              </Link>
            </Flex>
          </Flex>
        </Flex>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3738.4136974438125!2d-54.60839458444331!3d-20.44819485991355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9486e62906f33f47%3A0x97b5321a69785112!2sINSTY%20-%20Instituto%20Yassuda%20Col%C3%A9gio%20e%20Cursos!5e0!3m2!1spt-BR!2sbr!4v1670854335741!5m2!1spt-BR!2sbr"
          width="450"
          height="300"
        ></iframe>

        <Flex flexDirection="column" textAlign="left" gap="10px">
          <Heading fontSize="15px" fontWeight="500">
            Páginas
          </Heading>
          <a className={style.footerLink} href="#">
            Quem somos
          </a>
          <a className={style.footerLink} href="#">
            Fundamental I
          </a>
          <a className={style.footerLink} href="#">
            Fundamental II
          </a>
          <a className={style.footerLink} href="#">
            Ensino Médio
          </a>
          <a className={style.footerLink} href="#">
            Curso Pré-Vestibular
          </a>
          <a className={style.footerLink} href="#">
            Cursos Pré-Militares
          </a>
        </Flex>

        <Flex
          className={style.footerPolitics}
          flexDirection="column"
          textAlign="left"
          gap="10px"
        >
          <a className={style.footerLink} href="#">
            Termos de Uso
          </a>
          <a className={style.footerLink} href="#">
            Política de Privacidade
          </a>
        </Flex>
      </Flex>
    </Box>
  );
};
