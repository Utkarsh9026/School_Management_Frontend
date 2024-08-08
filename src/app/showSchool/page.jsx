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
                className="bg-white bg-opacity-90 p-2 m-4 rounded-lg shadow-2xl w-60 border border-gray-100"
              >
                <img
                  src={`http://localhost:5000/image/${school.imagePath}`}
                  alt={school.name}
                  className="w-full h-32 object-cover rounded-md"
                />
                <h2 className="text-xl font-bold mt-2">{school.name}</h2>
                <p className="text-base line-clamp-1">{school.address}</p>
                <p className="text-[13px]">{school.city}</p>
              </div>
            ))}
        </div>
      </div>
    </main>
  );
};

export default ShowSchool;
