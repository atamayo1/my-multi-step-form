import Container from "@mui/material/Container";
import {
  ContentMultiStep,
  DescriptionText,
  PrincipalTitle,
} from "./SecondStep.styled";
import { Box, Button, Card, Stack, Switch } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CardCheckbox from "../cardcheckbox/CardCheckbox";
import { useMediaQuery } from "@material-ui/core";

const SecondStep = () => {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const navigate = useNavigate();
  const [principalTitle] = useState("Select your plan");
  const [descriptionText] = useState(
    "You have the option of monthly or yearly billing."
  );
  const [checkMonthlyOrYearly, setCheckMonthlyOrYearly] = useState(false);
  const [cardSelection, setCardSelection] = useState({});
  const cardData = [
    { id: 1, title: "Arcade", price: !checkMonthlyOrYearly ? 9 : 90 },
    { id: 2, title: "Advanced", price: !checkMonthlyOrYearly ? 12 : 120 },
    { id: 3, title: "Pro", price: !checkMonthlyOrYearly ? 15 : 150 },
    // Add more card data as needed
  ];
  const handleGoBack = () => {
    navigate("/");
  };
  const handleNextStep = async (isDisabled) => {
    let newData = {
      monthly: !checkMonthlyOrYearly,
      yearly: checkMonthlyOrYearly,
      cardSelection: cardSelection ? cardSelection : false,
    };
    if (newData && !isDisabled) {
      localStorage.setItem("second-step", JSON.stringify(newData));
      navigate("/add-ons");
    }
  };
  const handleMonthlyOrYearly = async () => {
    setCardSelection({});
    setCheckMonthlyOrYearly(!checkMonthlyOrYearly);
  };

  return (
    <ContentMultiStep>
      {isSmallScreen ? (
        <Box component="form">
          <Card className="form-card">
            <PrincipalTitle>{principalTitle}</PrincipalTitle>
            <DescriptionText>{descriptionText}</DescriptionText>

            <div className="w-100 h-25 mt-5">
              {cardData.map((card) => (
                <CardCheckbox
                  key={card.id}
                  id={card.id}
                  title={card.title}
                  price={card.price}
                  checkMonthlyOrYearly={checkMonthlyOrYearly}
                  cardSelection={cardSelection}
                  setCardSelection={setCardSelection}
                />
              ))}
            </div>

            <div
              style={{ fontWeight: "bold" }}
              className="d-flex align-items-baseline justify-content-center content-switch w-100 mt-5"
            >
              <span
                style={{
                  fontSize: "14px",
                  color: checkMonthlyOrYearly ? "#9699AA" : "#022959",
                }}
              >
                Monthly
              </span>
              <Switch
                defaultChecked={false}
                color="default"
                onChange={() => handleMonthlyOrYearly()}
              />
              <span
                style={{
                  fontSize: "14px",
                  color: checkMonthlyOrYearly ? "#022959" : "#9699AA",
                }}
              >
                Yearly
              </span>
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
              onClick={() => handleNextStep(cardSelection?.title ? false : true)}
            >
              Next Step
            </Button>
          </Stack>
        </Box>
      ) : (
        <Container maxWidth="lg" sx={{ ml: 15, mt: 4, mb: 4, width: "650px" }}>
          <Box
            component="form"
          >
            <PrincipalTitle className="w-100">{principalTitle}</PrincipalTitle>
            <DescriptionText className="w-100">
              {descriptionText}
            </DescriptionText>

            <div style={{maxWidth: "390px"}} className="d-flex justify-content-center mt-5">
              {cardData.map((card) => (
                <CardCheckbox
                  key={card.id}
                  id={card.id}
                  title={card.title}
                  price={card.price}
                  checkMonthlyOrYearly={checkMonthlyOrYearly}
                  cardSelection={cardSelection}
                  setCardSelection={setCardSelection}
                />
              ))}
           
            </div>

            <div
              className="mt-5 content-switch"
            >
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  color: checkMonthlyOrYearly ? "#9699AA" : "#022959",
                }}
              >
                Monthly
              </span>
              <Switch
                className="switch-selection"
                defaultChecked={false}
                style={{color: "white"}}
                onChange={() => handleMonthlyOrYearly()}
              />
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  color: checkMonthlyOrYearly ? "#022959" : "#9699AA",
                }}
              >
                Yearly
              </span>
            </div>

            <Stack
              spacing={2}
              direction="row"
              style={{width: "450px"}}
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
                onClick={() => handleNextStep(cardSelection?.title ? false : true)}
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

export default SecondStep;
