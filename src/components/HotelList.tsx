import React, { useEffect, useState } from "react";
import axios from "axios";
import { Hotel } from "../types";
import HotelCard from "./HotelCard";

const HotelList: React.FC = () => {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get("https://wmw3lg8sha.execute-api.us-east-2.amazonaws.com/dev/dummy")
      .then((response) => {
        
        setHotels(response.data.data.hotels);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching hotels:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mx-auto px-4">
      {loading ? (
        <p className="text-center text-lg font-semibold text-gray-700">Loading...</p>
      ) : hotels.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {hotels.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </div>
      ) : (
        <p className="text-center text-lg font-semibold text-red-500">No hotels found.</p>
      )}
    </div>
  );
};

export default HotelList;