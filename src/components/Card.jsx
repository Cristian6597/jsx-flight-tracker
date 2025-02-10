import { Heart } from "lucide-react";
import { useState } from "react";

const Card = ({ flight }) => {
  const [favourite, setFavourite] = useState(false);
  return (
    <div className="bg-stone-50 rounded-lg shadow-md overflow-hidden p-4 flex flex-col gap-2">
      <div className="favourite-section w-full flex flex-row">
        <h2 className="text-xl font-semibold mt-2 mb-2 w-full">
          {flight.airline.name} - {flight.flight.number}
        </h2>
        <div className="favourite-icon flex justify-end w-full mt-2">
          <Heart
            className="cursor-pointer"
            onClick={() => {
              setFavourite(true);
              console.log("favourite");
            }}
          />
        </div>
      </div>
      <p className="text-gray-600">
        ✈️ {flight.departure.airport} → {flight.arrival.airport}
      </p>
      <div
        className={`inline-block px-3 py-1 rounded-lg border font-bold ${
          flight.flight_status &&
          flight.flight_status.toUpperCase() === "ACTIVE"
            ? "text-green-600 border-green-600"
            : "text-red-600 border-red-600"
        }`}
      >
        <h1>
          Status{" "}
          {flight.flight_status
            ? flight.flight_status.toUpperCase()
            : "Status Unknown"}{" "}
        </h1>
      </div>
    </div>
  );
};

export default Card;
