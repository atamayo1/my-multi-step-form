import {
  ContentItemNumber,
  ContentItemTitle,
  ContentNav,
  PrimaryTitle,
  SecondaryTitle,
  StepItem,
  StepTopItem,
} from "./Nav.styled";
import MuiDrawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";
import BackgroundAside from "../../../assets/svg/background-aside.svg";
import { useState } from "react";
import steps from "../../../assets/mocks/steps.json";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "@material-ui/core";
import { AppBar, Box, Toolbar } from "@mui/material";

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
      [theme.breakpoints.up("md")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const Nav = () => {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const [listItems] = useState(steps.steps);
  const location = useLocation();
  return (
    <ContentNav>
      {isSmallScreen ? (
        // Content for small screens (width less than or equal to 600px)
        <AppBar component="nav" className="app-bar-nav" style={{backgroundImage: `url(${BackgroundAside})`}}>
        <Toolbar>
          <Box  className="d-flex justify-content-around p-4 w-100">
          {listItems.map((item) => {
            return (
              <StepTopItem key={item.id}>
                <ContentItemNumber selected={location.pathname == item.route}>
                  {item.position}
                </ContentItemNumber>
              </StepTopItem>
            );
          })}
          </Box>
        </Toolbar>
      </AppBar>
      ) : (
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
      )}
    </ContentNav>
  );
};

export default Nav;
