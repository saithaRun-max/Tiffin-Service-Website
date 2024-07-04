import React, { useContext } from "react";
import CartCard from "./CartCard";
import { RxCross2 } from "react-icons/rx";
import userContext from "../../../utils/userContext";

const CartContainer = ({ heading, isCloseBtnStatus, itemCard,menuPage }) => {
  const {setCartInfo,cartInfo} = useContext(userContext);
  return (
    <>
      <div className="flex justify-between">
        <div></div>
        <div className=" w-[580px] h-full">
          <div className="h-screen p-4  rounded-sm backdrop-blur-xl shadow-lg flex flex-col bg-gradient-to-r from-gray-500">
            <div className="flex align-bottom justify-between">
              <h4 className="font-semibold text-2xl text-slate-200">
                {heading}
              </h4>
              {isCloseBtnStatus ? (
                <RxCross2 className="mt-2 text-xl cursor-pointer" />
              ) : null}
            </div>
            <div className=" flex justify-between align-middle"></div>
            <div className="mt-4 h-[560px] overflow-y-scroll">
              {itemCard.map((item) => (
                <CartCard {...item} menuPageStatus={menuPage} onClick={()=>setCartInfo([...cartInfo, item ])}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartContainer;
