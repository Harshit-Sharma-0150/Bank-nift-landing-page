import { Col, Container, Row } from "reactstrap";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import arrow from "./assets/arrow-right.png";
import FeatureCard from "./components/Cards/FeatureCard";
import { featuresData } from "./db";
import HomeCarousal from "./components/Carousal";
import TestimonialsSlider from "./components/Testimonials";
import MyTable from "./components/Table";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";

import facebookIcon from "./assets/social-media-icons/facebookIcon.png";
import instagramIcon from "./assets/social-media-icons/InstagramIcon.png";
import linkedInIcon from "./assets/social-media-icons/linkedInIcon.png";
import telegramIcon from "./assets/social-media-icons/telegramIcon.png";
import twitterIcon from "./assets/social-media-icons/twitterIcon.png";
import YTIcon from "./assets/social-media-icons/youtubeIcon.png";

function App() {
  return (
    <>
      <Navbar />

      <Header />
      <Container>
        <Row>
          <Col md={12} className="m-5 text-center">
            <h2 className="secondary-heading">
              The Ultimate Destination For Stock Market Insight
            </h2>
            <p className="paragraph">
              Join 1 million Traders & Investors who trust Nifty Trader for
              smart trading & real-time stock insights.
            </p>
            <button className="secondary-button">
              Explore Features <img src={arrow} />
            </button>
          </Col>
        </Row>
      </Container>
      <HomeCarousal />

      <Container>
        <Row>
          {featuresData.map((item, index) => {
            const Icon = item.icon;
            return (
              <Col md={3} key={index} className="d-grid p-1">
                <FeatureCard data={item} Icon={<Icon />} />
              </Col>
            );
          })}
        </Row>
      </Container>

      <Container>
        <Row className="getFreeTrail-section text-white py-4 px-5 align-items-center my-5 ">
          <Col md={9} className="py-4">
            <h2 className="fw-bold display-6">
              Missing Trades Because of Outdated Data?
            </h2>
            <p className="h3 fw-normal">
              Get the Live Market Screening with Dynamic Filters
            </p>
          </Col>
          <Col md={3}>
            <button className="my-btn">Get free trail</button>
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <TestimonialsSlider />
          </Col>
        </Row>

        <Row>
          <Col>
            <MyTable />
          </Col>
        </Row>

        <Row>
          <Col md={10} className="m-auto">
            <FAQs />
          </Col>
        </Row>
      </Container>
      <Footer />

      <Container fluid className="mt-4 bg-black py-2">
        <Container>
          <Row>
            <Col md={6}>
              <div className="d-flex gap-2">
                <a href="#">
                  <img
                    src={facebookIcon}
                    className="social-icons"
                    alt="Facebook Icon"
                  />
                </a>
                <a href="#">
                  <img
                    src={twitterIcon}
                    className="social-icons"
                    alt="Twitter Icon"
                  />
                </a>
                <a href="#">
                  <img
                    src={YTIcon}
                    className="social-icons"
                    alt="Youtube Icon"
                  />
                </a>
                <a href="#">
                  <img
                    src={linkedInIcon}
                    className="social-icons"
                    alt="LinkedIn Icon"
                  />
                </a>

                <a href="#">
                  <img
                    src={instagramIcon}
                    className="social-icons"
                    alt="Instagram Icon"
                  />
                </a>

                <a href="#">
                  <img
                    src={telegramIcon}
                    className="social-icons"
                    alt="Telegram Icon"
                  />
                </a>
              </div>
            </Col>
            <Col md={6} className="text-end">
              <a href="www.niftytrader.in" className="text-white fw-bold">
                www.niftytrader.in
              </a>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default App;
