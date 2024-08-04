import Slider from "react-slick";

import { TestimonialsWrapper } from "../Styled-components/TestimonialsWrapper";
import UserCard from "../Cards/UserCard";

const TestimonialsSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2.1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    pauseOnHover: false,
    autoplaySpeed: 0,
    cssEase: "linear",
    ltr: true,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settings2 = {
    dots: false,
    infinite: true,
    slidesToShow: 2.1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    pauseOnHover: false,
    autoplaySpeed: 0,
    cssEase: "linear",
    rtl: true,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <TestimonialsWrapper>
      <h2 className="client-testimonials-heading fw-bold my-5 text-center">
        Client Testimonials
      </h2>

      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <UserCard
              profileImage="https://tse3.mm.bing.net/th?id=OIP.PztowP3ljup0SM75tkDimQHaHa&pid=Api&P=0&h=180"
              name="Merry"
              about="Very informative and handy tool for trading. Kudos to the developers. Keep rocking with new enhancements. All data streaming without manual refreshment will be the milestone for this app. Best wishes"
            />
          </div>

          <div>
            <UserCard
              profileImage="https://tse3.mm.bing.net/th?id=OIP.PztowP3ljup0SM75tkDimQHaHa&pid=Api&P=0&h=180"
              name="Merry"
              about="Very informative and handy tool for trading. Kudos to the developers. Keep rocking with new enhancements. All data streaming without manual refreshment will be the milestone for this app. Best wishes"
            />
          </div>

          <div>
            <UserCard
              profileImage="https://tse3.mm.bing.net/th?id=OIP.PztowP3ljup0SM75tkDimQHaHa&pid=Api&P=0&h=180"
              name="Merry"
              about="Very informative and handy tool for trading. Kudos to the developers. Keep rocking with new enhancements. All data streaming without manual refreshment will be the milestone for this app. Best wishes"
            />
          </div>

          <div>
            <UserCard
              profileImage="https://tse3.mm.bing.net/th?id=OIP.PztowP3ljup0SM75tkDimQHaHa&pid=Api&P=0&h=180"
              name="Merry"
              about="Very informative and handy tool for trading. Kudos to the developers. Keep rocking with new enhancements. All data streaming without manual refreshment will be the milestone for this app. Best wishes"
            />
          </div>

          <div>
            <UserCard
              profileImage="https://tse3.mm.bing.net/th?id=OIP.PztowP3ljup0SM75tkDimQHaHa&pid=Api&P=0&h=180"
              name="Merry"
              about="Very informative and handy tool for trading. Kudos to the developers. Keep rocking with new enhancements. All data streaming without manual refreshment will be the milestone for this app. Best wishes"
            />
          </div>
        </Slider>

        <Slider {...settings2}>
          <div>
            <UserCard
              profileImage="https://tse3.mm.bing.net/th?id=OIP.PztowP3ljup0SM75tkDimQHaHa&pid=Api&P=0&h=180"
              name="Merry"
              about="Very informative and handy tool for trading. Kudos to the developers. Keep rocking with new enhancements. All data streaming without manual refreshment will be the milestone for this app. Best wishes"
            />
          </div>

          <div>
            <UserCard
              profileImage="https://tse3.mm.bing.net/th?id=OIP.PztowP3ljup0SM75tkDimQHaHa&pid=Api&P=0&h=180"
              name="Merry"
              about="Very informative and handy tool for trading. Kudos to the developers. Keep rocking with new enhancements. All data streaming without manual refreshment will be the milestone for this app. Best wishes"
            />
          </div>

          <div>
            <UserCard
              profileImage="https://tse3.mm.bing.net/th?id=OIP.PztowP3ljup0SM75tkDimQHaHa&pid=Api&P=0&h=180"
              name="Merry"
              about="Very informative and handy tool for trading. Kudos to the developers. Keep rocking with new enhancements. All data streaming without manual refreshment will be the milestone for this app. Best wishes"
            />
          </div>

          <div>
            <UserCard
              profileImage="https://tse3.mm.bing.net/th?id=OIP.PztowP3ljup0SM75tkDimQHaHa&pid=Api&P=0&h=180"
              name="Merry"
              about="Very informative and handy tool for trading. Kudos to the developers. Keep rocking with new enhancements. All data streaming without manual refreshment will be the milestone for this app. Best wishes"
            />
          </div>

          <div>
            <UserCard
              profileImage="https://tse3.mm.bing.net/th?id=OIP.PztowP3ljup0SM75tkDimQHaHa&pid=Api&P=0&h=180"
              name="Merry"
              about="Very informative and handy tool for trading. Kudos to the developers. Keep rocking with new enhancements. All data streaming without manual refreshment will be the milestone for this app. Best wishes"
            />
          </div>
        </Slider>
      </div>
    </TestimonialsWrapper>
  );
};

export default TestimonialsSlider;
