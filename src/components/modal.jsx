import React from "react";
import { useState } from "react";

export default function MyModal({display, close}) {
    const [showModal, setShowModal] = useState(false)
    if(!display) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white p-2 rounded w-[60vw] h-100">
        <p onClick={close}  className="flex justify-end cursor-pointer">X</p>
        <h1  className="font-semibold text-center text-xl my-3 text-gray-700">
          Hire Me
        </h1>
        {/* <p className="text-center text-gray-700 mb-5">Sign in</p> */}

        <div className="flex flex-col">
          <textarea
            type="text"
            rows="10"
            cols="5"
            className="border border-gray-700 p-2 rounded mb-5"
            placeholder="Write Message"
          />
       
        </div>
        <div className="text-center">
          <button className="px-5 py-2 bg-gray-700 text-white rounded">
           Send Message
          </button>
        </div>
      </div>
    </div>
  );
}