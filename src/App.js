import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Homelayout from "./components/Homelayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./components/products";
import ProductDetails from "./components/ProductDetails";
import { CartProvider } from "./components/CartContext";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Categorise from "./components/Categorise";
import Login from "./components/Login";
import Register from "./components/Register";
import LoginData from "./components/Logindata";
import About from "./components/About";
import Scrollcomponent from "./components/Scrollcomponent";

function App() {
  sessionStorage.setItem("LoginData", JSON.stringify(LoginData));
  return (
    <>
      <Router>
        <CartProvider>
          <Routes>
            <Route path="/" element={<Homelayout />}></Route>
            <Route path="/About" element={<About />}></Route>
            <Route path="/products" element={<Products />}></Route>{" "}
            <Route
              path="/products/:productId"
              element={<ProductDetails />}
            ></Route>
            <Route path="/Cart" element={<Cart />}></Route>
            <Route path="/checkout" element={<Checkout />}></Route>
            <Route path="/Category/:category" element={<Categorise />}></Route>
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/Register" element={<Register />}></Route>
            <Route path="/Scroll" element={<Scrollcomponent />}></Route>
          </Routes>
        </CartProvider>
      </Router>
    </>
  );
}

export default App;
