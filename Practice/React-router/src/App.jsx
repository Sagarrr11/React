import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import Men from "./Pages/Men";
import Women from "./Pages/Women";
import Product from "./Pages/Product";
import RandomAbout from "./Pages/RandomAbout";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        {/* Nested route */}
        <Route path="/product/men" element={<Men />} />
        <Route path="/product/women" element={<Women />} />
        {/* Dynamic routing */}
        <Route path="/about/:id" element={<RandomAbout />} />
      </Routes>
    </div>
  );
};

export default App;
