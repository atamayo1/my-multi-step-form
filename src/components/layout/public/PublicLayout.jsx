import { Outlet } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Nav from "./Nav";

const defaultTheme = createTheme();

const PublicLayout = () => {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <Nav />
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              height: "100vh",
              overflow: "auto",
              zIndex: "1",
            }}
          >
            <Toolbar />
            <Outlet />
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default PublicLayout;
