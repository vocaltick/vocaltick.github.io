import { Box, Button } from "@mui/material";
import "./App.css";
import { UseThemeContext } from "./contexts/ThemeContext";

function App() {
  const theme = UseThemeContext();
  theme.setTheme("dark");
  return (
    <>
      <Box className="w-full h-full">
        <Button>hola</Button>
      </Box>
    </>
  );
}

export default App;
