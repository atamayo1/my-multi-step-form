import Container from "@mui/material/Container";
import {
  ContentCheckbox,
  ContentMultiStep,
  DescriptionText,
  PrincipalTitle,
} from "./ThirdStep.styled";
import {
  Box,
  Button,
  Card,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Stack,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useMediaQuery } from "@material-ui/core";

const ThirdStep = () => {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const navigate = useNavigate();
  const { form, changed } = useForm({});
  const [secondData, setSecondData] = useState({});
  const [principalTitle] = useState("Pick add-ons");
  const [descriptionText] = useState(
    "Add-ons help enhance your gaming experience."
  );
  const handleGoBack = () => {
    navigate("/select-plan");
  };
  const handleNextStep = async (e) => {
    e.preventDefault();
    let newData = {
      ...form,
      onlineservicePrice:
        form?.onlineservice &&
        Number(`${secondData.monthly ? 1 : ""}${secondData.yearly ? 10 : ""}`),
      largestoragePrice:
        form?.largestorage &&
        Number(`${secondData.monthly ? 2 : ""}${secondData.yearly ? 20 : ""}`),
      customizableprofilePrice:
        form?.customizableprofile &&
        Number(`${secondData.monthly ? 2 : ""}${secondData.yearly ? 20 : ""}`),
    };
    if (newData) {
      localStorage.setItem("third-step", JSON.stringify(newData));
      navigate("/summary");
    }
  };
  useEffect(() => {
    if (localStorage.getItem("second-step")) {
      setSecondData({ ...JSON.parse(localStorage.getItem("second-step")) });
    }
  }, []);

  return (
    <ContentMultiStep>
      {isSmallScreen ? (
        <Box
        onSubmit={handleNextStep}
        component="form"
      >
        <Card className="form-card">
        <PrincipalTitle>{principalTitle}</PrincipalTitle>
        <DescriptionText>{descriptionText}</DescriptionText>
        <br />
        <ContentCheckbox
          className={`w-100 mb-2 d-flex justify-content-between align-items-baseline ${
            form?.onlineservice && "selected"
          }`}
        >
          <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked={false}
                    onChange={changed}
                    name="onlineservice"
                  />
                }
                label="Online service"
              />
              <FormLabel component="legend">
                Access to multiplayer games
              </FormLabel>
            </FormGroup>
          </FormControl>
          <FormLabel>
            +${`${secondData.monthly ? 1 : ""}${secondData.yearly ? 10 : ""}`}
            {secondData.monthly ? "/mo" : ""}
            {secondData.yearly ? "/yr" : ""}
          </FormLabel>
        </ContentCheckbox>

        <ContentCheckbox
          className={`w-100 mb-2 d-flex justify-content-between align-items-baseline ${
            form?.largestorage && "selected"
          }`}
        >
          <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked={false}
                    onChange={changed}
                    name="largestorage"
                  />
                }
                label="Large storage"
              />
              <FormLabel component="legend">
                Extra 1TB of cloud save
              </FormLabel>
            </FormGroup>
          </FormControl>
          <FormLabel>
            +${`${secondData.monthly ? 2 : ""}${secondData.yearly ? 20 : ""}`}
            {secondData.monthly ? "/mo" : ""}
            {secondData.yearly ? "/yr" : ""}
          </FormLabel>
        </ContentCheckbox>

        <ContentCheckbox
          className={`w-100 mb-2 d-flex justify-content-between align-items-baseline ${
            form?.customizableprofile && "selected"
          }`}
        >
          <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked={false}
                    onChange={changed}
                    name="customizableprofile"
                  />
                }
                label="Customizable profile"
              />
              <FormLabel component="legend">
                Custom theme on your profile
              </FormLabel>
            </FormGroup>
          </FormControl>
          <FormLabel>
            +${`${secondData.monthly ? 2 : ""}${secondData.yearly ? 20 : ""}`}
            {secondData.monthly ? "/mo" : ""}
            {secondData.yearly ? "/yr" : ""}
          </FormLabel>
        </ContentCheckbox>
        </Card>
        <Stack
          spacing={2}
          direction="row"
          style={{ paddingInline: "1em", position: "fixed", bottom: "0" }}
          className="d-flex justify-content-between mt-5 py-4 w-100 bg-white"
        >
          <Button
            variant="text"
            className="btn-back-step"
            onClick={() => handleGoBack()}
          >
            Go Back
          </Button>
          <Button variant="contained" className="btn-next-step" type="submit">
            Next Step
          </Button>
        </Stack>
      </Box>
      ) : (
        <Container maxWidth="lg" sx={{ ml: 15, mt: 4, mb: 4 }}>
        <Box
          onSubmit={handleNextStep}
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
        >
          <PrincipalTitle className="w-75">{principalTitle}</PrincipalTitle>
          <DescriptionText className="w-75">{descriptionText}</DescriptionText>
          <br />
          <ContentCheckbox
            className={`w-75 d-flex justify-content-between align-items-baseline ${
              form?.onlineservice && "selected"
            }`}
          >
            <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      defaultChecked={false}
                      onChange={changed}
                      name="onlineservice"
                    />
                  }
                  label="Online service"
                />
                <FormLabel component="legend">
                  Access to multiplayer games
                </FormLabel>
              </FormGroup>
            </FormControl>
            <FormLabel>
              +${`${secondData.monthly ? 1 : ""}${secondData.yearly ? 10 : ""}`}
              {secondData.monthly ? "/mo" : ""}
              {secondData.yearly ? "/yr" : ""}
            </FormLabel>
          </ContentCheckbox>

          <ContentCheckbox
            className={`w-75 d-flex justify-content-between align-items-baseline ${
              form?.largestorage && "selected"
            }`}
          >
            <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      defaultChecked={false}
                      onChange={changed}
                      name="largestorage"
                    />
                  }
                  label="Large storage"
                />
                <FormLabel component="legend">
                  Extra 1TB of cloud save
                </FormLabel>
              </FormGroup>
            </FormControl>
            <FormLabel>
              +${`${secondData.monthly ? 2 : ""}${secondData.yearly ? 20 : ""}`}
              {secondData.monthly ? "/mo" : ""}
              {secondData.yearly ? "/yr" : ""}
            </FormLabel>
          </ContentCheckbox>

          <ContentCheckbox
            className={`w-75 d-flex justify-content-between align-items-baseline ${
              form?.customizableprofile && "selected"
            }`}
          >
            <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      defaultChecked={false}
                      onChange={changed}
                      name="customizableprofile"
                    />
                  }
                  label="Customizable profile"
                />
                <FormLabel component="legend">
                  Custom theme on your profile
                </FormLabel>
              </FormGroup>
            </FormControl>
            <FormLabel>
              +${`${secondData.monthly ? 2 : ""}${secondData.yearly ? 20 : ""}`}
              {secondData.monthly ? "/mo" : ""}
              {secondData.yearly ? "/yr" : ""}
            </FormLabel>
          </ContentCheckbox>
          <Stack
            spacing={2}
            direction="row"
            className="d-flex justify-content-between w-75 mt-5"
          >
            <Button
              variant="text"
              className="btn-back-step"
              onClick={() => handleGoBack()}
            >
              Go Back
            </Button>
            <Button variant="contained" className="btn-next-step" type="submit">
              Next Step
            </Button>
          </Stack>
        </Box>
      </Container>
      )}
    </ContentMultiStep>
  );
};

export default ThirdStep;
