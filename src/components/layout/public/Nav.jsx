import {
  ContentItemNumber,
  ContentItemTitle,
  PrimaryTitle,
  SecondaryTitle,
  StepItem,
} from "./Nav.styled";
import MuiDrawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";
import BackgroundAside from "../../../assets/svg/background-aside.svg";
import { useState } from "react";
import steps from "../../../assets/mocks/steps.json";
import { useLocation } from "react-router-dom";

const drawerWidth = "314px";

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    backgroundImage: `url(${BackgroundAside})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    color: "white",
    borderRadius: 10,
    marginTop: 10,
    marginLeft: 10,
    height: "97vh",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const Nav = () => {
  const [listItems] = useState(steps.steps);
  const location = useLocation();
  return (
    <>
      <Drawer variant="permanent" open={true}>
        {listItems.map((item) => {
          return (
            <StepItem key={item.id}>
              <ContentItemNumber selected={location.pathname == item.route}>
                {item.position}
              </ContentItemNumber>
              <ContentItemTitle>
                <SecondaryTitle>{item.secondaryTitle}</SecondaryTitle>
                <PrimaryTitle>{item.primaryTitle}</PrimaryTitle>
              </ContentItemTitle>
            </StepItem>
          );
        })}
      </Drawer>
    </>
  );
};

export default Nav;
