import { Box, Stack } from "@chakra-ui/react";
import { MenuItem } from "./MenuItem";
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
        spacing={[4, 4, 4, 6]}
        align={["flex-start", "flex-start", "center"]}
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "column", "row", "row"]}
        pt={[10, 10, 10, 0]}
        paddingRight={[5]}
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
