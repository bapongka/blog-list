import Head from "next/head";
import Navbar from "../components/Navbar";
import UserPage from "../components/UserPage";

export default function Detail() {
  return (
    <div>
      <Head>
        <title>Fast News | User Pages</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar */}
      <div className="bg-primary">
        <div className="container w-2/3 mx-auto">
          <Navbar />
        </div>
      </div>
      {/* Navbar END */}

      {/* Main */}
      <div className="flex p-10 justify-center">
        <div className="flex-initial p-3 bg-secondary rounded-md">
          <UserPage />
        </div>
      </div>
      {/* Main END */}
    </div>
  );
}
