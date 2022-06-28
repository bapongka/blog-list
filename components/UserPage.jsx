import React, { useEffect, useState } from "react";
import axios from "axios";

const Userpage = () => {
  const [users, setUser] = useState([]);
  const getUser = async () => {
    try {
      const response = await axios.get("https://gorest.co.in/public/v2/users");
      setUser(response.data);
      console.log(response.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="intro">
      <div className="font-bold text-xl pb-8">
        <h1 className="border-l-8 pl-3 border-button">User Page</h1>
      </div>

      {/* HEADLINE */}
      <div className=" bg-primary p-3 text-white rounded-md">
        <div className="flex">
          <div>
            <h1 className="mb-3 py-1 bg-button rounded-l-lg text-center text-black text-base font-semibold">Full Name</h1>
            {users.map((user, index) => {
              return (
                <p className="px-5 py-2 border-r border-b border-button" key={index}>
                  {user.name}
                </p>
              );
            })}
          </div>
          <div>
            <h1 className="mb-3 py-1 bg-button text-center text-black text-base font-semibold">Email</h1>
            {users.map((user, index) => {
              return (
                <p className="px-5 py-2 border-r border-b border-button" key={index}>
                  {user.email}
                </p>
              );
            })}
          </div>
          <div>
            <h1 className="mb-3 py-1 bg-button text-center text-black text-base font-semibold">Gender</h1>
            {users.map((user, index) => {
              return (
                <p className="px-5 py-2 border-r border-b border-button" key={index}>
                  {user.gender}
                </p>
              );
            })}
          </div>
          <div>
            <h1 className="mb-3 py-1 bg-button rounded-r-lg text-center text-black text-base font-semibold">Status</h1>
            {users.map((user, index) => {
              return (
                <p className="px-5 py-2 border-b border-button" key={index}>
                  {user.status}
                </p>
              );
            })}
          </div>
          {/* <div>
            <h1 className="flex bg-button rounded-r-lg items-center text-black text-base font-semibold mb-3 px-3">
              Add
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-7 ml-1" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
              </svg>
            </h1>
            <div className="flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div> */}
        </div>
      </div>
      {/* <div className="table w-full p-3 bg-primary rounded-lg text-white">
        <div className="table-header-group">
          <div className="table-row bg-button rounded-lg text-black">
            <div className="table-cell">Full Name</div>
            <div className="table-cell">Email</div>
            <div className="table-cell">Gender</div>
            <div className="table-cell">Status</div>
          </div>
        </div>
        <div className="table-row-group">
          <div className="table-row border-b border-button">
            <div className="table-cell">ridho rakhaman</div>
            <div className="table-cell">ridhouyee69@gmail.com</div>
            <div className="table-cell">male</div>
            <div className="table-cell">bujank</div>
          </div>
          <div className="table-row">
            <div className="table-cell">ridho rakhaman</div>
            <div className="table-cell">ridhouyee69@gmail.com</div>
            <div className="table-cell">male</div>
            <div className="table-cell">bujank</div>
          </div>
        </div>
      </div> */}
      {/* HEADLINE END */}
    </div>
  );
};

export default Userpage;
