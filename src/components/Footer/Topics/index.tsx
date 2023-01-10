import { Link } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ITopicsProps {
  children: ReactNode;
  to?: string;
  path?: string
}

export const Topics = ({ children, to, path }: ITopicsProps) => {
  return (
    <Link
      color="white"
      paddingLeft="10px"
      fontSize="15px"
      textDecoration="none"
      _hover={{
        color: "red",
        transition: "200ms",
      }}
      href={to}
    >
      {children}
    </Link>
  );
};
