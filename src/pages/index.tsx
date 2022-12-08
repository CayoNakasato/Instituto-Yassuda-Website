import { Flex } from "@chakra-ui/react";
import { CarouselComponent } from "../components/Carousel";
import { Header } from "../components/Header";

export const HomePage = () => {
  return (
    <>
      <Header />
      <Flex width={["100vw"]}>
        <CarouselComponent />
      </Flex>
    </>
  );
};
