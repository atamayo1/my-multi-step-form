import Container from "@mui/material/Container";
import {
  ContentMultiStep,
  DescriptionText,
  PrincipalTitle,
} from "./ThirdStep.styled";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Stack,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useForm } from "../../hooks/useForm";

const ThirdStep = () => {
  const navigate = useNavigate();
  const { form, changed } = useForm({});
  const [principalTitle] = useState("Pick add-ons");
  const [descriptionText] = useState(
    "Add-ons help enhance your gaming experience."
  );
  const handleGoBack = () => {
    navigate("/select-plan");
  };
  const handleNextStep = async (e) => {
    e.preventDefault();
    console.log("form", form);
    if (form) {
      localStorage.setItem("third-step", JSON.stringify(form));
      navigate("/summary", { state: { ...form } });
    }
  };
  useEffect(() => {
    console.log("first-step", JSON.parse(localStorage.getItem("first-step")));
    console.log("second-step", JSON.parse(localStorage.getItem("second-step")));
  }, []);

  return (
    <ContentMultiStep>
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
          <div className="w-75 d-flex justify-content-between align-items-baseline">
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
            <FormLabel>+10/yr</FormLabel>
          </div>

          <div className="w-75 d-flex justify-content-between align-items-baseline">
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
            <FormLabel>+20/yr</FormLabel>
          </div>

          <div className="w-75 d-flex justify-content-between align-items-baseline">
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
            <FormLabel>+20/yr</FormLabel>
          </div>
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
    </ContentMultiStep>
  );
};

export default ThirdStep;
