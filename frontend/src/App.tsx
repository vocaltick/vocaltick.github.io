import "./App.css";
import TTSControls from "./components/TTSControls";
import TTSListener from "./components/TTSListener";
import { UseThemeContext } from "./contexts/ThemeContext";
import { HashRouter, Route, Routes } from "react-router-dom";

function App() {
  const theme = UseThemeContext();
  theme.setTheme("dark");
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<TTSListener />} />
        <Route path="/admin" element={<TTSControls/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
