import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RootLayout from "./layouts/RootLayout";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Product_Detial from "./pages/Product_Detial";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:id" element={<Product_Detial />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
