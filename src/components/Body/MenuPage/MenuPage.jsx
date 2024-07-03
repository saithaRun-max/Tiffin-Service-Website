import React from "react";
import CartContainer from "../CartWraper/CartContainer";
import CartCard from "../CartWraper/CartCard";

const MenuPage = ({ heading, restaurantInfo }) => {
  const { info } = restaurantInfo;
  if (!info) return null;
  const { name, image, cuisine, locality,cft } = info;
  console.log(info);
  return (
    <div className="w-screen h-full">
      <div className="mx-[8%] flex">
        <div className="w-[560px] h-full py-5">
          <img
            src={image.url}
            alt="img"
            className="h-[300px]  w-[430px] rounded-md"
          />

          <div className="mt-3 h-[100px]">
            <h4 className="font-normal text-2xl text-amber-900 ">{name}</h4>
            <p className="font-light text-gray-500">{cuisine[0].name}, {cuisine[1].name}, {cuisine[2].name}</p>
            <p className="font-normal text-gray-500">{locality.name}</p>
            <p className="font-normal text-amber-700">{cft.text}</p>
          </div>
          <div className="mt-14 ">
            <h2 className="text-lg font-medium text-gray-900">
              Write review about restaurant :
            </h2>
            <textarea
              name=""
              id=""
              cols="60"
              rows="3"
              className="border border-black mt-4 rounded-md bg-none outline-none p-2"
            />
            <br />
            <div className="flex justify-center -ml-16">
              <button className="text-sm bg-lime-500 p-2 px-4 rounded-lg font-semibold ">
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className="">
          <CartContainer heading={heading} items={cuisine} isCloseBtnStatus={false} menuPage={true} />
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
