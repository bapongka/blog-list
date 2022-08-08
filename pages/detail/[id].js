import Head from "next/head";
//import PostList from "/components/PostList";
//import PostPhoto from "/components/PostPhoto";
import Navbar from "/components/Navbar";
//import DetailPost from "/components/DetailPost";
//import { useRouter } from "next/router";
//import React, { useEffect, useState } from "react";
//import axios from "axios";

export default function Detail() {
  // const router = useRouter();
  // const { id } = router.query;
  // console.log(id);

  // const [details, setDetails] = useState([]);
  // const getDetails = async () => {
  //   try {
  //     const response = await axios.get(`https://gorest.co.in/public/v2/users/${id}/posts`);
  //     setDetails(response.data);
  //     console.log("hellow", response.data);
  //   } catch (e) {
  //     console.log(e.message);
  //   }
  // };

  // useEffect(() => {
  //   if (!router.isReady) return;
  //   getDetails();
  //   const array = ["1", "2"];
  //   const array2 = [...array, "3"];

  //   console.log(array2);
  //   console.log("test");
  //   // codes using router.query
  // }, [router.isReady]);

  return (
    <div>
      <Head>
        <title>Fast News | Detail</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar */}
      <div className=" bg-primary">
        <div className="container  mx-auto">
          <Navbar />
        </div>
      </div>
      {/* Navbar END */}

      {/* Main */}
      {/* <div className="flex p-10">
        <div className="container flex-initial w-1/4  p-3 bg-secondary rounded-md">
          <PostList />
        </div>
        <div className="container flex-initial w-5/6 mx-5 p-3 bg-secondary rounded-md">
          <DetailPost data={details} />
        </div>
        <div className="container flex-initial w-1/4  p-3 bg-secondary rounded-md">
          <PostPhoto />
        </div>
      </div> */}
      {/* Main END */}
    </div>
  );
}
