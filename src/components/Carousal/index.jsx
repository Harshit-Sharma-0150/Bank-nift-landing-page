import { useState } from "react";

import { Autoplay, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";

import sliderImage1 from "../../assets/sliderImages/1.png";
import sliderImage2 from "../../assets/sliderImages/2.png";
import sliderImage3 from "../../assets/sliderImages/3.png";
import sliderImage4 from "../../assets/sliderImages/4.png";
import sliderImage5 from "../../assets/sliderImages/5.png";
import { SliderWrapper } from "../Styled-components/SliderWrapper";

const HomeCarousal = () => {
  const sliderImages = [
    {
      sliderSrc: sliderImage1,
      heading: "Options Screener",
    },
    {
      sliderSrc: sliderImage2,
      heading: "Live Market Screener",
    },
    {
      sliderSrc: sliderImage3,
      heading: "Option Chain",
    },
    {
      sliderSrc: sliderImage4,
      heading: "Options Simulator",
    },
    {
      sliderSrc: sliderImage5,
      heading: "Advance Stock Screener",
    },
  ];

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    const activeIndex = swiper.realIndex;
    setActiveSlideIndex(activeIndex);
  };

  return (
    <SliderWrapper>
      <h4 className="text-white fw-semibold text-center pt-5">
        {sliderImages[activeSlideIndex]?.heading}
      </h4>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        loop={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 55,
          stretch: 1,
          depth: -85,
          modifier: 1,
          slideShadows: false,
        }}
        autoplay={{ delay: 3000 }}
        modules={[Autoplay, EffectCoverflow]}
        onSlideChange={handleSlideChange}
        className="mySwiper h-full"
      >
        {sliderImages?.map((item) => (
          <SwiperSlide key={item?.heading}>
            <img src={item?.sliderSrc} alt={`${item?.heading} Image`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderWrapper>
  );
};

export default HomeCarousal;
