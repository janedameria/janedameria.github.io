import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  position: absolute;
  bottom: 3em;
`;

const StyledLink = styled(NavLink)`
  color: #c2ded1;
  font-weight: bold;
  font-family: "Noto Sans JP", sans-serif;
  margin: 0 10px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    opacity: 0.8;
  }
  &.active {
    text-decoration: underline;
  }
`;

const Navbar = () => {
  const NavbarItems = [
    {
      path: "/",
      name: "/home",
    },
    {
      path: "/about",
      name: "/about",
    },
    {
      path: "/experience",
      name: "/experience",
    },
    {
      path: "/projects",
      name: "/projects",
    },
  ];
  return (
    <Container>
      {NavbarItems.map((v, i) => (
        <StyledLink key={i} to={v.path}>
          {v.name}
        </StyledLink>
      ))}
    </Container>
  );
};

export default Navbar;
