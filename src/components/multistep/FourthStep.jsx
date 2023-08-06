import Container from "@mui/material/Container";
import {
  ContentMultiStep,
  DescriptionText,
  PrincipalTitle,
} from "./FourthStep.styled";
import {
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const FourthStep = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [principalTitle] = useState("Finishing up");
  const [descriptionText] = useState(
    "Double-check everything looks OK before confirming."
  );
  const handleGoBack = () => {
    navigate("/add-ons");
  };
  const handleNextStep = async () => {
    navigate("/thanks");
  };
  useEffect(() => {
    let firstStep = JSON.parse(localStorage.getItem("first-step"));
    let secondStep = JSON.parse(localStorage.getItem("second-step"));
    let thirdStep = JSON.parse(localStorage.getItem("third-step"));
    if (firstStep && secondStep && thirdStep) {
      setData({ ...firstStep, ...secondStep, ...thirdStep });
    }
  }, []);
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

          <Card
            sx={{
              minWidth: "75%",
              minHeight: 160,
              mr: 2,
              borderRadius: 3,
              backgroundColor: "#F8F9FF",
            }}
          >
            <CardContent>
              <Typography
                style={{ fontWeight: "bold", fontSize: 18 }}
                sx={{ mb: 1.5 }}
                component="div"
              >
                {data?.cardSelection?.title.toLowerCase() == "arcade" &&
                  "Arcade"}
                {data?.cardSelection?.title.toLowerCase() == "advanced" &&
                  "Advanced"}
                {data?.cardSelection?.title.toLowerCase() == "pro" && "Pro"}{" "}
                {data?.monthly && "(Monthly)"}
                {data?.yearly && "(Yearly)"}
              </Typography>

              <div className="d-flex justify-content-between align-items-baseline">
                <Link to="/select-plan">
                  <Typography
                    sx={{ mb: 1.5 }}
                    color="text.secondary"
                    component="div"
                  >
                    Change
                  </Typography>
                </Link>
                <Typography
                  sx={{ mb: 1.5 }}
                  color="text.secondary"
                  component="div"
                >
                  $
                  {data?.cardSelection?.title.toLowerCase() == "arcade" &&
                    data?.cardSelection?.price}
                  {data?.cardSelection?.title.toLowerCase() == "advanced" &&
                    data?.cardSelection?.price}
                  {data?.cardSelection?.title.toLowerCase() == "pro" &&
                    data?.cardSelection?.price}
                  {data?.monthly && "/mo"}
                  {data?.yearly && "/yr"}
                </Typography>
              </div>

              <hr />

              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {data?.onlineservice && "Online Service"}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {data?.largestorage && "Large Storage"}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {data?.customizableprofile && "Customizable Profile"}
              </Typography>
            </CardContent>
          </Card>

          <div
            className="d-flex justify-content-between align-items-baseline"
            style={{ width: "73%" }}
          >
            <Typography
              sx={{ mb: 1.5, ml: 1.5 }}
              color="text.secondary"
              component="div"
            >
              Total (per {data?.monthly && "month"}
              {data?.yearly && "year"})
            </Typography>

            <Typography sx={{ mb: 1.5 }} color="text.primary" component="div">
              ${data?.cardSelection?.title.toLowerCase() == "arcade" &&
                data?.cardSelection?.price}
              {data?.cardSelection?.title.toLowerCase() == "advanced" &&
                data?.cardSelection?.price}
              {data?.cardSelection?.title.toLowerCase() == "pro" &&
                data?.cardSelection?.price}
              {data?.monthly && "/mo"}
              {data?.yearly && "/yr"}
            </Typography>
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
            <Button
              variant="contained"
              className="btn-next-step"
              onClick={() => handleNextStep()}
            >
              Confirm
            </Button>
          </Stack>
        </Box>
      </Container>
    </ContentMultiStep>
  );
};

export default FourthStep;
