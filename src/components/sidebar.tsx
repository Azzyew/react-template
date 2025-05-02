import { Link } from "@tanstack/react-router";
import ThemeSwitch from "./theme/theme-switch";

export default function Sidebar() {
  return (
    <aside className="h-dvh w-48 flex flex-col justify-between py-10 px-2 border-r border-r-slate-800 dark:bg-slate-900 dark:border-r-slate-100">
      <nav className="space-y-2">
        <div className="px-2 font-bold text-slate-900 tracking-wider dark:text-slate-100">
          <Link to="/app/home">Home</Link>
        </div>

        <div className="px-2 font-bold text-slate-900 tracking-wider dark:text-slate-100">
          <Link to="/app/tanstack-query">Demo</Link>
        </div>
      </nav>

      <div className="flex justify-center">
        <ThemeSwitch />
      </div>
    </aside>
  );
}
