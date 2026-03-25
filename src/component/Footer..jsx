import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaPaperPlane,
  FaHeart,
} from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className="ftco-footer bg-bottom ftco-no-pt"
      style={{ backgroundImage: "url(images/bg_3.jpg)" }}
    >
      <div className="container">
        <div className="row mb-5">

          {/* About */}
          <div className="col-md pt-5">
            <div className="ftco-footer-widget pt-md-5 mb-4">
              <h2 className="ftco-heading-2">About</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia.
              </p>

              <ul className="ftco-footer-social list-unstyled float-md-left float-lft d-flex gap-3">
                <li>
                  <a href="#"><FaTwitter /></a>
                </li>
                <li>
                  <a href="#"><FaFacebookF /></a>
                </li>
                <li>
                  <a href="#"><FaInstagram /></a>
                </li>
              </ul>
            </div>
          </div>

          {/* Information */}
          <div className="col-md pt-5 border-left">
            <div className="ftco-footer-widget pt-md-5 mb-4 ml-md-5">
              <h2 className="ftco-heading-2">Information</h2>
              <ul className="list-unstyled">
                {[
                  "Online Enquiry",
                  "General Enquiries",
                  "Booking Conditions",
                  "Privacy and Policy",
                  "Refund Policy",
                  "Call Us",
                ].map((item, i) => (
                  <li key={i}>
                    <a href="#" className="py-2 d-block">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Experience */}
          <div className="col-md pt-5 border-left">
            <div className="ftco-footer-widget pt-md-5 mb-4">
              <h2 className="ftco-heading-2">Experience</h2>
              <ul className="list-unstyled">
                {[
                  "Adventure",
                  "Hotel and Restaurant",
                  "Beach",
                  "Nature",
                  "Camping",
                  "Party",
                ].map((item, i) => (
                  <li key={i}>
                    <a href="#" className="py-2 d-block">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="col-md pt-5 border-left">
            <div className="ftco-footer-widget pt-md-5 mb-4">
              <h2 className="ftco-heading-2">Have a Questions?</h2>

              <ul className="list-unstyled">
                <li className="d-flex mb-2">
                  <FaMapMarkerAlt className="me-2 mt-1" />
                  <span>
                    203 Fake St. Mountain View, San Francisco, California, USA
                  </span>
                </li>

                <li className="d-flex mb-2">
                  <FaPhone className="me-2 mt-1" />
                  <span>+2 392 3929 210</span>
                </li>

                <li className="d-flex">
                  <FaPaperPlane className="me-2 mt-1" />
                  <span>info@yourdomain.com</span>
                </li>
              </ul>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="row">
          <div className="col-md-12 text-center">
            <p>
              Copyright © {year} All rights reserved | Made with{" "}
              <FaHeart style={{ color: "red" }} /> by Colorlib
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
