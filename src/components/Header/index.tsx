import { Flex, Image } from "@chakra-ui/react";
import { MenuToogle } from "./MenuToogle";
import { useState } from "react";
import { NavLinks } from "./Navlinks";
import Logo from "../../assets/logoEscola/logo.jpg";

interface IExternal {
  external?: boolean
}

export const Header = ({external}: IExternal) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-evenly"
      wrap="wrap"
      w="100%"
      p={["2rem", "2rem", "1rem"]}
      boxShadow="0px 3px 8px 0px rgba(0,0,0,0.2)"
      position={"sticky"}
      top="0"
      left="0"
      right="0"
      zIndex="10"
      bg="white"
    >
      <Image
        src={Logo}
        width={["150px"]}
        marginBottom={["1rem"]}
        marginLeft={["1rem", "1rem", "3rem", "1rem", "4rem"]}
      />
      <MenuToogle isOpen={isOpen} toggle={toggle} />
      <NavLinks isOpen={isOpen} external={external}/>
    </Flex>
  );
};
