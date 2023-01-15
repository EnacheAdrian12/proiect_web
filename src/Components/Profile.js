import React, {useState} from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";




const Profile = () => {
  
  const [email, setEmail] =useState()
  const logout = () => {
    const token = localStorage.getItem("access_token");
    fetch("http://localhost:5050/logout", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res)
      .then((data) => {
        localStorage.removeItem("access_token");
        window.location.href = "/";
      });
  };

  const changeEmail = () => {
    if (email !== undefined) {
      const token = localStorage.getItem("access_token");
      fetch("http://localhost:5050/update_email", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ email: email }),
      })
        .then((res) => {
          return res;
        })
        .then(() => {
          localStorage.removeItem("access_token");
          window.location.href = "/";
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };
  
  return (
    <div className="h-screen bg-[#252323] ">
      <Container fluid>
        <div className="h-[4rem] flex justify-between items-center bg-red-500 font-bold">
          <Link to="/frontpage" className="ml-[5rem] font-mono text-[2rem]">
            Blondy
          </Link>
          <div className="flex gap-12 items-center text-[1.2rem]">
            <Link to="/addpost">Add posts</Link>
            <Link to="/profile">Profile</Link>
            <button
              href="#"
              className="mr-[6rem]"
              onClick={() => {
                logout();
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </Container>
      <div className="flex justify-center mt-[10rem] ">
        <div className=" bg-red-500 p-24 space-y-5 ">
          <h1 className="text-[2rem]">Profile</h1>
          <label class="block font-bold text-black mt-4 mb-2">
            Change Email
          </label>
          <input onChange={(e)=>{setEmail(e.target.value)}} class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" />
          <button
            className="bg-black text-white font-bold py-2 px-4 rounded-full"
            onClick={() => {changeEmail()}}
          >
            Change
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
