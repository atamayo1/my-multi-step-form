import { Card, CardContent, Typography } from "@mui/material";
import { useState } from "react";
import {
  ContentAdvancedIcon,
  ContentArcadeIcon,
  ContentCard,
  ContentProIcon,
} from "./CardCheckbox.styled";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import Shape from "../../assets/svg/shape.svg";
import PropTypes from "prop-types";
import { useMediaQuery } from "@material-ui/core";

const CardCheckbox = ({
  id,
  title,
  price,
  checkMonthlyOrYearly,
  cardSelection,
  setCardSelection,
}) => {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const [isSelected, setIsSelected] = useState(false);

  const handleCardClick = (item) => {
    setCardSelection(item);
    setIsSelected(!isSelected);
  };

  return (
    <ContentCard>
      {isSmallScreen ? (
        <Card
          key={id}
          onClick={() => handleCardClick({ id, title, price })}
          className={`card ${
            isSelected &&
            cardSelection?.title?.toLowerCase() == title.toLowerCase()
              ? "selected"
              : ""
          }`}
          sx={{
            minWidth: 295,
            maxHeight: !checkMonthlyOrYearly ? 77 : 100,
            borderRadius: 3,
            display: "flex",
            justifyContent: "baseline",
          }}
        >
          <CardContent className="d-flex justify-content-start">
            <Typography component="div">
              {title.toLowerCase() == "arcade" && (
                <ContentArcadeIcon>
                  <img src={Shape} />
                </ContentArcadeIcon>
              )}
              {title.toLowerCase() == "advanced" && (
                <ContentAdvancedIcon>
                  <VideogameAssetIcon />
                </ContentAdvancedIcon>
              )}
              {title.toLowerCase() == "pro" && (
                <ContentProIcon>
                  <SportsEsportsIcon />
                </ContentProIcon>
              )}
            </Typography>
            <div>&nbsp;&nbsp;</div>
            <div>
              <Typography
                style={{ fontWeight: "bold", fontSize: "16px"}}
                component="div"
              >
                {title}
              </Typography>
              <Typography sx={{ fontSize: "14px" }} color="text.secondary">
                ${price}
                {!checkMonthlyOrYearly ? "/mo" : "/yr"}
              </Typography>
              {checkMonthlyOrYearly && (
                <Typography
                  sx={{ mb: 1.5, fontSize: "14px", color: "#022959" }}
                >
                  2 months free
                </Typography>
              )}
            </div>
          </CardContent>
        </Card>
      ) : (
        <Card
          key={id}
          onClick={() => handleCardClick({ id, title, price })}
          className={`card ${
            isSelected &&
            cardSelection?.title?.toLowerCase() == title.toLowerCase()
              ? "selected"
              : ""
          }`}
          sx={{ minWidth: 148, minHeight: 160, mr: 2, borderRadius: 3 }}
        >
          <CardContent>
            <Typography component="div">
              {title.toLowerCase() == "arcade" && (
                <ContentArcadeIcon>
                  <img src={Shape} />
                </ContentArcadeIcon>
              )}
              {title.toLowerCase() == "advanced" && (
                <ContentAdvancedIcon>
                  <VideogameAssetIcon />
                </ContentAdvancedIcon>
              )}
              {title.toLowerCase() == "pro" && (
                <ContentProIcon>
                  <SportsEsportsIcon />
                </ContentProIcon>
              )}
            </Typography>
            <Typography
              style={{ fontWeight: "bold", fontSize: "16px" }}
              component="div"
            >
              {title}
            </Typography>
            <Typography sx={{ fontSize: "14px" }} color="text.secondary">
              ${price}
              {!checkMonthlyOrYearly ? "/mo" : "/yr"}
            </Typography>
            {checkMonthlyOrYearly && (
              <Typography sx={{ mb: 1.5, fontSize: "14px", color: "#022959" }}>
                2 months free
              </Typography>
            )}
          </CardContent>
        </Card>
      )}
    </ContentCard>
  );
};

export default CardCheckbox;

CardCheckbox.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  price: PropTypes.number,
  checkMonthlyOrYearly: PropTypes.bool,
  cardSelection: PropTypes.object,
  setCardSelection: PropTypes.func,
};
