import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Roger Scott",
    role: "Marketing Manager",
    image: "images/person_1.jpg",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
  },
  {
    name: "Roger Scott",
    role: "Marketing Manager",
    image: "images/person_2.jpg",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
  },
  {
    name: "Roger Scott",
    role: "Marketing Manager",
    image: "images/person_3.jpg",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
  },
  {
    name: "Roger Scott",
    role: "Marketing Manager",
    image: "images/person_1.jpg",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
  },
];

const TestimonialSection = () => {
  return (
    <section
      className="ftco-section testimony-section bg-bottom"
      style={{ backgroundImage: "url(images/bg_1.jpg)" }}
    >
      <div className="overlay"></div>

      <div className="container">
        {/* Heading */}
        <div className="row justify-content-center pb-4">
          <div className="col-md-7 text-center heading-section heading-section-white">
            <span className="subheading">Testimonial</span>
            <h2 className="mb-4">Tourist Feedback</h2>
          </div>
        </div>

        {/* Slider */}
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          loop={true}
          breakpoints={{
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="testimony-wrap py-4">
                <div className="text">

                  {/* Stars */}
                  <p className="star">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-warning me-1" />
                    ))}
                  </p>

                  {/* Text */}
                  <p className="mb-4">{item.text}</p>

                  {/* User */}
                  <div className="d-flex align-items-center">
                    <div
                      className="user-img"
                      style={{ backgroundImage: `url(${item.image})` }}
                    ></div>
                    <div className="pl-3">
                      <p className="name">{item.name}</p>
                      <span className="position">{item.role}</span>
                    </div>
                  </div>

                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialSection;
