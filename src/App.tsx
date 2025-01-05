import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router";
import Hunters from "./components/Hunters";
import Home from "./pages/Home";
import SignInContainer from "./components/SignInContainer";
import AuthorizedView from "./components/AuthorizedView";
import PersistAuth from "./components/PersistAuth";
import Navigation from "./components/Navigation";
import Quests from "./components/Quests";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  const dark = createTheme({
    palette: {
      mode: "light",
    },
  });
  return (
    <ThemeProvider theme={dark}>
      <CssBaseline />

      <Routes>
        <Route element={<Navigation />}>
          <Route element={<PersistAuth />}>
            <Route element={<AuthorizedView />}></Route>
          </Route>
          <Route index path="/" element={<Home />} />
          <Route path="/hunters" element={<Hunters />} />
          <Route path="/quests" element={<Quests />} />
          <Route element={<Footer />} />
        </Route>
        <Route path="/login" element={<SignInContainer />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
