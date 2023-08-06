import { styled } from "styled-components";

export const ContentMultiStep = styled.div`
  .btn-next-step {
    text-transform: capitalize;
    font-size: 18px;
    background-color: #022959;
    border-radius: 10px;
    width: 123px;
    height: 48px;
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
  .css-i4bv87-MuiSvgIcon-root {
    width: 20px;
    height: auto;
    display: flex;
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
  font-weight: bold;
  font-size: 24px;
`;

export const DescriptionText = styled.p`
  color: #9699aa;
  font-size: 16px;
`;
