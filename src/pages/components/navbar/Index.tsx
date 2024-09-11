import React from "react";
import Navbar from "./Navbar";
import Link from "next/link";
import Section from "./Section";

function Hero() {
  return (
    <div
      className="bg-cover min-h-svh bg-no-repeat bg-center p-5 px-14"
      style={{ backgroundImage: "url('/HeroNav.png')" }}
    >
      <Navbar />
      <Section />
      <div></div>
    </div>
  );
}

export default Hero;
