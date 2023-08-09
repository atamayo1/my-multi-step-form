import Container from "@mui/material/Container";
import {
  ContentMultiStep,
  DescriptionText,
  PrincipalTitle,
} from "./FirstStep.styled";
import { Box, Button, Card, Stack, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@material-ui/core";

const FirstStep = () => {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
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

  useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <ContentMultiStep>
      {isSmallScreen ? (
        <Box onSubmit={handleNextStep} component="form">
          <Card className="form-card">
            <PrincipalTitle>{principalTitle}</PrincipalTitle>
            <DescriptionText>{descriptionText}</DescriptionText>
            <div
              className="d-flex w-100 mb-3"
              style={{ flexDirection: "column", color: "#022959" }}
            >
              <label htmlFor="outlined-basic-name">Name</label>
              <TextField
                style={{ color: "#9699AA", fontWeight: "bold" }}
                className="mt-1"
                id="outlined-basic-name"
                name="name"
                variant="outlined"
                placeholder="e.g. Stephen King"
                onChange={changed}
                error={!!errors.name}
                helperText={errors.name}
              />
            </div>
            <div
              className="d-flex w-100 mb-3"
              style={{ flexDirection: "column", color: "#022959" }}
            >
              <label htmlFor="outlined-basic-email">Email Address</label>
              <TextField
                style={{ color: "#9699AA", fontWeight: "bold" }}
                className="mt-1"
                id="outlined-basic-email"
                name="email"
                variant="outlined"
                type={"email"}
                placeholder="e.g. stephenking@lorem.com"
                onChange={changed}
                error={!!errors.email}
                helperText={errors.email}
              />
            </div>

            <div
              className="d-flex w-100 mb-3"
              style={{ flexDirection: "column", color: "#022959" }}
            >
              <label htmlFor="outlined-basic-phone">Phone Number</label>
              <TextField
                style={{ color: "#9699AA", fontWeight: "bold" }}
                className="mt-1"
                id="outlined-basic-phone"
                name="phone"
                variant="outlined"
                type={"number"}
                placeholder="e.g. +1 234 567 890"
                onChange={changed}
                error={!!errors.phone}
                helperText={errors.phone}
              />
            </div>
          </Card>

          <Stack
            spacing={2}
            direction="row"
            style={{ paddingRight: "1em", position: "fixed", bottom: "0" }}
            className="d-flex justify-content-end mt-5 py-4 w-100"
          >
            <Button type="submit" variant="contained" className="btn-next-step">
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
            <DescriptionText className="w-75">
              {descriptionText}
            </DescriptionText>
            <div
              className="d-flex w-75"
              style={{ flexDirection: "column", color: "#022959" }}
            >
              <label htmlFor="outlined-basic-name">Name</label>
              <TextField
                style={{ color: "#9699AA", fontWeight: "bold", width: "450px" }}
                className="mt-1"
                id="outlined-basic-name"
                name="name"
                variant="outlined"
                placeholder="e.g. Stephen King"
                onChange={changed}
                error={!!errors.name}
                helperText={errors.name}
              />
            </div>
            <div
              className="d-flex w-75"
              style={{ flexDirection: "column", color: "#022959" }}
            >
              <label htmlFor="outlined-basic-email">Email Address</label>
              <TextField
                style={{ color: "#9699AA", fontWeight: "bold", width: "450px" }}
                className="mt-1"
                id="outlined-basic-email"
                name="email"
                variant="outlined"
                type={"email"}
                placeholder="e.g. stephenking@lorem.com"
                onChange={changed}
                error={!!errors.email}
                helperText={errors.email}
              />
            </div>

            <div
              className="d-flex w-75"
              style={{ flexDirection: "column", color: "#022959" }}
            >
              <label htmlFor="outlined-basic-phone">Phone Number</label>
              <TextField
                style={{ color: "#9699AA", fontWeight: "bold", width: "450px" }}
                className="mt-1"
                id="outlined-basic-phone"
                name="phone"
                variant="outlined"
                type={"number"}
                placeholder="e.g. +1 234 567 890"
                onChange={changed}
                error={!!errors.phone}
                helperText={errors.phone}
              />
            </div>
            <Stack
              spacing={2}
              direction="row"
              style={{ width: "450px" }}
              className="d-flex justify-content-end mt-5"
            >
              <Button
                type="submit"
                variant="contained"
                className="btn-next-step"
              >
                Next Step
              </Button>
            </Stack>
          </Box>
        </Container>
      )}
    </ContentMultiStep>
  );
};

export default FirstStep;
