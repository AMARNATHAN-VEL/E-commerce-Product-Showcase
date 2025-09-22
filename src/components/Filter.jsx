import React from "react";
import { useNavigate } from "react-router-dom";

const Filter = () => {
  const navigate = useNavigate();
  function selectCat(e) {
    const { value } = e.target;
    switch (value) {
      case "all":
        navigate("/");
        break;
      case "men's clothing":
      case "jewelery":
      case "electronics":
      case "women's clothing":
        navigate(`/${value}`);
        break;
      default:
        navigate("/");
    }
  }
  return (
    <select name="cat" onChange={selectCat} className="filter-bar">
      <option value="all">all</option>
      <option value="men's clothing">men's clothing</option>
      <option value="jewelery">jewelery</option>
      <option value="electronics">electronics</option>
      <option value="women's clothing">women's clothing</option>
    </select>
  );
};

export default Filter;
