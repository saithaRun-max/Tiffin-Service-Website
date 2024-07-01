import React from "react";
import CartCard from "./CartCard";

const CartContainer = () => {
  return (
    <div className="w-[480px] h-screen m-2 mx-auto p-4  rounded-sm backdrop-blur-xl shadow-lg flex flex-col">
      <div className="flex justify-between align-middle">
        <h4 className="font-semibold text-lg">My Cart</h4>
      </div>
      <div className="mt-4">
      <CartCard />
      <CartCard />
      </div>

   
    </div>
  );
};

export default CartContainer;
