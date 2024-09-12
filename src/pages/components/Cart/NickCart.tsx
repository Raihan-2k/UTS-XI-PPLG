import React from "react";

function NickCart() {
  return (
    <div className="max-w-xs  flex flex-col p-3  rounded-xl space-y-5 shadow-md ">
      <img src="/Rating.png" alt="" width={100} height={100} />
      <div>
        <span className="text-justify">
          In a laoreet purus. Integer turpis quam, laoreet id orci nec, ultrices
          lacinia nunc. Aliquam erat volutpat. Curabitur fringilla in purus eget
          egestas. Etiam quis.
        </span>
      </div>
      <div className="flex row space-x-5">
        <img src="/Avatar-nick.png" alt="" width={60} height={60} />
        <div className="flex flex-col">
          <span className="font-montserratB">Nick Cave</span>
          <span>CMO ot Nokia</span>
        </div>
      </div>
    </div>
  );
}

export default NickCart;
