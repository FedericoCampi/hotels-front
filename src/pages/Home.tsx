import React from "react";
import HotelList from "../components/HotelList";

const Home: React.FC = () => {
  return (
    <div className="p-10">
      <h1 className="text-center py-10 text-3xl font-bold text-white">
            Hotels
        </h1>
      <HotelList />
    </div>
  );
};

export default Home;