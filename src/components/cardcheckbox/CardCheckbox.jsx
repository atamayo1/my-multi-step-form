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

const CardCheckbox = ({
  id,
  title,
  price,
  cardSelection,
  setCardSelection,
}) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleCardClick = (item) => {
    setCardSelection(item);
    setIsSelected(!isSelected);
  };

  return (
    <ContentCard>
      <Card
        key={id}
        onClick={() => handleCardClick({ id, title, price })}
        className={`card ${
          isSelected && cardSelection.title.toLowerCase() == title.toLowerCase()
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
            style={{ fontWeight: "bold", fontSize: 18 }}
            component="div"
          >
            {title}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {price}
          </Typography>
        </CardContent>
      </Card>
    </ContentCard>
  );
};

export default CardCheckbox;

CardCheckbox.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  price: PropTypes.string,
  cardSelection: PropTypes.object,
  setCardSelection: PropTypes.func,
};
