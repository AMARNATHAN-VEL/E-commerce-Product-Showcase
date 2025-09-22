import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import UserContext from "./components/UserContext";
import useFetch from "./components/useFetchApi";
import ShowCase from "./components/ShowCase";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Category from "./components/Category";
import Cart from "./components/Cart";
import { useState } from "react";

function App() {
  const { products, error, isLoading } = useFetch(
    "https://fakestoreapi.com/products"
  );
  const [uniId, setUniId] = useState([]);
  const [num, setNum] = useState(0);
  return (
    <UserContext.Provider
      value={{ products, error, isLoading, uniId, setUniId, num, setNum}}
    >
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<ShowCase />} />
          <Route path="/:category" element={<Category />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
