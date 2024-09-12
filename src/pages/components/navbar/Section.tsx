import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function Section() {
  return (
    <div>
      <section className="  max-w-xl space-y-6 mt-20">
        <h1 className=" text-5xl  font-montserratB text-white ">
          Instant collaboration for remote teams
        </h1>
        <p className="text-xl font-montserratR font-semibold  text-white">
          All-in-one place for your remote team to chat, collaborate, and track
          project progress.
        </p>
        <div className="space-x-5 flex">
          <div className="relative w-48">
            <input
              type="text"
              id="email"
              className="w-full p-3 pr-10 rounded  text-slate-400  bg-slate-100  placeholder:text-slate-400 focus:outline-none  placeholder:opacity-75 focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Your Email"
              required
            />
            <FaArrowRightLong className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500" />
          </div>

          <button className="bg-indigo-600 hover:bg-indigo-700 w-48 p-3 rounded text-white font-bold  ">
            Get Early Access
          </button>
        </div>
      </section>
    </div>
  );
}

export default Section;
