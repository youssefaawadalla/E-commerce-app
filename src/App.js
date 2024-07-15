import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import ProductsList from "./components/ProductsList";
import About from "./components/About";

import { Routes, Route } from "react-router-dom";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar/>
      <Routes>
        <Route path="/" element={<> <Slider/> <ProductsList/> </>}/>
        <Route path="about" element={<About/>}/>
      </Routes>
    </ShoppingCartProvider>
  );
}

export default App;