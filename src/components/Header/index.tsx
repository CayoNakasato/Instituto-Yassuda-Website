import { Flex, Image } from "@chakra-ui/react";
import { MenuToogle } from "./MenuToogle";
import { useState } from "react";
import { NavLinks } from "./Navlinks";
import Logo from "../../assets/logoEscola/logo.jpg";

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
      p={["2rem", "2rem", "1rem"]}
      boxShadow="0px 3px 8px 0px rgba(0,0,0,0.2)"
    >
      <Image src={Logo} width="170px" marginLeft={["1rem","1rem","3rem","1rem","4rem"]} />
      <MenuToogle isOpen={isOpen} toggle={toggle} />
      <NavLinks isOpen={isOpen}/>
    </Flex>
  );
};
