import Container from "@mui/material/Container";
import {
  ContentMultiStep,
  DescriptionText,
  PrincipalTitle,
  ContentIcon,
} from "./ThanksPage.styled";
import { Box, Card } from "@mui/material";
import { useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useMediaQuery } from "@material-ui/core";

const ThanksPage = () => {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const [principalTitle] = useState("Thank you!");
  const [descriptionText] = useState(
    "Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com."
  );
  return (
    <ContentMultiStep>
      {isSmallScreen ? (
        <Box
          component="form"
        >
          <Card className="form-card">
            <div className="mb-4">
              <ContentIcon className="content-icon">
                <CheckCircleIcon />
              </ContentIcon>
            </div>
            <PrincipalTitle>{principalTitle}</PrincipalTitle>
            <DescriptionText className="text-center">
              {descriptionText}
            </DescriptionText>
          </Card>
        </Box>
      ) : (
        <Container maxWidth="lg" sx={{ ml: 15, mt: 4, mb: 4 }}>
          <Box
            component="form"
            sx={{
              "& > :not(style)": {
                mt: 5,
                display: "flex",
                justifyContent: "center",
              },
            }}
          >
            <div className="w-75">
              <ContentIcon className="content-icon">
                <CheckCircleIcon />
              </ContentIcon>
            </div>
            <PrincipalTitle className="w-75">{principalTitle}</PrincipalTitle>
            <DescriptionText className="w-75 text-center">
              {descriptionText}
            </DescriptionText>
          </Box>
        </Container>
      )}
    </ContentMultiStep>
  );
};

export default ThanksPage;
