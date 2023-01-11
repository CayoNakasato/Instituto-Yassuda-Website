import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ChangeEvent, useState } from "react";

export interface IContactForm {
  fullName: string;
  phone: string;
  email: string;
  jobApplication: string;
  msg: string;
}

export const ContactForm = () => {
  const [resume, setResume] = useState<any>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setResume(event.target.files![0]);
  };

  const contactSchema = yup.object().shape({
    fullName: yup.string().required("Campo obrigatório"),
    phone: yup.string().required("Campo obrigatório"),
    email: yup.string().required("Campo obrigatório").email("Email invalido"),
    jobApplication: yup.string().required("Campo obrigatório"),
    msg: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IContactForm>({
    resolver: yupResolver(contactSchema),
  });

  const onSubmit = (data: IContactForm) => {
    console.log(data);
  };

  return (
    <Flex
      as="form"
      onSubmit={handleSubmit(onSubmit)}
      flexDir="column"
      gap={"1rem"}
      w={["90%", "90%", "90%", "100%"]}
      margin={["0 auto", "0 auto", "0 auto", "0"]}
      maxWidth={"600px"}
    >
      <Heading textAlign={"center"} size="md">
        Trabalhe Conosco
      </Heading>
      <Flex gap="2rem">
        <Flex flexDirection="column">
          <FormControl isInvalid={!!errors.fullName}>
            <FormLabel fontSize="14px" fontWeight="700">
              Nome Completo
            </FormLabel>
            <InputGroup alignItems={"center"}>
              <InputLeftElement>
                <AiOutlineUser color="black" size={"18px"} />
              </InputLeftElement>
              <Input
                bg="white"
                color="black"
                placeholder="Nome completo"
                {...register("fullName")}
              />
            </InputGroup>
            <FormErrorMessage>{errors.fullName?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.phone}>
            <FormLabel fontSize={"14px"} fontWeight="700">
              Celular
            </FormLabel>
            <InputGroup alignItems={"center"}>
              <InputLeftElement>
                <BsFillTelephoneFill color="black" size={"18px"} />
              </InputLeftElement>
              <Input
                bg="white"
                color="black"
                placeholder="(DDD)91111-1111"
                {...register("phone")}
              />
            </InputGroup>
            <FormErrorMessage>{errors.phone?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.email}>
            <FormLabel fontSize="14px" fontWeight="700">
              Email
            </FormLabel>
            <InputGroup alignItems={"center"}>
              <InputLeftElement>
                <AiOutlineMail color="black" size={"18px"} />
              </InputLeftElement>
              <Input
                bg="white"
                color="black"
                placeholder="Seu email"
                {...register("email")}
              />
            </InputGroup>
            {!!errors.email ? (
              <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
            ) : (
              <FormHelperText color="white">email@email.com</FormHelperText>
            )}
          </FormControl>
        </Flex>
        <Flex flexDirection="column">
          <FormControl isInvalid={!!errors.jobApplication}>
            <FormLabel fontSize="14px" fontWeight="700">
              Cargo Pretendido
            </FormLabel>
            <InputGroup alignItems={"center"}>
              <InputLeftElement>
                <FaUserTie color="black" size={"18px"} />
              </InputLeftElement>
              <Input
                bg="white"
                color="black"
                placeholder="Seu cargo pretendido"
                {...register("jobApplication")}
              />
            </InputGroup>
            {!!errors.jobApplication && (
              <FormErrorMessage>
                {!!errors.jobApplication?.message}
              </FormErrorMessage>
            )}
          </FormControl>
          <FormControl isInvalid={!!errors.msg}>
            <FormLabel fontSize="14px" fontWeight="700">
              Mensagem
            </FormLabel>
            <Textarea
              resize={"none"}
              bg="white"
              color="black"
              placeholder="Digite sua mensagem"
              {...register("msg")}
            />
            <FormErrorMessage>{errors.msg?.message}</FormErrorMessage>
          </FormControl>
          <FormControl>
            <FormLabel
              fontSize="14px"
              fontWeight="700"
              paddingTop={"1rem"}
              textAlign="center"
            >
              Envie Seu Curriculo
            </FormLabel>
            <Input
              bg="transparent"
              color="black"
              onChange={handleChange}
              type="file"
              border="none"
            />
          </FormControl>
        </Flex>
      </Flex>
      <Button width={"100%"} color={"black"} bg={"lightsalmon"} type="submit">
        Enviar
      </Button>
    </Flex>
  );
};
