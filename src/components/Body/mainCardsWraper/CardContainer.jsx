import React, { useContext } from "react";
import ProductCard from "./ProductCard";
import { restaurantsData } from "../../../utils/productsConstants";
import { Link } from "react-router-dom";
import userContext from "../../../utils/userContext";

const CardContainer = () => {
  const { setRestaurantInfo } = useContext(userContext);

  return (
    <div className="flex flex-wrap mx-[10%] gap-6 mt-6">
      {restaurantsData.map((restaurant, i) => (
        <Link to="/menu" key={i} onClick={()=>setRestaurantInfo(restaurant)}>
          <ProductCard {...restaurant} />
        </Link>
      ))}
    </div>
  );
};

export default CardContainer;
