import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DarkModeProvider } from "./components/DarkModeContext";
import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

function App() {
  return (
    <DarkModeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </DarkModeProvider>
  );
}

export default App;
