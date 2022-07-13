import React from "react";
import { Container, StyledLink } from "./NavbarStyles";

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
