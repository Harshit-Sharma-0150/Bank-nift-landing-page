import { Col, Container, Row } from "reactstrap";
import { FooterWrapper } from "../Styled-components/FooterWrapper";

const Footer = () => {
  return (
    <FooterWrapper>
      <Container className="py-5">
        <Row className="py-3">
          <Col md={5} className="ms-auto">
            <span>Screening Like a Pro with </span>
            <h5>Nifty Trader</h5>
            <p>
              Stop wasting time and start winning! Get access to Nifty
              Trader&apos;s Stock Screeners today!
            </p>

            <button>Start Free Trial Now</button>
          </Col>
        </Row>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
