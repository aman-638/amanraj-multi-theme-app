import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { ThemeProvider, useTheme } from "./context/ThemeContext";

const ThemedMain = () => {
  const { theme } = useTheme();

  const themeClasses = {
    theme1: "bg-white text-gray-800",
    theme2: "bg-gray-900 text-white",
    theme3: 'bg-yellow-50 text-pink-800 font-["Pacifico",cursive]',
  };

  return (
    <main
      className={`pt-20 p-4 min-h-screen transition-all duration-300 ${themeClasses[theme]}`}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Header />
        <ThemedMain />
      </Router>
    </ThemeProvider>
  );
};

export default App;
