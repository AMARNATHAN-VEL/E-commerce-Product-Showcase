import React, { useContext, useEffect, useState } from "react";
import UserContext from "./UserContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  let total = 0;
  const { uniId, setUniId, setNum } = useContext(UserContext);
  const uniqueArray = uniId.filter((obj, index, self) => {
    return index === self.findIndex((o) => o.id === obj.id);
  });

  const [list, setList] = useState(uniqueArray);

  totalCash();

  function totalCash() {
    total = list.reduce((s, i) => s + i.price, 0);
  }
  useEffect(() => {
    setNum(list.length);
  }, [list, setNum]);

  function delItem(id) {
    const newlist = list.filter((i) => i.id !== id);
    setList(newlist);
    setUniId(newlist);
    setNum(list.length);
    totalCash();
  }
  if (list.length < 1)
    return (
      <div className="empty-cart">
        <p>Your cart is empty!</p>
        <button type="button" onClick={() => navigate("/")}>
          Shop now
        </button>
      </div>
    );
  return (
    <div className="cart">
      {list.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.image} alt={item.title} className="cart-img" />
          <div className="cart-det">
            <h5>{item.title}</h5>
            <p>
              <span>Price : </span>
              {item.price}
            </p>
          </div>
          <button
            type="button"
            className="cart-del-btn"
            onClick={() => delItem(item.id)}
          >
            del
          </button>
        </div>
      ))}
      <div className="payment">
        <p>Total: {total}</p>
        <button type="button" className="cart-pay-btn">
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default Cart;
