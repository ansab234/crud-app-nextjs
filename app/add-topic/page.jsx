"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const AddTopic = () => {
  const [title, settitle] = useState();
  const [description, setDescription] = useState();

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert("Title and description are required.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        router.push("/");
        router.refresh();

      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className=" py-5 px-8">
        <div className=" py-6">
          <input
            onChange={(e) => settitle(e.target.value)}
            value={title}
            placeholder="Add title"
            className="p-4 w-full text-black border"
          />
        </div>
        <div>
          <input
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            placeholder="Add Description"
            className="p-4 w-full text-black border"
          />
        </div>

        <div className="py-5">
          <button className=" bg-green-400 p-4 text-black font-bold ">
            Add Topic
          </button>
        </div>
      </form>
    </>
  );
};

export default AddTopic;
