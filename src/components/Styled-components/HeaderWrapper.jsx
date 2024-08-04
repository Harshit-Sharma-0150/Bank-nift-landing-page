import styled from "styled-components";

export const HeaderWrapper = styled.div`
  background: linear-gradient(345.55deg, #d50081 -7.36%, #5535c4 96.25%);
  padding: 65px 0;
  h1 {
    color: #ffffff;
    text-transform: uppercase;
    font-size: 44px;
    font-weight: 700;
  }
  p {
    color: #fafafa;
    font-size: 28px;
    margin: 1.5rem 0;
    padding-right: 10rem;
  }
  button {
    background: #ffffff;
    color: #333333;
    border: 1px solid #ffffff;
    border-radius: 35px;
    padding: 10px 6.5rem;
    font-size: 20px;
    font-weight: 700;
    box-shadow: 0px 0px 16px 0px #d5b4ffd4;
    transition: all 200ms ease-in-out;
  }
  button:hover {
    background-color: transparent;
    color: #fff;
    box-shadow: none;
  }
  img {
    width: 100%;
  }
`;
