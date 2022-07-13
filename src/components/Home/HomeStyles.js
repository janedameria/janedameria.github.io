import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  width: 100vw;
  margin: 0 auto;
`;

export const ContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const MyImage = styled.img`
  width: 200px;
  animation-duration: 10s;

  @media (max-width: 768px) {
    width: 140px;
    height: 140px;
  }
`;
