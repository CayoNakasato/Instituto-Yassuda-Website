import {
  Card,
  CardBody,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

export const CardArchive = () => {
  return (
    <>
      <Card flexDir={"row"}>
        <Image
          src="https://images.pexels.com/photos/7726306/pexels-photo-7726306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          maxW="80px"
          maxH={"80px"}
        />
        <CardBody>
          <Heading size="sm">Titulo</Heading>
          <Text noOfLines={1}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
            dolores ab nesciunt eveniet ipsum, voluptates incidunt soluta ipsa
            laborum fugiat nihil eius repellendus placeat odio minima, maiores
            assumenda deserunt et!
          </Text>
          <Text>Data</Text>
        </CardBody>
      </Card>
    </>
  );
};
