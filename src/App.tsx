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
import LoadingComponent from "./components/LoadingComponent";

function App() {
  const dark = createTheme({
    zIndex: {
      appBar: 1250,
      modal: 1251,
    },
    palette: {
      primary: {
        main: brown[500],
      },
    },
  });
  return (
    <ThemeProvider theme={dark}>
      <CssBaseline />

      <Routes>
        <Route element={<Layout />}>
          <Route element={<PersistAuth />}>
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
