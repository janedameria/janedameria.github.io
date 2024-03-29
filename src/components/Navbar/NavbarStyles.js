import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  position: absolute;
  bottom: 3em;

  @media (max-width: 768px) {
    flex-direction: column;
    bottom: 2em;
    right: 0;
  }
`;

export const StyledLink = styled(NavLink)`
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

  @media (max-width: 768px) {
    font-size: 0.88rem;
  }
`;
