import { Container, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const destinations = [
  {
    name: "Philippines",
    tours: "8 Tours",
    img: "/images/place-1.jpg",
  },
  {
    name: "Canada",
    tours: "2 Tours",
    img: "/images/place-2.jpg",
  },
  {
    name: "Thailand",
    tours: "5 Tours",
    img: "/images/place-3.jpg",
  },
  {
    name: "Australia",
    tours: "5 Tours",
    img: "/images/place-4.jpg",
  },
  {
    name: "Greece",
    tours: "7 Tours",
    img: "/images/place-5.jpg",
  },
];

const Destination = () => {
  return (
    <section
      className="ftco-section img ftco-select-destination"
      style={{ backgroundImage: "url(/images/bg_3.jpg)" }}
    >
      {/* HEADING */}
      <Container>
        <Row className="justify-content-center pb-4">
          <Col md={12} className="heading-section text-center ftco-animate">
            <span className="subheading">Pacific Provide Places</span>
            <h2 className="mb-4">Select Your Destination</h2>
          </Col>
        </Row>
      </Container>

      {/* CAROUSEL */}
      <Container className="container-2">
        <Row>
          <Col md={12}>
            <div className="carousel-destination ftco-animate">
              
              <Swiper
                spaceBetween={20}
                slidesPerView={4}
                loop={true}
                breakpoints={{
                  0: { slidesPerView: 1 },
                  576: { slidesPerView: 2 },
                  768: { slidesPerView: 3 },
                  992: { slidesPerView: 4 },
                }}
              >
                {destinations.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="item">
                      <div className="project-destination">
                        <a
                          href="#"
                          className="img"
                          style={{ backgroundImage: `url(${item.img})` }}
                        >
                          <div className="text">
                            <h3>{item.name}</h3>
                            <span>{item.tours}</span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Destination;
