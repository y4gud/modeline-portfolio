import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


const data = [
  {
    id: 1,
    avatar: AVTR1,
    name: "Alhaja Mummy wa",
    location: " -UK",
    review:
      "She's very professional, I really love the style she chose for me, perfectly fit even when the measuring phase was virtual",
  },
  {
    id: 2,
    avatar: AVTR2,
    name: "Alhaji Daddy wa",
    location: " -UK",
    review: "She dey try!",
  },
  {
    id: 3,
    avatar: AVTR3,
    name: "Bumble Lee",
    location: " -Sweden",
    review: "Well... Like seriously? I give it to her 200%",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {data.map(({ id, avatar, name, location, review }) => {
          return (
            <SwiperSlide key={id} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className="client__name">
                {name}
                <span>
                  <small style={{ color: "cyan" }}> {location}</small>
                </span>
              </h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
