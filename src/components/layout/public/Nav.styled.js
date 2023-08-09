import { styled } from "styled-components";

export const ContentNav = styled.div`
  .app-bar-nav {
    background-position: bottom;
    background-size: cover;
    border-radius: 0px 0px 20px 20px;
    height: 172px;
    z-index: 0;
  }
  .toolbar-top-menu {
    height: 12vh;
    background-color: transparent;
  }
`;

export const StepTopItem = styled.div``;

export const StepItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: baseline;
  align-items: center;
  margin-top: 2em;
  height: 3.7em;
`;

export const ContentItemNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 99px;
  border: 1px solid white;
  width: 2em;
  height: 2em;
  margin: 0 2em;
  font-weight: ${({ selected }) => (selected ? "bold" : "inherit")};
  color: ${({ selected }) => (selected ? "#022959" : "#fff")};
  background-color: ${({ selected }) => (selected ? "#BEE2FD" : "")};
`;

export const ContentItemTitle = styled.div``;

export const SecondaryTitle = styled.div`
  color: #abbcff;
  font-size: 11px;
  text-transform: uppercase;
`;

export const PrimaryTitle = styled.div`
  color: white;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
`;
