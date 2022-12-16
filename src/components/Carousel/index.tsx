import { Flex, Image } from "@chakra-ui/react";

import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";

export const CarouselComponent = () => {
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={true}
      navigation={true}
      pagination={{ clickable: true }}
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
