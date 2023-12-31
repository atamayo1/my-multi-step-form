import { styled } from "styled-components";

export const ContentMultiStep = styled.div`
  .css-i4bv87-MuiSvgIcon-root {
    width: 43px;
    height: auto;
    display: flex;
  }
  .form-card{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 95%;
    border-radius: 10px;
    padding: 5em 2em;
    margin-left: 0.7em;
    margin-top: 2.5em;
    margin-bottom: 7em;
  }
`;

export const PrincipalTitle = styled.h2`
  color: #022959;
  font-weight: bold;
`;

export const DescriptionText = styled.p`
  color: #9699aa;
`;

export const ContentIcon = styled.div`
  width: ${({ isSmallScreen }) => isSmallScreen ? "56px" : "80px"};
  height: ${({ isSmallScreen }) => isSmallScreen ? "56px" : "80px"};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border-radius: 99px;
  img{
    width: 100%;
    height: 100%;
  }
`;
