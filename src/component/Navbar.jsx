import { Navbar, Nav, Container } from "react-bootstrap";
import { useState, useEffect } from "react";

const MainNavbar = () => {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll effect (for .scrolled class from your CSS)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      expanded={expanded}
      className={`ftco_navbar ftco-navbar-light ${
        scrolled ? "scrolled awake" : ""
      }`}
      id="ftco-navbar"
      fixed="top"
    >
      <Container>
        <Navbar.Brand href="/">
          Pacific<span>Travel Agency</span>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="ftco-nav"
          onClick={() => setExpanded(!expanded)}
        >
          ☰ Menu
        </Navbar.Toggle>

        <Navbar.Collapse id="ftco-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/" className="nav-link active">
              Home
            </Nav.Link>
            <Nav.Link href="/about" className="nav-link">
              About
            </Nav.Link>
            <Nav.Link href="/destination" className="nav-link">
              Destination
            </Nav.Link>
            <Nav.Link href="/hotel" className="nav-link">
              Hotel
            </Nav.Link>
            <Nav.Link href="/blog" className="nav-link">
              Blog
            </Nav.Link>
            <Nav.Link href="/contact" className="nav-link">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;
