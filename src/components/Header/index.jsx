import React from "react";
import { HeaderWrapper } from "../Styled-components/HeaderWrapper";
import { Col, Container, Row } from "reactstrap";
import HeaderImage from "../../assets/HeaderImage.png";

const Header = () => {
  return (
    <HeaderWrapper>
      <Container className="py-5">
        <Row className="py-5">
          <Col xs={12} md={7} className="d-grid align-items-center">
            <div>
              {" "}
              <h1>Stock Screening Simplifed!</h1>
              <p>
                Find Winning Stock Faster with Nifty Trader&apos;s Advanced
                Stock Screening Tool
              </p>
              <button> Free Trail</button>
            </div>
          </Col>
          <Col xs={12} md={5}>
            <img src={HeaderImage} />
          </Col>
        </Row>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
