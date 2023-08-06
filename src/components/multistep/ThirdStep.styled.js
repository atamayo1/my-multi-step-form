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
  .css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root.Mui-checked,
  .css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root.MuiCheckbox-indeterminate {
    color: #483eff;
  }
`;

export const ContentCheckbox = styled.div`
  padding-right: 1em;
  border-radius: 8px;
  .css-j204z7-MuiFormControlLabel-root .MuiFormControlLabel-label {
    color: #022959;
    font-weight: bold;
  }
  .css-u4tvz2-MuiFormLabel-root {
    color: #9699aa;
  }
  .css-u4tvz2-MuiFormLabel-root.Mui-focused {
    color: #9699aa !important;
  }
  label {
    color: #483eff !important;
    font-size: 20px;
  }
  &.selected {
    border: 1px solid #483eff;
    background-color: rgba(72, 62, 255, 0.1);
  }
  &:hover {
    border: 1px solid #483eff;
    background-color: rgba(72, 62, 255, 0.1);
  }
`;

export const PrincipalTitle = styled.h2`
  color: black;
  font-weight: bold;
  font-size: 37px;
`;

export const DescriptionText = styled.p`
  color: #9699aa;
  font-size: 25px;
`;
