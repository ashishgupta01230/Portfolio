import React, { useState } from "react";
import pic from "../../public/my-image.jpg";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";

function Navbar() {
  const [menu, setmenu] = useState(false);
  const navItems = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "About",
    },
    {
      id: 3,
      text: "Portfolio",
    },
    {
      id: 4,
      text: "Experiance",
    },
    {
      id: 5,
      text: "Contact",
    },
  ];
  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md h-16 fixed top-0 left-0 right-0 bg-white">
      <div className="flex justify-between items-center h-16">
        <div className=" flex space-x-2">
          <img src={pic} className="h-12 w-12 rounded-full" alt="image" />
          <h1 className="font-semibold text-xl cursor-pointer">
            Ashish <span className="text-green-700 text-3xl">G</span>upta{" "}
            <p className="text-sm">Web Developer</p>
          </h1>
        </div>
        {/* desktop navbar */}
        <div>
          <ul className="hidden md:flex space-x-8">
            {navItems.map(({ id, text }) => (
              <li
                className="hover:scale-110 duration-200 cursor-pointer"
                key={id}
              >
                {text}
              </li>
            ))}
          </ul>
          <div onClick={() => setmenu(!menu)} className="md:hidden">
            {menu ? <TiThMenu size={24} /> : <IoClose size={24} />}
          </div>
        </div>
      </div>
      {/* //mibile navbar */}
      {menu && (
        <div className="">
          <ul className="md:hidden flex flex-col items-center justify-center space-y-4 text-2xl">
            {navItems.map(({ id, text }) => (
              <li
                className="hover:scale-110 duration-200 cursor-pointer font-semibold"
                key={id}
              >
                {text}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
