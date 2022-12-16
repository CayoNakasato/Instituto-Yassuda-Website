import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      ".swiper-pagination-bullet": {
        background: "red",
        width: "18px",
        height: "18px",
      },
      ".swiper-button-prev": {
        color: "red",
      },
      ".swiper-button-next": {
        color: "red",
      },
      ".swiper": {
        width: "99%",
        height: "300px",
      }
    },
  },
});
