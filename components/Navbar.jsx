import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="container text-white p-3">
      <div className="flex items-center justify-between relative">
        <h1 className="font-bold text-lg">
          <Link href="/">
            <a>
              FAST NEWS <sup>88</sup>
            </a>
          </Link>
        </h1>
        <nav>
          <ul className="flex">
            <li className="mr-4 2xl:mr-8 text-sm font-normal hover:border-b border-button">
              <Link href="#">
                <a>Dunia</a>
              </Link>
            </li>
            <li className="mr-4 2xl:mr-8 text-sm font-normal hover:border-b border-button">
              <Link href="#">
                <a>Nasional</a>
              </Link>
            </li>
            <li className="mr-4 2xl:mr-8 text-sm font-normal hover:border-b border-button">
              <Link href="#">
                <a>Teknologi</a>
              </Link>
            </li>
            <li className="mr-4 2xl:mr-8 text-sm font-normal hover:border-b border-button">
              <Link href="#">
                <a>Olahraga</a>
              </Link>
            </li>
            <li className="mr-4 2xl:mr-8 text-sm font-normal hover:border-b border-button">
              <Link href="#">
                <a>Politik</a>
              </Link>
            </li>
            <li className="mr-4 2xl:mr-8 text-sm font-normal hover:border-b border-button">
              <Link href="#">
                <a>Hiburan</a>
              </Link>
            </li>
            <li className="text-sm font-normal border border-yellow-600 rounded-full px-2 hover:bg-button hover:text-black transition duration-300">
              <Link href="/user" passHref>
                User Pages
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
