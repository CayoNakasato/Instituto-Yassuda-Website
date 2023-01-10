import { Flex, Image } from "@chakra-ui/react";
import { MenuToogle } from "./MenuToogle";
import { useState } from "react";
import { NavLinks } from "./Navlinks";
import Logo from "../../assets/logoEscola/logo.jpg";
import { useNavigate } from "react-router-dom";

interface IExternal {
  external?: boolean
}

export const Header = ({external}: IExternal) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Flex
      as="nav"
      align="center"
      justify={[
        "space-between",
        "space-between",
        "space-between",
        "space-evenly",
      ]}
      wrap="wrap"
      w="100%"
      h={"100%"}
      p={["1rem"]}
      boxShadow="0px 3px 8px 0px rgba(0,0,0,0.2)"
      position={"sticky"}
      top="0"
      left="0"
      right="0"
      zIndex="10"
      bg="white"
    >
      <Image
        cursor="pointer"
        src={Logo}
        width={["120px"]}
        onClick={() => navigate("/")}
      />
      <MenuToogle isOpen={isOpen} toggle={toggle} />
      <NavLinks isOpen={isOpen} external={external}/>
    </Flex>
  );
};
