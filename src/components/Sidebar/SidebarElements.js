import styled from "styled-components";

import { Link as LinkS } from "react-scroll";

export const SidebarContainer = styled.aside`
  z-index: 9999;
  position: fixed;
  width: 100%;
  height: 100%;
  background: #253746;
  display: grid;
  align-items: top;
  top: 0;
  padding-top: 80px;
  padding-left: 15px;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  left: ${({ isOpen }) => (isOpen ? "0" : "100%")};
`;

export const Icon = styled.div`
  position: absolute;
  top: 46px;
  left: 52px;
  background: transparent;
  img {
    width: 26px;
    cursor: pointer;
  }
`;

export const SidebarWrapper = styled.div`
  color: #fff;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);

  @media screen and (max-width: 768px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const SidebarLinks = styled(LinkS)`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 600;
  line-height: 50px;
  letter-spacing: -0.015em;
  display: flex;
  align-items: center;
  justify-content: left;
  font-size: 1.4rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #ec8f6a;
    transition: 0.2s ease-in-out;
  }
`;

export const SidebarLogo = styled.div`
  display: flex;
  justify-content: center;
  img {
    margin-left: -15px;
    width: 171px;
    height: 53px;
  }

  @media screen and (max-width: 320px) {
    img {
      margin-top: -70px;
    }
  }
`;
