import React, { useContext, useEffect } from "react";
import UserContext from "./UserContext";
import Filter from "./Filter";
import Footer from "./Footer";

const ShowCase = () => {
  const { products, uniId, setUniId, setNum } = useContext(UserContext);

  const uniqueArray = uniId.filter((obj, index, self) => {
    return index === self.findIndex((o) => o.id === obj.id);
  });
  useEffect(() => {
    setNum(uniqueArray.length);
  }, [setNum, uniId, uniqueArray.length]);

  return (
    <>
      <Filter />
      <div className="cards">
        {products.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
            <p>
              <span className="name">Category : </span>
              {item.category}
            </p>
            <p>
              <span className="name">Price : </span>
              {item.price}
            </p>
            <button
              type="button"
              className="card-btn"
              onClick={() => {
                setUniId([...uniId, item]);
              }}
            >
              Add Cart
            </button>
          </div>
        ))}
      </div>
      <Footer/>
    </>
  );
};

export default ShowCase;
