import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styled from "styled-components";

const Layout = () => {
  return (
    <Container>
      <NavContainer>
        <Navbar />
      </NavContainer>
      <BodyContainer>
        <Outlet />
      </BodyContainer>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
const BodyContainer = styled.main`
  flex: 1 1 auto;
  background-color: red;
`;

const NavContainer = styled.header`
  background-color: white;
`;

const FooterContainer = styled.footer`
  text-align: center;
  color: white;
  background-color: green;
`;

export default Layout;
