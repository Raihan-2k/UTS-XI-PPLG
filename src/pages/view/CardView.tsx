import React from "react";
import ChelseaCart from "../components/Cart/ChelseaCart";
import NickCart from "../components/Cart/NickCart";
import LanaCart from "../components/Cart/LanaCart";

function CardView() {
  return (
    <div className="flex flex-col space-y-10 justify-center items-center my-10 w-full">
      <h1 className="text-4xl font-montserratB text-black">
        What our users are saying
      </h1>
      <div className="flex space-x-10 mt-10">
        <ChelseaCart />
        <NickCart />
        <LanaCart />
        <LanaCart />
        <NickCart />
        <ChelseaCart />
      </div>
    </div>
  );
}

export default CardView;
