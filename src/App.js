import "./App.css";
import ThemeSwitcher from "./ThemeSwitcher";
import { ThemeProvider } from "./ThemeContext";

export default function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <ThemeSwitcher />
      </ThemeProvider>
    </div>
  );
}
