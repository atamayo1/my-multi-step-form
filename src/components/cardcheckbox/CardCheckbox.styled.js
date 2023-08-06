import { styled } from "styled-components";

export const ContentCard = styled.div`
  .card.selected {
    border: 1px solid #483eff;
  }
  .card {
    border: 1px solid #d6d9e6;
    background-color: transparent;
  }
  .card:hover {
    border: 1px solid #483eff;
    cursor: pointer;
  }
`;

export const ContentProIcon = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: #483eff;
  border-radius: 99px;
  margin-bottom: 2em;
`;

export const ContentAdvancedIcon = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: #f9818e;
  border-radius: 99px;
  margin-bottom: 2em;
`;

export const ContentArcadeIcon = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: #ffaf7e;
  border-radius: 99px;
  margin-bottom: 2em;
`;