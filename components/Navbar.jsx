import React from "react";

const Navbar = () => {
  return (
    <div className="container text-white p-3">
      <div className="flex items-center justify-between relative">
        <h1 className="font-bold text-lg">
          <a href="/">
            FAST NEWS <sup>88</sup>
          </a>
        </h1>
        <nav>
          <ul className="flex">
            <li className="mr-4 2xl:mr-8 text-sm font-normal hover:border-b border-button">
              <a href="#">Dunia</a>
            </li>
            <li className="mr-4 2xl:mr-8 text-sm font-normal hover:border-b border-button">
              <a href="#">Nasional</a>
            </li>
            <li className="mr-4 2xl:mr-8 text-sm font-normal hover:border-b border-button">
              <a href="#">Teknologi</a>
            </li>

            {/* <ul className="flex"> */}
            <li className="mr-4 2xl:mr-8 text-sm font-normal hover:border-b border-button">
              <a href="#">Olahraga</a>
            </li>
            <li className="mr-4 2xl:mr-8 text-sm font-normal hover:border-b border-button">
              <a href="#">Politik</a>
            </li>
            <li className="mr-4 2xl:mr-8 text-sm font-normal hover:border-b border-button">
              <a href="#">Hiburan</a>
            </li>
            {/* </ul> */}
            <li className="text-sm font-normal border border-yellow-600 rounded-full px-2 hover:bg-button hover:text-black transition duration-300">
              <a href="/user">User Pages</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
