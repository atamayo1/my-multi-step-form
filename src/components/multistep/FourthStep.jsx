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
import { useMediaQuery } from "@material-ui/core";

const FourthStep = () => {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [total, setTotal] = useState();
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
  useEffect(() => {
    if (data) {
      let cardSelectionPrice = data?.cardSelection?.price;
      let onlineservicePrice = data?.onlineservicePrice;
      let largestoragePrice = data?.largestoragePrice;
      let customizableprofilePrice = data?.customizableprofilePrice;
      setTotal(
        `${
          Number(cardSelectionPrice != undefined ? cardSelectionPrice : "") +
          Number(onlineservicePrice != undefined ? onlineservicePrice : "") +
          Number(largestoragePrice != undefined ? largestoragePrice : "") +
          Number(
            customizableprofilePrice != undefined
              ? customizableprofilePrice
              : ""
          )
        }`
      );
    }
  }, [data]);
  return (
    <ContentMultiStep>
      {isSmallScreen ? (
        <Box component="form">
          <Card className="form-card">
            <PrincipalTitle>{principalTitle}</PrincipalTitle>
            <DescriptionText>{descriptionText}</DescriptionText>
            <br />
            <Card
              sx={{
                minWidth: "100%",
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
                  <Link to="/select-plan" className="change-link">
                    <Typography sx={{ mb: 1.5 }} component="div">
                      Change
                    </Typography>
                  </Link>
                  <Typography
                    sx={{ mb: 1.5 }}
                    className="price-value"
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
                {data?.onlineservice && (
                  <div className="d-flex justify-content-between align-items-baseline">
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {"Online Service"}
                    </Typography>
                    <Typography
                      sx={{ mb: 1.5, fontSize: "20px" }}
                      color="text.secondary"
                      component="div"
                    >
                      +${data?.onlineservicePrice}
                      {data?.monthly && "/mo"}
                      {data?.yearly && "/yr"}
                    </Typography>
                  </div>
                )}

                {data?.largestorage && (
                  <div className="d-flex justify-content-between align-items-baseline">
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {"Large Storage"}
                    </Typography>
                    <Typography
                      sx={{ mb: 1.5, fontSize: "20px" }}
                      color="text.secondary"
                      component="div"
                    >
                      +${data?.largestoragePrice}
                      {data?.monthly && "/mo"}
                      {data?.yearly && "/yr"}
                    </Typography>
                  </div>
                )}

                {data?.customizableprofile && (
                  <div className="d-flex justify-content-between align-items-baseline">
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {"Customizable Profile"}
                    </Typography>
                    <Typography
                      sx={{ mb: 1.5, fontSize: "20px" }}
                      color="text.secondary"
                      component="div"
                    >
                      +${data?.customizableprofilePrice}
                      {data?.monthly && "/mo"}
                      {data?.yearly && "/yr"}
                    </Typography>
                  </div>
                )}
              </CardContent>
            </Card>
            <br />
            <div
              className="d-flex justify-content-between align-items-baseline"
              style={{ width: "96%" }}
            >
              <Typography
                sx={{ mb: 1.5, ml: 1.5 }}
                color="text.secondary"
                component="div"
              >
                Total (per {data?.monthly && "month"}
                {data?.yearly && "year"})
              </Typography>

              <Typography
                sx={{
                  mb: 1.5,
                  fontSize: "20px",
                  color: "#483EFF",
                  fontWeight: "bold",
                }}
                component="div"
              >
                ${total}
                {data?.monthly && "/mo"}
                {data?.yearly && "/yr"}
              </Typography>
            </div>
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
            <Button
              variant="contained"
              className="btn-next-step"
              onClick={() => handleNextStep()}
            >
              Confirm
            </Button>
          </Stack>
        </Box>
      ) : (
        <Container maxWidth="lg" sx={{ ml: 15, mt: 4, mb: 4 }}>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
          >
            <PrincipalTitle className="w-75">{principalTitle}</PrincipalTitle>
            <DescriptionText className="w-75">
              {descriptionText}
            </DescriptionText>
            <br />
            <Card
              style={{ width: "450px" }}
              sx={{
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
                  <Link to="/select-plan" className="change-link">
                    <Typography sx={{ mb: 1.5 }} component="div">
                      Change
                    </Typography>
                  </Link>
                  <Typography
                    sx={{ mb: 1.5 }}
                    className="price-value"
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
                {data?.onlineservice && (
                  <div className="d-flex justify-content-between align-items-baseline">
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {"Online Service"}
                    </Typography>
                    <Typography
                      sx={{ mb: 1.5, fontSize: "20px" }}
                      color="text.secondary"
                      component="div"
                    >
                      +${data?.onlineservicePrice}
                      {data?.monthly && "/mo"}
                      {data?.yearly && "/yr"}
                    </Typography>
                  </div>
                )}

                {data?.largestorage && (
                  <div className="d-flex justify-content-between align-items-baseline">
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {"Large Storage"}
                    </Typography>
                    <Typography
                      sx={{ mb: 1.5, fontSize: "20px" }}
                      color="text.secondary"
                      component="div"
                    >
                      +${data?.largestoragePrice}
                      {data?.monthly && "/mo"}
                      {data?.yearly && "/yr"}
                    </Typography>
                  </div>
                )}

                {data?.customizableprofile && (
                  <div className="d-flex justify-content-between align-items-baseline">
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {"Customizable Profile"}
                    </Typography>
                    <Typography
                      sx={{ mb: 1.5, fontSize: "20px" }}
                      color="text.secondary"
                      component="div"
                    >
                      +${data?.customizableprofilePrice}
                      {data?.monthly && "/mo"}
                      {data?.yearly && "/yr"}
                    </Typography>
                  </div>
                )}
              </CardContent>
            </Card>
            <br />
            <div
              className="d-flex justify-content-between align-items-baseline"
              style={{ width: "450px" }}
            >
              <Typography
                sx={{ mb: 1.5, ml: 1.5 }}
                color="text.secondary"
                component="div"
              >
                Total (per {data?.monthly && "month"}
                {data?.yearly && "year"})
              </Typography>

              <Typography
                sx={{
                  mb: 1.5,
                  fontSize: "20px",
                  color: "#483EFF",
                  fontWeight: "bold",
                }}
                component="div"
              >
                ${total}
                {data?.monthly && "/mo"}
                {data?.yearly && "/yr"}
              </Typography>
            </div>

            <Stack
              spacing={2}
              direction="row"
              style={{ width: "450px" }}
              className="d-flex justify-content-between mt-5"
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
      )}
    </ContentMultiStep>
  );
};

export default FourthStep;
