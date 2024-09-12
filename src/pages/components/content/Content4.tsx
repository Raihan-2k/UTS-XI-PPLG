import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function Content4() {
  return (
    <div className="flex  items-center space-y-10  my-20 mx-10 justify-between   ">
      <img src="/content4.png" alt="" className=" w-2/5" />
      <div className=" space-y-3 w-2/4 ">
        <h1 className="text-4xl font-montserratB text-black space-x-5">
          Chats for your distributed teams
        </h1>
        <p className="text-base font-montserratR font-semibold  text-black">
          Team combines the immediacy of real-time chat with an email threading
          model. With Team, you can catch up on important conversations while
          ignoring irrelevant ones.
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
    </div>
  );
}

export default Content4;
