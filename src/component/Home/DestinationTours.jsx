import { Container, Row, Col } from "react-bootstrap";
import { FaMapMarkerAlt, FaShower, FaBed, FaUmbrellaBeach, FaMountain } from "react-icons/fa";

const tours = [
  {
    img: "/images/destination-1.jpg",
    price: "$550/person",
    days: "8 Days Tour",
    title: "Banaue Rice Terraces",
    location: "Banaue, Ifugao, Philippines",
    type: "mountain",
  },
  {
    img: "/images/destination-2.jpg",
    price: "$550/person",
    days: "10 Days Tour",
    title: "Banaue Rice Terraces",
    location: "Banaue, Ifugao, Philippines",
    type: "beach",
  },
  {
    img: "/images/destination-3.jpg",
    price: "$550/person",
    days: "7 Days Tour",
    title: "Banaue Rice Terraces",
    location: "Banaue, Ifugao, Philippines",
    type: "beach",
  },
  {
    img: "/images/destination-4.jpg",
    price: "$550/person",
    days: "8 Days Tour",
    title: "Banaue Rice Terraces",
    location: "Banaue, Ifugao, Philippines",
    type: "beach",
  },
  {
    img: "/images/destination-5.jpg",
    price: "$550/person",
    days: "10 Days Tour",
    title: "Banaue Rice Terraces",
    location: "Banaue, Ifugao, Philippines",
    type: "beach",
  },
  {
    img: "/images/destination-6.jpg",
    price: "$550/person",
    days: "7 Days Tour",
    title: "Banaue Rice Terraces",
    location: "Banaue, Ifugao, Philippines",
    type: "beach",
  },
];

const DestinationTours = () => {
  return (
    <section className="ftco-section">
      <Container>
        
        {/* HEADING */}
        <Row className="justify-content-center pb-4">
          <Col md={12} className="heading-section text-center ftco-animate">
            <span className="subheading">Destination</span>
            <h2 className="mb-4">Tour Destination</h2>
          </Col>
        </Row>

        {/* CARDS */}
        <Row>
          {tours.map((tour, index) => (
            <Col md={4} key={index} className="ftco-animate">
              <div className="project-wrap">
                
                <a
                  href="#"
                  className="img"
                  style={{ backgroundImage: `url(${tour.img})` }}
                >
                  <span className="price">{tour.price}</span>
                </a>

                <div className="text p-4">
                  <span className="days">{tour.days}</span>

                  <h3>
                    <a href="#">{tour.title}</a>
                  </h3>

                  <p className="location">
                    <FaMapMarkerAlt /> {tour.location}
                  </p>

                  <ul>
                    <li>
                      <FaShower /> 2
                    </li>
                    <li>
                      <FaBed /> 3
                    </li>
                    <li>
                      {tour.type === "mountain" ? (
                        <>
                          <FaMountain /> Near Mountain
                        </>
                      ) : (
                        <>
                          <FaUmbrellaBeach /> Near Beach
                        </>
                      )}
                    </li>
                  </ul>
                </div>

              </div>
            </Col>
          ))}
        </Row>

      </Container>
    </section>
  );
};

export default DestinationTours;
