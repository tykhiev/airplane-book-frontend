import React, { useState } from "react";
import { Link } from "react-router-dom";

function RegisterPassenger() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    email: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("https://airplane-book.onrender.com/create-passenger", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .then(() => {
        setFormData({
          name: "",
          age: "",
          gender: "",
          email: "",
        });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <h1 className="text-3xl font-bold mb-6">Register Passenger</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2 "
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              placeholder="Enter your name"
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-50 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="age" className="block text-gray-700 font-bold mb-2">
              Age
            </label>
            <input
              type="text"
              id="age"
              name="age"
              value={formData.age}
              placeholder="Enter your age"
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-50	 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="gender"
              className="block text-gray-700 font-bold mb-2"
            >
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">Select your gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-50 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Register Now
            </button>
            <Link to="/flight-list" className="text-gray-900 font-bold">
              View Flight List
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPassenger;
