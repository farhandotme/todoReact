import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-6 bg-emerald-900 ">
      <div>
        <h1 className="text-4xl text-white px-20">itask - Your Task Manager</h1>
      </div>
      <div>
        <ul className="flex gap-8 px-8">
          <li className="text-2xl text-white hover:underline cursor-pointer">
            Home
          </li>
          <li className="text-2xl text-white hover:underline cursor-pointer">
            Your Task
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
