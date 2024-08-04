import styled from "styled-components";
import footerBG from "../../assets/footer-bg.jpg";

export const FooterWrapper = styled.div`
  background: url(${footerBG}) no-repeat center center;
  background-size: cover;
  color: #333333;
  text-align: center;
  span {
    font-size: 32px;
  }
  h5 {
    font-size: 28px;
    font-weight: 700;
    margin: 0.85rem 0;
  }
  p {
    color: #999999;
  }
  button {
    background: linear-gradient(184.84deg, #4399eb -24.38%, #00498e 95.52%);
    padding: 0.8rem 2rem;
    border-radius: 10px;
    border: none;
    color: #fff;
    font-size: 20px;
    font-weight: 700;
    margin: 1.5rem 0rem;
  }
`;
