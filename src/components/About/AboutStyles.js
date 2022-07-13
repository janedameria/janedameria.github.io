import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const ContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.justify_center && "center"};
  align-items: center;
  margin: 1em;
  width: 50%;
  text-align: center;
`;

export const ContainerIcon = styled.div`
  color: #fbfbfb;
  margin-top: 1em;

  > * {
    margin: 0 0.3em;
    color: #99cdb5;

    &:hover {
      opacity: 0.8;
      cursor: pointer;
    }
  }
`;

export const MyImage = styled.img`
  width: 220px;
  border-radius: 5%;
  margin: 1em;

  @media (max-width: 768px) {
    width: 180px;
  }
`;
