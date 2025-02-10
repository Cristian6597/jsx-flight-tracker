import { Heart } from "lucide-react";
import { useState } from "react";

const CardFavourites = ({ flight, favourite }) => {
  return (
    <div className="bg-stone-50 rounded-lg shadow-md overflow-hidden p-4 flex flex-col gap-2">
      <div className="favourite-section w-full flex flex-row">
        <h2 className="text-xl font-semibold mt-2 mb-2 w-full">
          {flight.name} - {flight.iata}
        </h2>
        <div className="favourite-icon flex justify-end w-full mt-2">
          <Heart
            className={`cursor-pointer ${
              favourite ? "text-red-600" : "text-gray-500"
            }`}
            onClick={handleFavoriteClick}
          />
        </div>
      </div>
      <p className="text-gray-600">
        <span className="font-bold">From:</span> {flight.start}
      </p>
      <p className="text-gray-600">
        <span className="font-bold">To:</span> {flight.end}
      </p>  
      
    </div>
  );
};

export default CardFavourites;
