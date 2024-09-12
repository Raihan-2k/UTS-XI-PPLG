import React from "react";

function ChelseaCart() {
  return (
    <div className="max-w-xs  flex flex-col p-3  rounded-xl space-y-5 shadow-md ">
      <img src="/Rating.png" alt="" width={100} height={100} />
      <div>
        <span className="text-justify">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod sint
          quam id earum eum sit rem pariatur quia provident libero sunt
          corrupti, ad adipisci ex natus rerum, dolorum fugiat voluptates!
        </span>
      </div>
      <div className="flex row space-x-5">
        <img src="/Avatar-chealsea.png" alt="" width={60} height={60} />
        <div className="flex flex-col">
          <span className="font-montserratB">Chealsea Morgan</span>
          <span>CEO ot Subway</span>
        </div>
      </div>
    </div>
  );
}

export default ChelseaCart;
