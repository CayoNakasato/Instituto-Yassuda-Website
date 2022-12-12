import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { CarouselComponent } from "../components/Carousel";
import { Footer } from "../components/Footer";
import { GradeSection } from "../components/GradeSection";
import { ContentSection } from "../components/GradeSection/ContentSection";
import ImageSchool from "../assets/escola 1.jpeg";
import { Header } from "../components/Header";
import { MilitarySection } from "../components/MilitarySection";

export const HomePage = () => {

  return (
    <Box width="100vw">
      <Header />
      <Flex width={["100vw"]}>
        <CarouselComponent />
      </Flex>
      <Box>
        <GradeSection hightlight={true}>
          <Heading textAlign={["center"]}>Quem somos</Heading>
          <ContentSection img={ImageSchool}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni sed
            neque adipisci tempora quisquam porro, at dolore quas dignissimos
            totam in eos sint iste eligendi, natus explicabo, libero maxime?
            Culpa.
          </ContentSection>
          <ContentSection img={ImageSchool} reverse>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni sed
            neque adipisci tempora quisquam porro, at dolore quas dignissimos
            totam in eos sint iste eligendi, natus explicabo, libero maxime?
            Culpa.
          </ContentSection>
          <ContentSection img={ImageSchool}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni sed
            neque adipisci tempora quisquam porro, at dolore quas dignissimos
            totam in eos sint iste eligendi, natus explicabo, libero maxime?
            Culpa.
          </ContentSection>
        </GradeSection>
        <GradeSection>
          <Heading textAlign={["center"]}>Quem somos</Heading>
          <ContentSection img={ImageSchool}>
            <Text>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
              sed neque adipisci tempora quisquam porro, at dolore quas
              dignissimos totam in eos sint iste eligendi, natus explicabo,
              libero maxime? Culpa.
            </Text>
            <Text>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
              sed neque adipisci tempora quisquam porro, at dolore quas
              dignissimos totam in eos sint iste eligendi, natus explicabo,
              libero maxime? Culpa.
            </Text>
          </ContentSection>
          <ContentSection img={ImageSchool} reverse>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni sed
            neque adipisci tempora quisquam porro, at dolore quas dignissimos
            totam in eos sint iste eligendi, natus explicabo, libero maxime?
            Culpa.
          </ContentSection>
          <ContentSection img={ImageSchool}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni sed
            neque adipisci tempora quisquam porro, at dolore quas dignissimos
            totam in eos sint iste eligendi, natus explicabo, libero maxime?
            Culpa.
          </ContentSection>
        </GradeSection>
        <GradeSection hightlight>
          <Heading textAlign={["center"]}>Quem somos</Heading>
          <ContentSection img={ImageSchool}>
            <Text>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
              sed neque adipisci tempora quisquam porro, at dolore quas
              dignissimos totam in eos sint iste eligendi, natus explicabo,
              libero maxime? Culpa.
            </Text>
            <Text>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
              sed neque adipisci tempora quisquam porro, at dolore quas
              dignissimos totam in eos sint iste eligendi, natus explicabo,
              libero maxime? Culpa.
            </Text>
          </ContentSection>
          <ContentSection img={ImageSchool} reverse>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni sed
            neque adipisci tempora quisquam porro, at dolore quas dignissimos
            totam in eos sint iste eligendi, natus explicabo, libero maxime?
            Culpa.
          </ContentSection>
          <ContentSection img={ImageSchool}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni sed
            neque adipisci tempora quisquam porro, at dolore quas dignissimos
            totam in eos sint iste eligendi, natus explicabo, libero maxime?
            Culpa.
          </ContentSection>
        </GradeSection>
      </Box>

      <MilitarySection/>


      <Footer/>
    </Box>
       
  );
};
