import { Container, Row, Col } from "react-bootstrap";
import { FaMapMarkedAlt, FaRoute, FaUserTie, FaParachuteBox } from "react-icons/fa";

const Services = () => {
  return (
    <section className="ftco-section services-section">
      <Container>
        <Row className="d-flex">
          
          {/* LEFT CONTENT */}
          <Col
            md={6}
            className="order-md-last heading-section pl-md-5 ftco-animate d-flex align-items-center"
          >
            <div className="w-100">
              <span className="subheading">Welcome to Pacific</span>
              <h2 className="mb-4">It's time to start your adventure</h2>
              
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </p>

              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean. A small river named Duden flows by their
                place and supplies it with the necessary regelialia.
              </p>

              <p>
                <a href="#" className="btn btn-primary py-3 px-4">
                  Search Destination
                </a>
              </p>
            </div>
          </Col>

          {/* RIGHT SERVICES GRID */}
          <Col md={6}>
            <Row>
              
              {/* CARD 1 */}
              <Col
                md={12}
                lg={6}
                className="d-flex align-self-stretch ftco-animate"
              >
                <div
                  className="services services-1 color-1 d-block img"
                  style={{ backgroundImage: "url(/images/services-1.jpg)" }}
                >
                  <div className="icon d-flex align-items-center justify-content-center">
                    <FaParachuteBox />
                  </div>
                  <div className="media-body">
                    <h3 className="heading mb-3">Activities</h3>
                    <p>
                      A small river named Duden flows by their place and supplies
                      it with the necessary
                    </p>
                  </div>
                </div>
              </Col>

              {/* CARD 2 */}
              <Col
                md={12}
                lg={6}
                className="d-flex align-self-stretch ftco-animate"
              >
                <div
                  className="services services-1 color-2 d-block img"
                  style={{ backgroundImage: "url(/images/services-2.jpg)" }}
                >
                  <div className="icon d-flex align-items-center justify-content-center">
                    <FaRoute />
                  </div>
                  <div className="media-body">
                    <h3 className="heading mb-3">Travel Arrangements</h3>
                    <p>
                      A small river named Duden flows by their place and supplies
                      it with the necessary
                    </p>
                  </div>
                </div>
              </Col>

              {/* CARD 3 */}
              <Col
                md={12}
                lg={6}
                className="d-flex align-self-stretch ftco-animate"
              >
                <div
                  className="services services-1 color-3 d-block img"
                  style={{ backgroundImage: "url(/images/services-3.jpg)" }}
                >
                  <div className="icon d-flex align-items-center justify-content-center">
                    <FaUserTie />
                  </div>
                  <div className="media-body">
                    <h3 className="heading mb-3">Private Guide</h3>
                    <p>
                      A small river named Duden flows by their place and supplies
                      it with the necessary
                    </p>
                  </div>
                </div>
              </Col>

              {/* CARD 4 */}
              <Col
                md={12}
                lg={6}
                className="d-flex align-self-stretch ftco-animate"
              >
                <div
                  className="services services-1 color-4 d-block img"
                  style={{ backgroundImage: "url(/images/services-4.jpg)" }}
                >
                  <div className="icon d-flex align-items-center justify-content-center">
                    <FaMapMarkedAlt />
                  </div>
                  <div className="media-body">
                    <h3 className="heading mb-3">Location Manager</h3>
                    <p>
                      A small river named Duden flows by their place and supplies
                      it with the necessary
                    </p>
                  </div>
                </div>
              </Col>

            </Row>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default Services;
