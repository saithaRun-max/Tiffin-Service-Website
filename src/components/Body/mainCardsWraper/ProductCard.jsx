import React from "react";
import { FaStar } from "react-icons/fa";

const ProductCard = () => {
  return (
    <div className="h-[360px] w-[350px] border border-b-2 p-3">
      <div className="w-[320px] h-[250px] border rounded-xl">
        <img src="" alt="product" className="w-full h-full" />
      </div>
      <div className="flex justify-between pt-2">
        <h4 className=" font-normal text-xl text-amber-900 ">Product Name</h4>

        <div className="w-[44px] h-5 px-1 bg-amber-900 text-white font-semibold rounded-md flex justify-between">
          <div>
            <h6 className="text-sm">4.5</h6>
          </div>
          <FaStar className="text-xs mt-1 inline-block" />{" "}
        </div>
      </div>
      <div>
        <p className="pt-1 font-light text-gray-500 ">Cusines</p>
      </div>
      <div>
        <p className="pt-1 font-normal text-gray-500">Address</p>
      </div>
    </div>
  );
};

export default ProductCard;
