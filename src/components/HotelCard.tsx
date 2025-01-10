import React from "react";
import { Hotel } from "../types";

const HotelCard: React.FC<{ hotel: Hotel }> = ({ hotel }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105">
      <img
        src={hotel.image || "https://via.placeholder.com/300"}
        alt={hotel.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{hotel.name}</h3>
        <p className="text-gray-500">{hotel.stars} ⭐</p>
        <p className="text-gray-700 text-sm">{hotel.address}</p>
        <p className="text-indigo-600 font-bold text-lg mt-2">
          {hotel.currency} {hotel.totalPrice.toLocaleString()}
        </p>
        <p className="text-gray-600 text-sm mt-1">📍 {hotel.destination}</p>
        <div className="mt-3">
          <h4 className="text-sm font-medium text-gray-800">Amenidades:</h4>
          <ul className="text-sm text-gray-600 list-disc list-inside">
            {hotel.amenities.slice(0, 4).map((amenity) => (
              <li key={amenity.code}>{amenity.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;