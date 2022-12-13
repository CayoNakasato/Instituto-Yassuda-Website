import { Link } from "@chakra-ui/react"
import { ReactNode } from "react";

interface ITopicsProps{
    children: ReactNode
}

export const Topics = ({children}: ITopicsProps) =>{
    return (
        <Link
            color="#000000"
            paddingLeft="10px"
            fontSize="15px"
            text-decoration="none"
            href="#"
            _hover={{
                color: "red",
                transition: "200ms",
            }}
            >
            {children}
          </Link>
    )
}