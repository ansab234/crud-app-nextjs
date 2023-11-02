import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className=" bg-slate-500 flex justify-between p-5 sticky top-0">
      <div className=" mx-10 items-center flex">
        <Link href={"/"}>CRUD App</Link>
      </div>
      <div className=" mx-10 bg-slate-200 text-black p-3">
        <Link href={"/add-topic"}>Add Topic</Link>
      </div>
    </div>
  );
};

export default Navbar;
