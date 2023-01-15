import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

const AddPosts = () => {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const addPost = () => {
    if (content !== 0 && title !== 0) {
      const token = localStorage.getItem("access_token");
      fetch("http://localhost:5050/posts_post", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ title: title, content: content }),
      })
        .then((res) => {
         
            window.location.href = "/frontpage";
          
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  return (
    <>
      <Container fluid>
        <div className="h-[4rem] flex justify-between items-center bg-red-500 font-bold">
          <Link to="/frontpage" className="ml-[5rem] font-mono text-[2rem]">
            Blondy
          </Link>
          <div className="flex gap-12 items-center text-[1.2rem]">
            <Link to="/addpost">Add posts</Link>
            <Link to="/profile">Profile</Link>
            <button href="#" className="mr-[6rem]" onClick={() => {}}>
              Logout
            </button>
          </div>
        </div>
      </Container>
      <div className="flex justify-center h-screen bg-[#252323]">
        <div class="bg-red-500 mt-[10rem] p-6 rounded-lg shadow-lg h-[23rem] w-[40rem]">
          <h3 class="text-3xl font-semibold text-black mb-4">Add Post</h3>
          <p class="text-black mb-4">Content goes here</p>
          <label class="block font-bold text-black mb-2">Title</label>
          <input
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
            type="text"
          />
          <label class="block font-bold text-black mt-4 mb-2">Content:</label>
          <input
            onChange={(e) => {
              setContent(e.target.value);
            }}
            class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal mb-3"
            type="text"
          />
          <button
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full"
            onClick={() => {
              addPost();
            }}
          >
            Add Posts
          </button>
        </div>
      </div>
    </>
  );
};

export default AddPosts;
