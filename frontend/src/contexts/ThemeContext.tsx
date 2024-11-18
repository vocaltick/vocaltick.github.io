import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react";

import { PaletteMode } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

interface ThemeContextProps {
  setTheme: (theme: PaletteMode) => void;
  toggleTheme: () => void;
  Theme: string;
}

export const themeContext = createContext<ThemeContextProps | undefined>(undefined);

export const UseThemeContext = () => {
  const themeContx = useContext(themeContext);
  if (!themeContx) {
    throw new Error("Use Theme under themeContext!");
  }
  return themeContx;
}

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [Theme, setTheme] = useState<PaletteMode>(
    (localStorage.getItem("theme") as PaletteMode) || ("light" as PaletteMode)
  );

  useEffect(() => {
    localStorage.setItem("theme", Theme);
    document.documentElement.setAttribute("data-bs-theme", Theme);
  }, [Theme]);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: Theme,
        },
      }),
    [Theme]
  );

  function toggleTheme() {
    const newTheme = Theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  }

  return (
    <themeContext.Provider value={{ setTheme, toggleTheme, Theme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </themeContext.Provider>
  );
};
