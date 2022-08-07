import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="container text-white p-3">
      <h1 className="font-bold text-lg pb-5 text-center">
        <Link href="/">
          <a>
            FAST NEWS <sup>88</sup>
          </a>
        </Link>
      </h1>
      <div className="flex pb-5 justify-center">
        <p className="font-normal text-sm px-5 border-l border-button">
          <Link href="#">
            <a className="hover:text-button">About Us</a>
          </Link>
        </p>
        <p className="font-normal text-sm px-5 border-l border-button">
          <Link href="#">
            <a className="hover:text-button">Redaksi</a>
          </Link>
        </p>
        <p className="font-normal text-sm px-5 border-x border-button">
          <Link href="#">
            <a className="hover:text-button">Pedoman Media Siber</a>
          </Link>
        </p>
        <p className="font-normal text-sm px-5 border-r border-button">
          <Link href="#">
            <a className="hover:text-button">Career</a>
          </Link>
        </p>
        <p className="font-normal text-sm px-5 border-r border-button">
          <Link href="#">
            <a className="hover:text-button">Disclaimer</a>
          </Link>
        </p>
      </div>
      <div className="w-full pt-3 border-t">
        <p className="font-medium text-xs text-secondary text-center">2022 &copy; Ridho Rakhaman. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
