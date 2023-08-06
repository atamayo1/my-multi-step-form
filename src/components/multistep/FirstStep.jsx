import Container from "@mui/material/Container";
import {
  ContentMultiStep,
  DescriptionText,
  PrincipalTitle,
} from "./FirstStep.styled";
import { Box, Button, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { useForm } from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";

const FirstStep = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const { form, changed } = useForm({});
  const [principalTitle] = useState("Personal info");
  const [descriptionText] = useState(
    "Please provide your name, email address, and phone number."
  );
  const handleNextStep = async (e) => {
    e.preventDefault();
    let validationErrors = {};
    if (!form.name) {
      validationErrors.name = "This field is required";
    }
    if (!form.email) {
      validationErrors.email = "This field is required";
    }
    if (!form.phone) {
      validationErrors.phone = "This field is required";
    }
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      if (form.name && form.email && form.phone) {
        localStorage.setItem("first-step", JSON.stringify(form));
        navigate("/select-plan");
      }
    }
  };

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
          <TextField
            className="w-75"
            id="outlined-basic-name"
            label="Name"
            name="name"
            variant="outlined"
            onChange={changed}
            error={!!errors.name}
            helperText={errors.name}
          />
          <TextField
            className="w-75"
            id="outlined-basic-email"
            label="Email Address"
            name="email"
            variant="outlined"
            type={"email"}
            onChange={changed}
            error={!!errors.email}
            helperText={errors.email}
          />
          <TextField
            className="w-75"
            id="outlined-basic-phone"
            label="Phone Number"
            name="phone"
            variant="outlined"
            type={"number"}
            onChange={changed}
            error={!!errors.phone}
            helperText={errors.phone}
          />
          <Stack
            spacing={2}
            direction="row"
            className="d-flex justify-content-end w-75 mt-5"
          >
            <Button type="submit" variant="contained" className="btn-next-step">
              Next Step
            </Button>
          </Stack>
        </Box>
      </Container>
    </ContentMultiStep>
  );
};

export default FirstStep;
