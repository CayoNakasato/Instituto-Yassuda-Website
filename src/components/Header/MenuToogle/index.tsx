import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { Box } from "@chakra-ui/react";

interface MenuToggleProps {
  toggle: () => void;
  isOpen: boolean;
}

export const MenuToogle = ({ toggle, isOpen }: MenuToggleProps) => {
  return (
    <Box
      display={{ base: "block", md: "block", lg: "none" }}
      onClick={toggle}
      marginRight={["1rem", "1rem", "3rem"]}
    >
      {isOpen ? (
        <IoMdClose size={"35px"} cursor="pointer" color="#B61D09" />
      ) : (
        <GiHamburgerMenu size={"35px"} cursor="pointer" color="#B61D09" />
      )}
    </Box>
  );
};
