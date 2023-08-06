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
  .btn-next-step:hover {
    background-color: #928cff;
  }
  .btn-back-step {
    text-transform: capitalize;
    color: #9699aa;
    font-size: 18px;
    font-weight: bold;
  }
  .btn-back-step:hover {
    color: #022959;
  }
  .change-link {
    color: #9699aa;
  }
  .change-link:hover {
    color: #483eff;
    text-decoration: underline;
  }
  .price-value {
    font-size: 20px;
    color: #022959;
    font-weight: bold;
  }
  .form-card{
    width: 95%;
    border-radius: 10px;
    padding: 2em;
    margin-left: 0.7em;
    margin-top: 2.5em;
    margin-bottom: 7em;
  }
`;

export const PrincipalTitle = styled.p`
  color: black;
  font-size: 24px;
  font-weight: bold;
`;

export const DescriptionText = styled.p`
  color: #9699aa;
  font-size: 16px;
`;
