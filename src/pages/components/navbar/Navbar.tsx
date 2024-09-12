import { useState, useEffect } from "react";
import Link from "next/link";
import React from "react";

function Navbar() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full text-white transition-all duration-700 ease-out transform ${
        isSticky
          ? "fixed top-0 left-0 z-50 bg-second shadow-lg opacity-100 translate-y-0 p-5 px-14 "
          : "relative opacity-90 translate-y-0"
      }`}
    >
      <div className="flex items-center justify-between">
        <img src="/logo.png" alt="Logo" className="h-10" />
        <div className="space-x-8">
          <Link href="" className="hover:underline underline-offset-8">
            Product
          </Link>
          <Link href="" className="hover:underline underline-offset-8">
            Blog
          </Link>
          <Link href="" className="hover:underline underline-offset-8">
            Support
          </Link>
          <Link href="" className="hover:underline underline-offset-8">
            Log in
          </Link>
          <Link
            href=""
            className="bg-indigo-600 px-7 py-3 rounded hover:bg-indigo-700"
          >
            Get Access
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
