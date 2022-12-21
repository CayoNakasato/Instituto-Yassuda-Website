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
        marginRight={["1rem","1rem","1rem","1rem","10rem"]}
      >
        <MenuItem to="#1">Quem somos</MenuItem>
        <MenuItem to="#2">Fundamental I</MenuItem>
        <MenuItem to="#3">Fundamental II</MenuItem>
        <MenuItem to="#4">Ensino Médio</MenuItem>
        <MenuItem to="#5">
          Cursos <br></br>Pré-Vestibulares
        </MenuItem>
        <MenuItem to="#6">
          Cursos <br></br>Pré-Militares
        </MenuItem>
      </Stack>
    </Box>
  );
};
