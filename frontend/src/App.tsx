import "./App.css";
import { Navbar } from "./components/Navbar";
import { ThemeProvider } from "./components/theme-provider";
import { Footer } from "./components/Footer";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Navbar />
      <Outlet />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
