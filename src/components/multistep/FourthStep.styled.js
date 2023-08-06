import { styled } from "styled-components";

export const ContentMultiStep = styled.div`
  .btn-next-step {
    text-transform: capitalize;
    font-size: 18px;
    background-color: #483eff;
    border-radius: 10px;
    width: 123px;
    height: 48px;
  }
  .btn-back-step {
    text-transform: capitalize;
    color: #9699aa;
    font-size: 18px;
  }
  .change-link {
    color: #483eff;
    text-decoration: none;
  }
  .change-link:hover {
    text-decoration: underline;
  }
  .price-value {
    font-size: 20px;
    color: #022959;
    font-weight: bold;
  }
`;

export const PrincipalTitle = styled.p`
  color: black;
  font-size: 37px;
  font-weight: bold;
`;

export const DescriptionText = styled.p`
  color: #9699aa;
  font-size: 25px;
`;
