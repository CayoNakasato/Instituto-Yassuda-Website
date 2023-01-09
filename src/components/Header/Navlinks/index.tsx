import { Box, Divider, Flex, Link, Stack } from "@chakra-ui/react";
import { MenuItem } from "./MenuItem";
import { useNavigate } from "react-router-dom";
import {
  AiFillInstagram,
  AiOutlineWhatsApp,
  AiOutlineMail,
  AiFillFacebook,
} from "react-icons/ai";


interface NavLinksProps {
  isOpen: boolean;
}

export const NavLinks = ({ isOpen }: NavLinksProps) => {

  return (
    <Flex
      display={{ base: isOpen ? "block" : "none", lg: "flex" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={[4, 4, 4, 4]}
        align={["flex-start", "flex-start", "center"]}
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "column", "row", "row"]}
        pt={[10, 10, 10, 0]}
        paddingRight={[5]}
      >
        <MenuItem to="#highlights">Notícias</MenuItem>
        <MenuItem to="#QuemSomos">Quem somos</MenuItem>
        <MenuItem to="#FundamentalI">Fundamental I</MenuItem>
        <MenuItem to="#FundamentalII">Fundamental II</MenuItem>
        <MenuItem to="#EnsinoMedio">Ensino Médio</MenuItem>
        <MenuItem to="#CPV">
          Curso <br></br>Pré-Vestibular
        </MenuItem>
        <MenuItem to="#CPM">
          Curso <br></br>Pré-Militar
        </MenuItem>
      </Stack>
      <Divider
        padding={"0.5rem 0"}
        display={["block", "block", "block", "none"]}
      />
      <Flex pt={"1rem"} gap="1rem">
        <Link
          href="https://www.instagram.com/insty_instituto_yassuda/"
          target="_blank"
          _hover={{ color: "red.500" }}
        >
          <AiFillInstagram size={"25px"} cursor="pointer" />
        </Link>
        <Link href="https://wa.me/556733849044" _hover={{ color: "red.500" }}>
          <AiOutlineWhatsApp size={"25px"} cursor="pointer" />
        </Link>
        <Link
          href="mailto:institutoYassuda@gmail.com?subject=Contato"
          _hover={{ color: "red.500" }}
          target="_blank"
        >
          <AiOutlineMail size={"25px"} cursor="pointer" />
        </Link>
        <Link
          href="https://www.facebook.com/InstitutoYassuda/"
          _hover={{ color: "red.500" }}
          target="_blank"
        >
          <AiFillFacebook size={"25px"} cursor="pointer" />
        </Link>
      </Flex>
    </Flex>
  );
};
