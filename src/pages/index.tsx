import { Flex } from "@chakra-ui/react";
import { CarouselComponent } from "../components/Carousel";
import { Header } from "../components/Header";
import { GradeSection } from "../components/Main/GradeSection";

export const HomePage = () => {
  return (
    <>
      <Header />
      <Flex width={["100vw"]} flexDirection={"column"}>
        <CarouselComponent />
        <GradeSection/>
      </Flex>
    </>
  );
};
