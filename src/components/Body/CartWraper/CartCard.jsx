import React from "react";
import { MdDelete } from "react-icons/md";
import { MdCurrencyRupee } from "react-icons/md";

const CartCard = () => {
  return (
    <div>
      <div className="w-[490px] mx-[10px] mb-6 border rounded-md shadow-md flex p-2 align-middle justify-between">
        <div className=" w-[150px]">
          <img
            src="https://b.zmtcdn.com/web/about/a7b0a36d5107f3590895981dab2eeac31563208212.jpeg?output-format=webp"
            alt="image"
            className="h-[] w-[130px] rounded-md"
          />
        </div>
        <div className=" w-[160px] ">
          <h4 className="text-lg font-semibold text-rose-900 ">
            {"One8 Commune"}
          </h4>
          <p className="mt-2">{"North Indian"}</p>
        </div>
        <div className="h-20 w-20 rounded-b-md bg-red-600 text-white">
          <h4 className="text-center font-semibold text-">Price</h4>
          <div className="flex align-middle mx-auto mt-2 ml-4 ">
            <MdCurrencyRupee className="inline-block mt-1" />{" "}
            <h2 className="font-semibold">{"200"}</h2>
          </div>
        </div>
        <div className="mt-6">
          <MdDelete className="text-2xl cursor-pointer " />
        </div>
      </div>
    </div>
  );
};

export default CartCard;
