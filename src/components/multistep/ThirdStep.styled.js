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
  .form-card{
    width: 95%;
    border-radius: 10px;
    padding: 2em;
    margin-left: 0.7em;
    margin-top: 2.5em;
    margin-bottom: 7em;
  }
`;

export const ContentCheckbox = styled.div`
  padding-right: 1em;
  border-radius: 8px;
  border: 1px solid #9699AA;
  color: #9699AA;
  .form-group-checkbox.small-screen{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 55vw;
  }
  .content-checkbox.small-screen{
    display: flex;
    width: 25%;
  }
  .content-labels-checkbox.small-screen{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: baseline;
    width: 75%;
  }
  .label-checkbox.small-screen{
    color: #022959;
    font-size: 14px;
    font-weight: bold;
  }
  .label-checkbox.small-screen.Mui-focused{
    color: #022959;
    font-weight: bold;
  }
  .label-description-checkbox.small-screen{
    font-size: 12px;
    color: #9699AA;
  }
  .label-description-checkbox.small-screen.Mui-focused{
    color: #9699AA;
  }
  .label-price-checkbox.small-screen{
    color: #483EFF;
    font-size: 12px;
  }
  .css-zun73v.Mui-checked, .css-zun73v.MuiCheckbox-indeterminate{
    color: #483EFF;
  }
  .form-group-checkbox{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 25vw;
  }
  .content-checkbox{
    display: flex;
    width: 25%;
    .Mui-checked{
      color: #483EFF;
    }
  }
  .content-labels-checkbox{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: baseline;
    width: 75%;
  }
  .label-checkbox{
    color: #022959;
    font-size: 16px;
    font-weight: bold;
  }
  .label-checkbox.Mui-focused{
    color: #022959;
    font-weight: bold;
  }
  .label-description-checkbox{
    font-size: 15px;
    color: #9699AA;
  }
  .label-description-checkbox.Mui-focused{
    color: #9699AA;
  }
  .label-price-checkbox{
    color: #483EFF;
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

export const PrincipalTitle = styled.p`
  color: #022959;
  font-weight: bold;
  font-size: 32px;
`;

export const DescriptionText = styled.p`
  color: #9699aa;
  font-size: 16px;
`;
