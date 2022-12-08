import { Flex, Image } from "@chakra-ui/react";
import { MenuToogle } from "./MenuToogle";
import { useState } from "react";
import { NavLinks } from "./Navlinks";
import Logo from "../../assets/logo 5.1 (3).jpg";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100vw"
      p="2rem"
      boxShadow="0px 3px 8px 0px rgba(0,0,0,0.2)"
    >
      <Image src={Logo} width="150px" />
      <MenuToogle isOpen={isOpen} toggle={toggle} />
      <NavLinks isOpen={isOpen} />
    </Flex>
  );
};
