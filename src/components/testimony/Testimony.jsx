import React from "react";
import "./testimony.css";
import Avatar1 from "../../assets/2.png";
import Avatar2 from "../../assets/6.png";
import Avatar3 from "../../assets/4.png";

import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: Avatar1,
    name: "Bob The Builder",
    review:
      "Tyler has great work ethic and has showcased his ability to work effectively within a team setting.",
  },
  {
    avatar: Avatar2,
    name: "Rosetta Stone",
    review:
      "His ability to learn and implement new ideas quickly and effectively has been impressive. Safe to say he has learned another language outside of English",
  },
  {
    avatar: Avatar3,
    name: "Dennis Rodman",
    review:
      "I don't know as much about javascript as I do basketball. However, I do know is his presentation on using React and UseState methods was a slam dunk!",
  },
];

const Testimony = () => {
  return (
    <section id="testimony">
      <h5> Review from Clients</h5>
      <h2>
        {" "}
        Testimonials "(This section will be replaced with real testimonials
        moving forward )"
      </h2>

      <Swiper
        className="container testimony__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {data.map(({ avatar, name, review, index }) => {
          return (
            <SwiperSlide key={index} className="testimonyArticle">
              <div className="client__avatar">
                <img src={avatar} alt={name}></img>
              </div>

              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimony;
