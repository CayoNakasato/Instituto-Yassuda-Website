import { Flex } from "@chakra-ui/react";
import { CarouselComponent } from "../components/Carousel";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export const HomePage = () => {

  return (
    <>
      <Header />
      <Flex width={["100vw"]}>
        <CarouselComponent />
      </Flex>
      <Footer/>
    </>
  );
};
