import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className=" w-full text-white   ">
      <div className="flex  items-center justify-between">
        <img src="/logo.png" alt="gambar" />
        <div className="space-x-4">
          <Link href=""> Product</Link>
          <Link href=""> Blog</Link>
          <Link href=""> Support</Link>
          <Link href=""> Log in</Link>
          <Link href="" className="bg-blue-600 px-5 py-3 ">
            Get Access
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
