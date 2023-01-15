import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

const FrontPage = () => {
  const [posts, setPosts] = useState();
  const turn = true;
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    fetch("http://localhost:5050/posts_get", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        setPosts(response);
      });
  }, [turn]);
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
      .then(() => {
        localStorage.removeItem("access_token");
        window.location.href = "/";
      });
  };

  return (
    <div className="bg-[#252323] h-screen">
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
      {posts !== undefined
        ? posts.map((element) => {
            return (
              <div className="space-x-[3rem] flex justify-center mt-[10rem]  ">
                <div className="space-y-[3rem] p-8  border border-black rounded w-[60%] bg-red-500">
                  <h1 className="text-[2rem] font-bold">{element.title}</h1>

                  <p className="text-[1.2rem]">{element.content}</p>
                </div>
              </div>
            );
          })
        : ""}
    </div>
  );
};

export default FrontPage;
