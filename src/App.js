import FSApp from "./pages/FSApp";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/fsapp" element={<FSApp />} />
        <Route path="/fsapp" element={<FSApp />} />
        <Route path="/blog" element={<div>Blog Coming Soon...</div>} />
      </Routes>
    </Router>
  );
}

export default App;
