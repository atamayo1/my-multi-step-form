import Container from "@mui/material/Container";
import {
  ContentAdvancedIcon,
  ContentArcadeIcon,
  ContentMultiStep,
  ContentProIcon,
  DescriptionText,
  PrincipalTitle,
} from "./SecondStep.styled";
import {
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import Shape from "../../assets/svg/shape.svg";

const SecondStep = () => {
  const navigate = useNavigate();
  const [principalTitle] = useState("Select your plan");
  const [descriptionText] = useState(
    "You have the option of monthly or yearly billing."
  );
  const handleGoBack = () => {
    navigate("/");
  };
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

          <div className="d-flex justify-content-around w-50 mt-5">
            <Card
              className="plan-cards"
              sx={{ minWidth: 148, minHeight: 160, mr: 2, borderRadius: 3 }}
            >
              <CardContent>
                <Typography>
                  <ContentArcadeIcon>
                    <img src={Shape} />
                  </ContentArcadeIcon>
                </Typography>
                <Typography
                  style={{ fontWeight: "bold", fontSize: 18 }}
                  component="div"
                >
                  Arcade
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  $9/mo
                </Typography>
              </CardContent>
            </Card>

            <Card
              className="plan-cards"
              sx={{ minWidth: 148, minHeight: 160, mr: 2, borderRadius: 3 }}
            >
              <CardContent>
                <Typography>
                  <ContentAdvancedIcon>
                    <VideogameAssetIcon />
                  </ContentAdvancedIcon>
                </Typography>
                <Typography
                  style={{ fontWeight: "bold", fontSize: 18 }}
                  component="div"
                >
                  Advanced
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  $12/mo
                </Typography>
              </CardContent>
            </Card>

            <Card
              className="plan-cards"
              sx={{ minWidth: 148, minHeight: 160, mr: 2, borderRadius: 3 }}
            >
              <CardContent>
                <Typography>
                  <ContentProIcon>
                    <SportsEsportsIcon />
                  </ContentProIcon>
                </Typography>
                <Typography
                  style={{ fontWeight: "bold", fontSize: 18 }}
                  component="div"
                >
                  Pro
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  $15/mo
                </Typography>
              </CardContent>
            </Card>
          </div>

          <div style={{fontWeight: "bold"}} className="d-flex align-items-baseline justify-content-center w-50 mt-5">
            <span style={{color: "#022959"}}>Monthly</span>
            <Switch
              defaultChecked={false}
              color="default"
            />
            <span style={{color: "#9699AA"}}>Yearly</span>
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
