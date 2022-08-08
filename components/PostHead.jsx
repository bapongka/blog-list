import React from "react";
import Image from "next/image";
import HPhoto1 from "../public/img/head/Hphoto1.jpg";
import GPhoto1 from "../public/img/head/Hphoto2.jpg";
import GPhoto2 from "../public/img/head/Hphoto3.jpg";
import GPhoto3 from "../public/img/head/Hphoto4.jpg";

const PostHead = () => {
  return (
    <div className="intro">
      <div className="font-bold text-xl pb-8">
        <h1 className="border-l-8 pl-3 border-button">HEADLINE NEWS</h1>
      </div>

      <div className="flex">
        <div className="bg-primary p-3 h-1/5 rounded-md flex-wrap">
          <Image src={GPhoto1} className="rounded-md" alt="Gallery Photo" />
          <div className=" w-full text-white">
            <p className="font-bold text-sm">BAHAYA MENGANGGUR!!</p>
          </div>
        </div>

        <div className="bg-primary p-3 mx-2 h-1/5 rounded-md flex-wrap">
          <Image src={GPhoto2} className="rounded-md" alt="Gallery Photo" />
          <div className=" w-full text-white">
            <p className="font-bold text-sm pb-1">BAHAYA MENGANGGUR!!</p>
          </div>
        </div>

        <div className="bg-primary p-3 h-1/5 rounded-md flex-wrap">
          <Image src={GPhoto3} className="rounded-md" alt="Gallery Photo" />
          <div className=" w-full text-white">
            <p className="font-bold text-sm pb-1">BAHAYA MENGANGGUR!!</p>
          </div>
        </div>
      </div>

      {/* HEADLINE */}
      <div className="bg-primary p-3 mt-5  text-white rounded-md">
        <div className="flex p-1">
          <div className="container flex-initial w-1/2">
            <h1 className="text-base font-bold pb-2">Rara The Rain Shaman</h1>
            <Image src={HPhoto1} className="rounded-md" alt="Head Photo" />
          </div>
          <div className="container flex-initial w-1/2 ml-5">
            <p className="pb-3 pt-7 text-justify">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, minus commodi? Aliquid nam eos, itaque in eaque recusandae ducimus deleniti vero. Provident aliquid tempore quam soluta labore, quasi sed omnis facere ducimus
              ipsam, sint incidunt. Culpa minima eaque commodi ipsum debitis ea saepe dicta deserunt unde.
            </p>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              <p className="ml-2 text-sm font-normal underline underline-offset-4">Posted on Februari 18,2022</p>
            </div>
          </div>
        </div>
      </div>
      {/* HEADLINE END */}
    </div>
  );
};

export default PostHead;
