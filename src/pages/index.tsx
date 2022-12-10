import { Flex } from "@chakra-ui/react";
import { CarouselComponent } from "../components/Carousel";
import { GradeSection } from "../components/GradeSection";
import { Header } from "../components/Header";

export const HomePage = () => {
  return (
    <>
      <Header />
      <Flex width={["100vw"]}>
        <CarouselComponent />
      </Flex>
      <GradeSection/>
    </>
  );
};
