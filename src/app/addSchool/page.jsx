"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const AddSchool = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    state: "",
    contact: "",
    image: null,
  });

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, address, city, state, contact, image } = formData;

    const data = new FormData();
    data.append("name", name);
    data.append("email", email);
    data.append("address", address);
    data.append("city", city);
    data.append("state", state);
    data.append("contact", contact);
    if (image) {
      data.append("image", image);
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/savedata",
        data,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      console.log(response.data);
      router.push("/showSchool");

      setFormData({
        name: "",
        email: "",
        address: "",
        city: "",
        state: "",
        contact: "",
        image: null,
      });
      document.querySelector('input[name="image"]').value = null;
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  return (
    <main
      className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url(/background.jpg)" }}
    >
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      <div className="relative z-10 bg-white bg-opacity-90 p-8 rounded-lg shadow-2xl max-w-lg w-full border border-gray-100">
        <h1 className="text-2xl font-bold mb-4 text-center">School Form</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-bold mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md shadow-inner"
            />
          </div>

          <div>
            <label className="block text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md shadow-inner"
            />
          </div>

          <div>
            <label className="block text-sm font-bold mb-2">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md shadow-inner"
            />
          </div>

          <div>
            <label className="block text-sm font-bold mb-2">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md shadow-inner"
            />
          </div>

          <div>
            <label className="block text-sm font-bold mb-2">State</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md shadow-inner"
            />
          </div>

          <div>
            <label className="block text-sm font-bold mb-2">Contact</label>
            <input
              type="number"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md shadow-inner"
            />
          </div>

          <div>
            <label className="block text-sm font-bold mb-2">Image</label>
            <input
              type="file"
              name="image"
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md shadow-inner"
            />
          </div>

          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 shadow-lg transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  );
};

export default AddSchool;
