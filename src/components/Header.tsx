import { NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const Header = () => {
  const { theme, setTheme } = useTheme();

  const themeClasses = {
    theme1: "bg-white text-gray-800 border-b border-gray-200",
    theme2: "bg-gray-900 text-white border-b border-gray-700",
    theme3:
      'bg-yellow-100 text-pink-700 border-b border-pink-300 font-["Pacifico",cursive]',
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 shadow p-4 flex justify-between items-center z-10 px-6 ${themeClasses[theme]}`}
    >
      <div className="text-2xl font-bold">MultiThemeApp</div>
      <div className="flex items-center gap-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-blue-500 font-semibold" : ""
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-500 font-semibold" : ""
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-blue-500 font-semibold" : ""
          }
        >
          Contact
        </NavLink>
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value as any)}
          className="ml-4 border bg-white text-sm px-2 py-1 rounded focus:outline-none text-gray-800"
        >
          <option value="theme1">Theme 1</option>
          <option value="theme2">Theme 2</option>
          <option value="theme3">Theme 3</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
