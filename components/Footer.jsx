import React from "react";

const Footer = () => {
  return (
    <div className="container text-white p-3">
      <h1 className="font-bold text-lg pb-5 text-center">
        <a href="/">
          FAST NEWS <sup>88</sup>
        </a>
      </h1>
      <div className="flex pb-5 justify-center">
        <p className="font-normal text-sm px-5 border-l border-button">
          <a href="#" className="hover:text-button">
            About Us
          </a>
        </p>
        <p className="font-normal text-sm px-5 border-l border-button">
          <a href="#" className="hover:text-button">
            Redaksi
          </a>
        </p>
        <p className="font-normal text-sm px-5 border-x border-button">
          <a href="#" className="hover:text-button">
            Pedoman Media Siber
          </a>
        </p>
        <p className="font-normal text-sm px-5 border-r border-button">
          <a href="#" className="hover:text-button">
            Career
          </a>
        </p>
        <p className="font-normal text-sm px-5 border-r border-button">
          <a href="#" className="hover:text-button">
            Disclaimer
          </a>
        </p>
      </div>
      <div class="w-full pt-3 border-t">
        <p class="font-medium text-xs text-secondary text-center">2022 &copy; Ridho Rakhaman. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
