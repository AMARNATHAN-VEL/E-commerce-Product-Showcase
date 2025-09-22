import React, { useContext, useEffect } from "react";
import UserContext from "./UserContext";
import { useParams } from "react-router-dom";
import Filter from "./Filter";

const Category = () => {
  return (
    <>
      <Filter />
      <div className="cards">
        <Fun />
      </div>
    </>
  );
};

function Fun() {
  const { products, setUniId, uniId, setNum } = useContext(UserContext);
  const { category } = useParams();
  const uniqueArray = uniId.filter((obj, index, self) => {
    return index === self.findIndex((o) => o.id === obj.id);
  });
  useEffect(() => {
    setNum(uniqueArray.length);
  }, [setNum, uniId, uniqueArray.length]);

  return (
    <>
      {products
        .filter((item) => item.category === `${category}`)
        .map((item) => (
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
    </>
  );
}

export default Category;
