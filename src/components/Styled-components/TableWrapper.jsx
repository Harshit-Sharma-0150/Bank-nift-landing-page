import styled from "styled-components";

export const TableWrapper = styled.div`
  h4 {
    font-size: 32px;
    text-align: center;
    margin: 3rem 0;
  }
  img {
    width: 20px;
  }
  button {
    border: none;
    border-radius: 5px;
    background: linear-gradient(270deg, #236ad4 0%, #6912cc 127.86%) !important;
    transition: all 1s ease-in-out;
  }
  button:hover {
    background: transparent !important;
    border: 1px solid #236ad4 !important;
    color: #236ad4 !important;
  }
`;
