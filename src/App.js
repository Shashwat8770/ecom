import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Electronics from "./pages/Electronics";
import Jewellery from "./pages/Jewellery";
import Mens from "./pages/Mens";
import Womens from "./pages/Womens";


function App() {
  return (
    <Router>
    <Navbar/>   
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/electronics" element={<Electronics/>}/>
      <Route path="/jewellery" element={<Jewellery/>}/>
      <Route path="/mens" element={<Mens/>}/>
      <Route path="/womens" element={<Womens/>}/>
    </Routes>
    <Footer/>
    </Router>
  );
}

export default App;
