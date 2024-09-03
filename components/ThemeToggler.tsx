import { Lightbulb, Moon } from "lucide-react";
import { useTheme } from "next-themes";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  return (
    <button aria-label='theme toggler'
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className=""
    >
      {theme == "dark" ? (
        <Lightbulb />
      ) : (
        <Moon />
      )}
    </button>
  );
};

export default ThemeToggler;
