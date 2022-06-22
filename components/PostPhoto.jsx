import React from "react";
import Image from "next/image";
import styles from "../styles/PostHead.module.css";

const PostPhoto = () => {
  return (
    <div className="intro">
      <div className="font-bold text-xl pb-8">
        <h1 className="border-l-8 pl-3 border-button">GALLERY PHOTO</h1>
      </div>

      <div className="flex ">
        <div className="bg-primary w-1/3 p-3 rounded-md flex ">
          <div className={styles.img1}>
            {/* <Image src={HPhoto3} className="rounded-md" alt="" /> */}
            <div className=" p-2 mt-24 bg-secondary rounded-b-md opacity-80 ">
              <p className="font-semibold text-sm text-black">Setelah 2tahun akhirnya PRJ ada lagi!!</p>
            </div>
          </div>
        </div>

        <div className="bg-primary w-1/3 p-3 mx-2 rounded-md flex">
          <div className={styles.img2}>
            {/* <Image src={HPhoto3} className="rounded-md" alt="" /> */}
            <div className=" p-2 mt-24 bg-secondary rounded-b-md opacity-80 ">
              <p className="font-semibold text-sm text-black">Ada apa dengan El Rumi dan Winson?!</p>
            </div>
          </div>
        </div>

        <div className="bg-primary w-1/3 p-3 mr-1 rounded-md flex">
          <div className={styles.img3}>
            {/* <Image src={HPhoto3} className="rounded-md" alt="" /> */}
            <div className="p-2 mt-24 bg-secondary rounded-b-md opacity-80">
              <p className="font-semibold text-sm text-black">Elon Musk berencana akan membeli Twitter?!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostPhoto;
