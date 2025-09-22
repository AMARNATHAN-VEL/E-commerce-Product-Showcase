import { useNavigate } from "react-router-dom";
import { ImCart } from "react-icons/im";
import React, { useContext,useState } from "react";
import UserContext from "./UserContext";

function NavBar() {
  const navigate = useNavigate();
 
  const { num } = useContext(UserContext);


  const [nav, setNav] = useState(0);
  function navCart() {
    navigate("/cart");
    setNav(nav+1);
  }
  function navHome() {
    navigate("/");
    setNav(nav+1);
  }

  return (
    <>
      <header>
        <nav>
          <h1 onClick={navHome} className="site-name">
            Store
          </h1>

          <div className="menu">
            {/* <input
              type="text"
              placeholder="🔍 Search for Product "
              className="search-bar"
            /> */}
            <div className="cart-btn" onClick={navCart}>
              <ImCart />
              &nbsp; Cart <sup>{num}</sup>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
