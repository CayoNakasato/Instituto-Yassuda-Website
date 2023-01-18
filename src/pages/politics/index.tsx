import { Box } from "@chakra-ui/react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { UseTerms } from "../../components/UseTerms";

export const PolitcsPage = () => {
  return (
    <Box width="100%">
      <Header external />
      <UseTerms />
      <Footer />
    </Box>
  );
};
