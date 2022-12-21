import { Box, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import { CarouselComponent } from "../components/Carousel";
import { Footer } from "../components/Footer";
import { GradeSection } from "../components/GradeSection";
import { ContentSection } from "../components/GradeSection/ContentSection";
import ImageSchool from "../assets/escola.jpeg";
import { Header } from "../components/Header";
import { MilitarySection } from "../components/MilitarySection";
import { InfoHighlightsSection } from "../components/InfoHighlightsSection";

export const HomePage = () => {
  return (
    <Box width="100%">
      <Header />
      <Flex
        width={["100%"]}
        marginTop={["1rem", "1rem", "1rem", "1rem", "1rem"]}
      >
        <CarouselComponent />
      </Flex>

      <InfoHighlightsSection />

      <Box>
        <GradeSection hightlight>
          <Heading id="1" textAlign={["center"]} size="2xl">
            Quem somos
          </Heading>
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
          <Heading id="2" textAlign={["center"]} size="2xl">
            Fundamental I
          </Heading>
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
          <Heading id="3" textAlign={["center"]} size="2xl">
            Fundamental II
          </Heading>
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
        <GradeSection>
          <Heading id="4" textAlign={["center"]} size="2xl">
            Ensino Médio
          </Heading>
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
          <Heading id="5" textAlign={["center"]} size="2xl">
            Curso Pré-Vestibular
          </Heading>
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

      <MilitarySection />

      <Footer />
    </Box>
  );
};
