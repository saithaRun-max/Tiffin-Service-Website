import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const ProductCard = ({ info }) => {
  const [cusinieNames, setCuisineNames] = useState([]);
  const { name, image, locality, rating, cuisine } = info;

  return (
    <div className="h-[360px] w-[350px] border border-b-2 p-3">
      <div className="w-[320px] h-[250px] border rounded-xl">
        <img
          src={image.url}
          alt="product"
          className="w-full h-full rounded-md"
        />
      </div>
      <div className="flex justify-between pt-2">
        {name.length > 30 ? (
          <h6 className=" font-normal text-base text-amber-900 ">{name}</h6>
        ) : (
          <h6 className=" font-normal text-xl text-amber-900 ">{name}</h6>
        )}

        <div className="w-[44px] h-5 px-1 bg-amber-900 text-white font-semibold rounded-md flex justify-between">
          <div>
            <h6 className="text-sm">{rating.aggregate_rating}</h6>
          </div>
          <FaStar className="text-xs mt-1 inline-block" />{" "}
        </div>
      </div>
      <div>
        <p className="pt-1 font-light text-gray-500 ">
          {cuisine[0].name}, {cuisine[1].name}, {cuisine[2].name}
        </p>
      </div>
      <div>
        {locality.name.length > 35 ? (
          <p className="pt-1 font-normal text-sm text-gray-500">
            {locality.name}
          </p>
        ) : (
          <p className="pt-1 font-normal text-gray-500">{locality.name}</p>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
