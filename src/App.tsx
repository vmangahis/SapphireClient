import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import SignInContainer from "./components/SignInContainer";

function App() {
  const dark = createTheme({
    palette: {
      mode: "dark",
    },
  });
  return (
    <div className="App">
      <ThemeProvider theme={dark}>
        <CssBaseline />
        <SignInContainer />
      </ThemeProvider>
    </div>
  );
}

export default App;
