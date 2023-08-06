import Container from "@mui/material/Container";
import {
  ContentMultiStep,
  DescriptionText,
  PrincipalTitle,
} from "./SecondStep.styled";
import { Box, Button, Stack, Switch } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CardCheckbox from "../cardcheckbox/CardCheckbox";
import { useEffect } from "react";

const SecondStep = () => {
  const navigate = useNavigate();
  const [principalTitle] = useState("Select your plan");
  const [descriptionText] = useState(
    "You have the option of monthly or yearly billing."
  );
  const [checkMonthlyOrYearly, setCheckMonthlyOrYearly] = useState(false);
  const [cardSelection, setCardSelection] = useState();
  const cardData = [
    { id: 1, title: "Arcade", price: "$9/mo" },
    { id: 2, title: "Advanced", price: "$12/mo" },
    { id: 3, title: "Pro", price: "$15/mo" },
    // Add more card data as needed
  ];
  const handleGoBack = () => {
    navigate("/", { state:  {...localStorage.getItem("first-step"), ...localStorage.getItem("second-step")}});
  };
  const handleNextStep = async () => {
    let newData = {
      monthly: !checkMonthlyOrYearly,
      yearly: checkMonthlyOrYearly,
      cardSelection: cardSelection ? cardSelection : false,
    };
    if (newData) {
      localStorage.setItem("second-step", JSON.stringify(newData))
      navigate("/add-ons", { state: { ...newData } });
    }
  };
  const handleMonthlyOrYearly = async () => {
    setCheckMonthlyOrYearly(!checkMonthlyOrYearly);
  };

  useEffect(() => {
    if(localStorage.getItem("second-step")) {
      let lastData = JSON.parse(localStorage.getItem("second-step"));
      console.log("lastData", lastData)
    }
  }, [])

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

          <div className="d-flex justify-content-around w-50 mt-5">
            {cardData.map((card) => (
              <CardCheckbox
                key={card.id}
                id={card.id}
                title={card.title}
                price={card.price}
                cardSelection={cardSelection}
                setCardSelection={setCardSelection}
              />
            ))}
          </div>

          <div
            style={{ fontWeight: "bold" }}
            className="d-flex align-items-baseline justify-content-center w-50 mt-5"
          >
            <span
              style={{ color: checkMonthlyOrYearly ? "#9699AA" : "#022959" }}
            >
              Monthly
            </span>
            <Switch
              defaultChecked={false}
              color="default"
              onChange={() => handleMonthlyOrYearly()}
            />
            <span
              style={{ color: checkMonthlyOrYearly ? "#022959" : "#9699AA" }}
            >
              Yearly
            </span>
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
              Next Step
            </Button>
          </Stack>
        </Box>
      </Container>
    </ContentMultiStep>
  );
};

export default SecondStep;
