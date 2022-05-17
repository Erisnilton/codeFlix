import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { DialogSearchProvider } from "./components/dialogSearch/DialogSearchProvider";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import useIsSmallWindows from "./hooks/useIsSmallWindows";
import AppRoute from "./routes/AppRoutes";
import theme from "./theme";

function Main() {
  const isIsmallWindws = useIsSmallWindows();
  return (
    <BrowserRouter>
      <DialogSearchProvider>
        <Navbar />
        <AppRoute />
        {isIsmallWindws && <Footer />}
      </DialogSearchProvider>
    </BrowserRouter>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Main />
    </ThemeProvider>
  );
}

export default App;
