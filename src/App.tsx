import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { BrowserRouter, Router } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import AppRoute from "./routes/AppRoutes";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <BrowserRouter>
        <Navbar/>
          <AppRoute />
        </BrowserRouter>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
