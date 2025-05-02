import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Switch } from "../ui/switch";

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex space-x-1 items-center">
      <Sun className="dark:text-slate-100"/>
      <Switch onClick={() => setTheme(theme === "dark" ? "light" : "dark")} />
      <Moon className="dark:text-slate-100"/>
    </div>
  );
}
