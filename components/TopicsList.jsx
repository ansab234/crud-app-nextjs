import React from "react";
import { BiEdit } from "react-icons/bi";
import Link from "next/link";
import RemoveBtn from "./RemoveBtn";

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

const TopicsList = async () => {
  const { topics } = await getTopics();

  return (
    <>
      {topics.map((topic, index) => (
        <div
          key={index}
          className=" hover:bg-white hover:text-black flex justify-between border p-4 mx-12 my-10"
        >
          <div>
            <div className=" font-bold text-2xl">
              <h2>{topic.title}</h2>
            </div>
            <div className=" text-md py-2">
              <p>{topic.description}</p>
            </div>
          </div>

          <div className="flex p-2 gap-5 items-center">
            <div>
              <Link href={`/edit-topic/${topic._id}`}>
                <BiEdit size={24}/>
              </Link>
            </div>
            <div className=" cursor-pointer">
              <RemoveBtn id={topic._id}/>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TopicsList;
