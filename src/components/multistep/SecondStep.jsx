import Container from "@mui/material/Container";
import {
  ContentMultiStep,
  DescriptionText,
  PrincipalTitle,
} from "./SecondStep.styled";
import { Box, Button, Stack } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SecondStep = () => {
  const navigate = useNavigate();
  const [principalTitle] = useState("Select your plan");
  const [descriptionText] = useState(
    "You have the option of monthly or yearly billing."
  );
  const handleGoBack = () => {
    navigate("/");
  }
  const handleNextStep = async () => {
    navigate("/add-ons");
  };
  return (
    <ContentMultiStep>
      <Container maxWidth="lg" sx={{ ml: 15, mt: 4, mb: 4 }}>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
        >
          <PrincipalTitle className="w-75">{principalTitle}</PrincipalTitle>
          <DescriptionText className="w-75">{descriptionText}</DescriptionText>

          <Stack
            spacing={2}
            direction="row"
            className="d-flex justify-content-between w-75 mt-5"
          >
            <Button variant="text" className="btn-back-step" onClick={() => handleGoBack()}>
              Go Back
            </Button>
            <Button variant="contained" className="btn-next-step" onClick={() => handleNextStep()}>
              Next Step
            </Button>
          </Stack>
        </Box>
      </Container>
    </ContentMultiStep>
  );
};

export default SecondStep;
