"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

const ShowSchool = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/v1/getdata"
        );
        setData(response.data.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, []);

  console.log(data);

  return (
    <main
      className="relative flex flex-wrap items-center justify-center min-h-screen bg-cover bg-center flex-col"
      style={{ backgroundImage: "url(/background.jpg)" }}
    >
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      <div className="relative z-10 flex items-center justify-center flex-col">
        <h1 className="text-4xl mb-5 font-bold mt-10 text-white shadow-black">
          List of all schools
        </h1>
        <div className="flex gap-x-5 flex-wrap items-center justify-center">
          {data &&
            data.map((school) => (
              <div
                key={school.id}
                className="bg-white bg-opacity-90 p-4 m-4 rounded-lg shadow-2xl w-64 border border-gray-100 relative"
              >
                <img
                  src={`http://localhost:5000/image/${school.imagePath}`}
                  alt={school.name}
                  className="w-full h-40 object-cover rounded-md"
                />
                <div className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md">
                  <button className="text-pink-500 hover:text-pink-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </button>
                </div>
                <h2 className="text-lg font-bold mt-2 line-clamp-1">
                  {school.name}
                </h2>
                <p className="text-gray-600 text-sm">{school.city}</p>
                <div className="flex items-center mt-1">
                  <div className="flex text-yellow-500">
                    {[...Array(4)].map((_, index) => (
                      <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 4.8l2.426 4.925 5.426.791-3.927 3.827.926 5.4L12 16.4l-4.851 2.542.926-5.4-3.927-3.827 5.426-.791L12 4.8z"
                        />
                      </svg>
                    ))}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 4.8l2.426 4.925 5.426.791-3.927 3.827.926 5.4L12 16.4l-4.851 2.542.926-5.4-3.927-3.827 5.426-.791L12 4.8z"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-600 text-sm ml-2">(4.0)</span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-blue-500 text-xs">{school.board}</p>
                  <p className="text-gray-600 text-xs">{school.address}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </main>
  );
};

export default ShowSchool;
