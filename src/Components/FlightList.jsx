import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

function FlightList() {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    fetch("https://airplane-book.onrender.com/flights")
      .then((response) => response.json())
      .then((data) => setFlights(data))
      .catch((error) => console.log(error));
  }, []);

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

  return (
    <div>
      <h1 className="text-3xl py-2 px-4 ">Flights</h1>
      <ul className="card bg-base-100">
        {flights.map((flight, index) => (
          <li
            key={flight._id}
            className="p-4 border-b border-base-200 shadow-xl rounded-xl"
          >
            <div className="text-lg font-bold mb-2">
              {index + 1}. Flight number: {flight._id}
            </div>
            <div className="text-base mb-2">
              <span className="font-bold">From:</span> {flight.from_location}
            </div>
            <div className="text-base mb-2">
              <span className="font-bold">To:</span> {flight.to_location}
            </div>
            <div className="text-base mb-2">
              <span className="font-bold">Departure:</span>{" "}
              {timeFormatter(flight.dateTime)}
            </div>
            <div className="text-base mb-2">
              <span className="font-bold">Passengers:</span>{" "}
              {flight.passengers.map((passenger, index) => (
                <div key={passenger._id}>
                  {index + 1} <span className="font-bold">Name:</span>{" "}
                  {passenger.name}
                </div>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FlightList;
