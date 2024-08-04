import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import logo from "../../assets/Logo.png";
import { NavbarWrapper } from "../Styled-components/NavbarWrapper";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <NavbarWrapper scrolled={scrolled}>
      <Container>
        <div className="navbar">
          <img src={logo} alt="Logo" />
        </div>
      </Container>
    </NavbarWrapper>
  );
};

export default Navbar;
