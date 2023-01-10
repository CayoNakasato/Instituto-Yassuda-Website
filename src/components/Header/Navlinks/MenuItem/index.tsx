import { Link, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import { IconType } from "react-icons";

interface MenuItemProps {
  children: ReactNode;
  to: string;
  highlight?: boolean;
  external?: boolean
}

export const MenuItem = ({
  children,
  to,
  highlight,
  external,
  ...rest
}: MenuItemProps) => {
  return (
    <Link href={external? `/${to}`: to} _hover={{ textDecor: "none" }}>
      <Text
        textAlign={["left","left","center","center",]}
        display={"flex"}
        alignItems="center"
        align={"center"}
        fontSize={["18px", "17px"]}
        gap="2"
        color={{ base: highlight ? "blue.900" : "gray.900" }}
        _hover={{ color: "red.500" }}
        {...rest}
      >
        {children}
      </Text>
    </Link>
  );
};
