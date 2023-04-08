import React from "react";
// import heroImage from "../images/hero-image.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="max-w-7xl mx-auto py-auto sm:px-6 lg:px-8">
      <div className="px-4 py-20 sm:px-0">
        <div className="relative">
          {/* <img src={heroImage} alt="Hero" className="w-full h-auto" /> */}
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 "></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <h1 className="text-3xl font-bold mb-6">Welcome to AirLie App</h1>
            {/* <p className="mb-4"></p> */}
            <Link
              to="/book-ticket"
              className="bg-white text-black py-2 px-4 rounded-full font-bold hover:bg-gray-200 transition duration-300"
            >
              Book a Ticket
            </Link>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center mt-20">
          <div className="w-full sm:w-1/3 px-3 mb-6 sm:mb-0">
            <h2 className="text-xl font-bold mb-4">
              Real-time Flight Information
            </h2>
            <p className="mb-4 sm:text-sm">
              Check the status of yourlight in real-time, including departure
              and arrival times, gate numbers, and more.
            </p>
            <Link
              to="/flight-list"
              className="text-blue-500 font-bold hover:underline transition duration-300"
            >
              View Flight Information
            </Link>
          </div>
          <div className="w-full sm:w-1/3 px-3 mb-6 sm:mb-0">
            <h2 className="text-xl font-bold mb-4">Explore Our Destinations</h2>
            <p className="mb-4 sm:text-sm">
              From tropical beaches to bustling cities, we fly to a wide range
              of destinations around the world.
            </p>
            <Link
              to="/flight-list"
              className="text-blue-500 font-bold hover:underline transition duration-300"
            >
              View Destinations
            </Link>
          </div>
          <div className="w-full sm:w-1/3 px-3">
            <h2 className="text-xl font-bold mb-4">Join Our Loyalty Program</h2>
            <p className="mb-4 sm:text-sm">
              Earn points every time you fly with us and redeem them for free
              flights, upgrades, and more.
            </p>
            <Link
              to="/register-passenger"
              className="text-blue-500 font-bold hover:underline transition duration-300"
            >
              Join Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
