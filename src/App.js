
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
import Header from "./components/Header";
import Footer from "./components/Footer";
import { createContext, useState, useContext, useCallback } from "react";

export const MyContext = createContext(); // Define the context here

function App() {
  sessionStorage.setItem("LoginData", JSON.stringify(LoginData));
  const [button, setButton] = useState(false);
  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);
  const [user, setUser] = useState("User");

  const MyContextProvider = ({ children }) => {
    const [cartObj, setCartObj] = useState([]);

    const updateCart = useCallback((newValue) => {
      setCartObj((prevValue) => [...prevValue, newValue]);
    },[]);

    return (
      <MyContext.Provider value={{ cartObj, updateCart }}>
        {children}
      </MyContext.Provider>
    );
  };

  return (
    <>
      <Router>
        <Header
          button={button}
          setButton={setButton}
          login={login}
          setLogin={setLogin}
          user={user}
        />
        {login && (
          <Login
            login={login}
            setLogin={setLogin}
            setSignup={setSignup}
            setButton={setButton}
            setUser={setUser}
          />
        )}
        {/* <CartProvider> */}
          <MyContextProvider> {/* Wrap with MyContextProvider */}
            <Routes>
              <Route path="/" element={<Homelayout />} />
              <Route path="/About" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route
                path="/products/:productId"
                element={<ProductDetails />}
              />
              <Route path="/Cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/Category/:category" element={<Categorise />} />
              <Route path="/Scroll" element={<Scrollcomponent />} />
            </Routes>
          </MyContextProvider>
        {/* </CartProvider> */}
        {signup && (
          <Register signup={signup} setSignup={setSignup} setLogin={setLogin} />
        )}
        <Footer setSignup={setSignup} setLogin={setLogin} />
      </Router>
    </>
  );
}

export default App;
