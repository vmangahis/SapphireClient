import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router";
import Hunters from "./components/Hunters";
import Home from "./pages/Home";
import SignInContainer from "./components/SignInContainer";
import AuthorizedView from "./components/AuthorizedView";
import PersistAuth from "./components/PersistAuth";
import Quests from "./components/Introduction";
import "./App.css";
import Layout from "./components/Layout";
import { brown } from "@mui/material/colors";

function App() {
  const dark = createTheme({
    palette: {
      primary: {
        main: brown[500],
      },
      secondary: {
        main: brown[900],
      },
    },
  });
  return (
    <ThemeProvider theme={dark}>
      <CssBaseline />
      <Routes>
        <Route element={<PersistAuth />}>
          <Route element={<Layout />}>
            <Route element={<AuthorizedView />}>
              <Route path="/hunters" element={<Hunters />} />
            </Route>
            <Route element={<AuthorizedView />}>
              <Route path="/quests" element={<Quests />} />
            </Route>
            <Route index path="/" element={<Home />} />
          </Route>
        </Route>

        <Route path="/login" element={<SignInContainer />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
