import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function Content3() {
  return (
    <div className="flex  items-center space-y-10  my-20 mx-10 justify-between   ">
      <div className=" space-y-3 w-2/4 ">
        <h1 className="text-4xl font-montserratB text-black space-x-5">
          Move faster with your Team tools
        </h1>
        <p className="text-base font-montserratR font-semibold  text-black">
          With your other work apps connected to Team, you can work faster by
          switching tabs less. And with powerful tools like Workflow Builder,
          you can automate away routine tasks.
        </p>
        <div className="flex space-x-2 items-center pr-2">
          <Link
            href=""
            className="text-blue-700 underline underline-offset-6 hover:no-underline"
          >
            Learn More
          </Link>
          <FaArrowRightLong className="text-blue-700" />
        </div>
      </div>
      <img src="/content3.png" alt="" className=" w-2/5" />
    </div>
  );
}

export default Content3;
