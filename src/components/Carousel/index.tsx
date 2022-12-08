import { Box, Flex, Image, Text } from "@chakra-ui/react";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Controller } from "swiper";
import { useState } from "react";

export const CarouselComponent = () => {
  const [controlledSwiper, setControlledSwiper] = useState(undefined);

  return (
    <Swiper
      modules={[Autoplay, Controller]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={true}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      controller={{ control: controlledSwiper }}
    >
      <SwiperSlide>
        <Flex flexDir={"column"}>
          <Image
            alt=""
            src="https://crosscut.com/sites/default/files/images/articles/schoolmentalhealth_lw_hero.jpeg"
            width={"100vw"}
            maxH={["40vh"]}
            objectFit={["cover"]}
          />
        </Flex>
      </SwiperSlide>
      <SwiperSlide>
        <Flex flexDir={"column"}>
          <Image
            alt=""
            src="https://4.bp.blogspot.com/-aj_APRKaZL4/Weuz-vE3YNI/AAAAAAACxfQ/b04kntCJjwMDGJd5oPaT5EUnU2H4xw7kQCLcBGAs/s1600/IMG_9144.jpg"
            width={"100vw"}
            maxH={["40vh"]}
            objectFit={["cover"]}
          />
        </Flex>
      </SwiperSlide>
      <SwiperSlide>
        <Flex flexDir={"column"}>
          <Image
            alt=""
            src="https://4.bp.blogspot.com/-aj_APRKaZL4/Weuz-vE3YNI/AAAAAAACxfQ/b04kntCJjwMDGJd5oPaT5EUnU2H4xw7kQCLcBGAs/s1600/IMG_9144.jpg"
            width={"100vw"}
            maxH={["40vh"]}
            objectFit={["cover"]}
          />
        </Flex>
      </SwiperSlide>
      <SwiperSlide>
        <Flex flexDir={"column"}>
          <Image
            alt=""
            src="https://4.bp.blogspot.com/-aj_APRKaZL4/Weuz-vE3YNI/AAAAAAACxfQ/b04kntCJjwMDGJd5oPaT5EUnU2H4xw7kQCLcBGAs/s1600/IMG_9144.jpg"
            width={"100vw"}
            maxH={["40vh"]}
            objectFit={["cover"]}
          />
        </Flex>
      </SwiperSlide>
    </Swiper>
  );
};
