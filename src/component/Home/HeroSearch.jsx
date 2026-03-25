import { Container, Row, Col} from "react-bootstrap";
import { FaPlay, FaSearch, FaCalendarAlt, FaChevronDown } from "react-icons/fa";
import { useState } from "react";

const HeroSearch = () => {
    const [activeTab, setActiveTab] = useState("tour");
  return (
    <>
      {/* HERO SECTION */}
      <div
        className="hero-wrap js-fullheight"
        style={{ backgroundImage: "url('/images/bg_5.jpg')" }}
      >
        <div className="overlay"></div>

        <Container>
          <Row className="no-gutters slider-text js-fullheight align-items-center">
            
            <Col md={7} className="ftco-animate text-white">
              <span className="subheading">Welcome to Pacific</span>
              <h1 className="mb-4">
                Discover Your Favorite Place with Us
              </h1>
              <p className="caps">
                Travel to the any corner of the world, without going around in circles
              </p>
            </Col>

            <a
              href="https://vimeo.com/45830194"
              className="icon-video popup-vimeo d-flex align-items-center justify-content-center mb-4"
            >
              <span><FaPlay/></span>
            </a>

          </Row>
        </Container>
      </div>

      {/* SEARCH SECTION */}
      <section className="ftco-section ftco-no-pb ftco-no-pt">
        <Container>
          <Row>
            <Col md={12}>
              <div className="ftco-search d-flex justify-content-center">

                <div className="row">
                  
                  {/* TABS */}
               <section className="ftco-section ftco-no-pb ftco-no-pt">
      <div className="container">
        <div className="row">
          <div className="col-md-12">

            <div className="ftco-search d-flex justify-content-center">

              <div className="row w-100">
                
                {/* TABS */}
                <div className="col-md-12 nav-link-wrap">
                  <div className="nav nav-pills text-center justify-content-center">

                    <button
                      className={`nav-link ${activeTab === "tour" ? "active" : ""}`}
                      onClick={() => setActiveTab("tour")}
                    >
                      Search Tour
                    </button>

                    <button
                      className={`nav-link ${activeTab === "hotel" ? "active" : ""}`}
                      onClick={() => setActiveTab("hotel")}
                    >
                      Hotel
                    </button>

                  </div>
                </div>

                {/* TAB CONTENT */}
                <div className="col-md-12 tab-wrap">
                  <div className="tab-content">

                    {/* TOUR TAB */}
                    {activeTab === "tour" && (
                      <div className="tab-pane fade show active">
                        <form className="search-property-1">
                          <div className="row no-gutters">

                            <div className="col-md d-flex">
                              <div className="form-group p-4 border-0 w-100">
                                <label>Destination</label>
                                <div className="form-field">
                                  <div className="icon"><FaSearch /></div>
                                  <input type="text" className="form-control" placeholder="Search place" />
                                </div>
                              </div>
                            </div>

                            <div className="col-md d-flex">
                              <div className="form-group p-4 w-100">
                                <label>Check-in date</label>
                                <div className="form-field">
                                  <div className="icon"><FaCalendarAlt /></div>
                                  <input type="date" className="form-control" />
                                </div>
                              </div>
                            </div>

                            <div className="col-md d-flex">
                              <div className="form-group p-4 w-100">
                                <label>Check-out date</label>
                                <div className="form-field">
                                  <div className="icon"><FaCalendarAlt /></div>
                                  <input type="date" className="form-control" />
                                </div>
                              </div>
                            </div>

                            <div className="col-md d-flex">
                              <div className="form-group p-4 w-100">
                                <label>Price Limit</label>
                                <div className="form-field">
                                  <div className="select-wrap">
                                    <div className="icon"><FaChevronDown /></div>
                                    <select className="form-control">
                                      <option>$100</option>
                                      <option>$10,000</option>
                                      <option>$50,000</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="col-md d-flex">
                              <div className="form-group d-flex w-100 border-0">
                                <div className="form-field w-100 d-flex align-items-center  btn btn-primary">
                                  <input type="submit" value="Search" className="form-control" />
                                </div>
                              </div>
                            </div>

                          </div>
                        </form>
                      </div>
                    )}

                    {/* HOTEL TAB */}
                    {activeTab === "hotel" && (
                      <div className="tab-pane fade show active">
                        <form className="search-property-1">
                          <div className="row no-gutters">

                            <div className="col-lg d-flex">
                              <div className="form-group p-4 border-0 w-100">
                                <label>Destination</label>
                                <div className="form-field">
                                  <div className="icon"><FaSearch /></div>
                                  <input type="text" className="form-control" placeholder="Search place" />
                                </div>
                              </div>
                            </div>

                            <div className="col-lg d-flex">
                              <div className="form-group p-4 w-100">
                                <label>Check-in date</label>
                                <div className="form-field">
                                  <div className="icon"><FaCalendarAlt /></div>
                                  <input type="date" className="form-control" />
                                </div>
                              </div>
                            </div>

                            <div className="col-lg d-flex">
                              <div className="form-group p-4 w-100">
                                <label>Check-out date</label>
                                <div className="form-field">
                                  <div className="icon"><FaCalendarAlt /></div>
                                  <input type="date" className="form-control" />
                                </div>
                              </div>
                            </div>

                            <div className="col-lg d-flex">
                              <div className="form-group p-4 w-100">
                                <label>Price Limit</label>
                                <div className="form-field">
                                  <div className="select-wrap">
                                    <div className="icon"><FaChevronDown /></div>
                                    <select className="form-control">
                                      <option>$100</option>
                                      <option>$10,000</option>
                                      <option>$50,000</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="col-lg d-flex">
                              <div className="form-group d-flex w-100 border-0">
                                <div className="form-field w-100 d-flex align-items-center  btn btn-primary">
                                  <input type="submit" value="Search" className="form-control" />
                                </div>
                              </div>
                            </div>

                          </div>
                        </form>
                      </div>
                    )}

                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </div>
    </section>

                </div>

              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default HeroSearch;
