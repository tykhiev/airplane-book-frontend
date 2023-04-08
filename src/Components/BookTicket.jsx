import React, { useState, useEffect } from "react";

function BookTicket() {
  const [flights, setFlights] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    flightNumber: "",
  });

  function timeFormatter(datetime) {
    const date = new Date(datetime);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    const hour = date.getHours().toString().padStart(2, "0");
    const minute = date.getMinutes().toString().padStart(2, "0");
    const result = `${day}/${month}/${year} ${hour}:${minute}`;

    return result;
  }

  useEffect(() => {
    fetch("https://airplane-book-backend.vercel.app/flights")
      .then((response) => response.json())
      .then((data) => setFlights(data))
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const flight = flights.find(
      (flight) => flight._id === formData.flightNumber
    );

    if (!flight) {
      console.log("Flight not found");
      alert("No flight found");
      return;
    }
    if (!formData.name) {
      console.log("Name is required");
      alert("Name is required");
      return;
    }
    const data = {
      name: formData.name,
      flight_id: flight._id,
    };
    fetch("https://airplane-book-backend.vercel.app/all-passengers")
      .then((response) => response.json())
      .then((passengers) => {
        const passenger = passengers.find((p) => p.name === formData.name);
        if (!passenger) {
          console.log("Passenger not found");
          alert("Passenger not found");
          return;
        }
      });
    fetch("https://airplane-book-backend.vercel.app/book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        setFormData({
          name: "",
          flightNumber: "",
        });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <h1 className="text-3xl font-bold mb-6">Book Ticket</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="flightNumber"
              className="block text-gray-700 font-bold mb-2"
            >
              Flight Number
            </label>
            <select
              id="flightNumber"
              name="flightNumber"
              value={formData.flightNumber}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-50 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">Select a flight number</option>
              {flights.map((flight) => (
                <option
                  key={flight._id}
                  value={flight._id}
                  className="text-slate-50"
                >
                  {flight._id} ({flight.from_location} - {flight.to_location}) @{" "}
                  {timeFormatter(flight.dateTime)}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Book Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default BookTicket;
