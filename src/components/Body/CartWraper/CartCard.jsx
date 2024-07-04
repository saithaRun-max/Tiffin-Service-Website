import React from "react";
import { MdDelete } from "react-icons/md";
import { MdCurrencyRupee } from "react-icons/md";
import { IoAddCircle } from "react-icons/io5";

const CartCard = ({name, img, price,description,menuPageStatus}) => {

  return (
    <div>
      <div className="w-[490px] mx-[10px] mb-6 border rounded-md shadow-md flex p-2 align-middle justify-between">
        <div className=" w-[150px]">
          <img
            src={img}
            alt="image"
            className="h-[] w-[130px] rounded-md"
          />
        </div>
        <div className=" w-[160px] mt-5">
          <h4 className="text-lg font-semibold text-rose-900 ">
            {name}
          </h4>
          <p className="mt-2">{description ? description :null}</p>
        </div>
        <div className="h-20 w-20 rounded-b-md bg-red-600 text-white">
          <h4 className="text-center font-semibold text-">Price</h4>
          <div className="flex align-middle mx-auto mt-2 ml-4 ">
            <MdCurrencyRupee className="inline-block mt-1" />{" "}
            <h2 className="font-semibold">{price/100}</h2>
          </div>
        </div>
        <div className="mt-6">
          
         {
          menuPageStatus ? <IoAddCircle className="text-2xl cursor-pointer " /> : <MdDelete className="text-2xl cursor-pointer " />
         }
          
        </div>
      </div>
    </div>
  );
};

export default CartCard;
