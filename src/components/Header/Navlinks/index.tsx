import { Box, Divider, Flex, Stack, Text } from "@chakra-ui/react";
import { MenuItem } from "./MenuItem";
import { AiFillCar } from "react-icons/ai";
import { GiPriceTag } from "react-icons/gi";
import { BiUserCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

interface NavLinksProps {
  isOpen: boolean;
}

export const NavLinks = ({ isOpen }: NavLinksProps) => {
  const navigate = useNavigate();

  return (
    <Box
      display={{ base: isOpen ? "block" : "none", lg: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={[4, 4, 4, 10]}
        align={["flex-start", "flex-start", "center"]}
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "column", "row", "row"]}
        pt={[10, 10, 10, 0]}
      >
        <MenuItem to="/">Quem somos</MenuItem>
        <MenuItem to="/">Fundamental I</MenuItem>
        <MenuItem to="/">Fundamental II</MenuItem>
        <MenuItem to="/">Ensino Médio</MenuItem>
        <MenuItem to="/">
          Cursos <br></br>Pré-Vestibulares
        </MenuItem>
        <MenuItem to="/">
          Cursos <br></br>Pré-Militares
        </MenuItem>
      </Stack>
    </Box>
  );
};
