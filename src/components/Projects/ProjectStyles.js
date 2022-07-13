import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const ProjectContainer = styled.div`
  background-color: #dafded;
  width: 300px;
  height: 184px;
  border-top-right-radius: 8px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  position: relative;
  margin: 0 10px;
  &::before {
    content: "";
    background: #dafded;
    position: absolute;
    top: -15px;
    width: 130px;
    height: 20px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`;

export const ProjectTitle = styled.h3`
  color: #354259;
`;

export const ProjectDesc = styled.p`
  color: #697996;
  font-size: 0.75em;
  text-align: justify;
  text-justify: inter-word;
`;

export const ProjectToolsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  font-size: 0.75em;
  font-weight: bold;

  > * {
    background-color: #354259;
    color: #fbfbfb;
    padding: 0.2em 0.3em;
    border-radius: 3px;
  }
`;

export const Container = styled.div`
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: space-around;
`;

export const LinkIcon = styled.div`
  position: absolute;
  top: 1.5em;
  right: 1em;
  color: #354259;
  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;
