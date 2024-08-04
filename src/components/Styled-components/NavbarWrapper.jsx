import styled from "styled-components";

export const NavbarWrapper = styled.div`
  position: fixed;
  width: 100%;
  border-bottom: 1px solid #fafafa;
  z-index: 999;
  background-color: ${({ scrolled }) =>
    scrolled ? "#72727291" : "transparent"};
  transition: background-color 0.3s ease;
`;
