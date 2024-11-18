import "./App.css";
import { UseThemeContext } from "./contexts/ThemeContext";

function App() {
  const theme = UseThemeContext();
  theme.setTheme("dark");
  return (
    <>
    </>
  );
}

export default App;
