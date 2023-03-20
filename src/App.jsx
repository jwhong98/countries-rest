import "./App.css";
import Header from "./components/Header/Header";
import { GlobalStyles } from "./components/styles/Global";
import { ThemeProvider } from "styled-components";
import { light, dark } from "./components/styles/Theme.styled";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState(light);
  const onThemeSwitch = () => {
    theme == light ? setTheme(dark) : setTheme(light);
  };
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyles />
        <Header onThemeSwitch={onThemeSwitch} />
      </div>
    </ThemeProvider>
  );
}

export default App;
