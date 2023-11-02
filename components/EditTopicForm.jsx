"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const EditTopicForm = ({ id, title, description }) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription }),
      });

      if (!res.ok) {
        throw new Error("Failed to update topic");
      }

      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className=" py-5 px-8">
      <div className=" py-6">
        <input
          onChange={(e) => setNewTitle(e.target.value)}
          value={newTitle}
          placeholder="Add title"
          className="p-4 w-full text-black border"
        />
      </div>
      <div>
        <input
          onChange={(e) => setNewDescription(e.target.value)}
          value={newDescription}
          placeholder="Add Description"
          className="p-4 w-full text-black border"
        />
      </div>

      <div className="py-5">
        <button className=" bg-green-400 p-4 text-black font-bold">
          Update Topic
        </button>
      </div>
    </form>
  );
};

export default EditTopicForm;
