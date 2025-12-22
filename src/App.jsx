import { Routes, Route } from "react-router-dom";

import Home from "./pages";           // index.jsx
import About from "./pages/About";
import CCTV from "./pages/CCTV";
import Alarms from "./pages/Alarms";
import PatTesting from "./pages/PatTesting";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cctv" element={<CCTV />} />
        <Route path="/alarms" element={<Alarms />} />
        <Route path="/pattesting" element={<PatTesting />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
