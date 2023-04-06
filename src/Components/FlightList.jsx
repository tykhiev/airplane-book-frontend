import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

function FlightList() {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/flights")
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
      <h1 className="text-3xl py-2">Flights</h1>
      <ul>
        {flights.map((flight) => (
          <li key={flight._id}>
            <p className="text-lg my-1">Flight number: {flight._id}</p>
            <p>From: {flight.from_location}</p>
            <p>To: {flight.to_location}</p>
            <p>Departure: {timeFormatter(flight.dateTime)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FlightList;
