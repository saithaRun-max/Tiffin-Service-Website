import React from "react";
import CartCard from "./CartCard";
import { RxCross2 } from "react-icons/rx";

const CartContainer = () => {
  return (
    <>
      <div className="absolute -right-16 -top-2 w-[680px]">
        <div className="mx-[10%] h-screen m-2 p-4  rounded-sm backdrop-blur-xl shadow-lg flex flex-col bg-gradient-to-r from-gray-500">
          <div className="flex align-bottom justify-between">
            <h4 className="font-semibold text-2xl text-slate-200">My Cart</h4>
            <RxCross2 className="mt-2 text-xl cursor-pointer" />
          </div>
          <div className=" flex justify-between align-middle"></div>
          <div className="mt-4">
            <CartCard />
            <CartCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default CartContainer;
