import { Heart } from "lucide-react";
import { useState } from "react";

// Funzione per aggiungere ai preferiti nel db.json (funzia)
const saveToFavorites = async (flight) => {
  const favouriteFlight = {
    name: flight.airline.name,
    start: flight.departure.airport,
    end: flight.arrival.airport,
    code: flight.flight.number, 
    iata: flight.flight.iata,   
    status: flight.flight_status, 
    favourites: true 
  };

   fetch("http://localhost:3000/favourites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(favouriteFlight),
    });
};

const Card = ({ flight }) => {
  const [favourite, setFavourite] = useState(false);

  const handleFavoriteClick = () => {
    setFavourite(!favourite);
    if (!favourite) {
      saveToFavorites(flight);
    }
  };

  return (
    <div className="bg-stone-50 rounded-lg shadow-md overflow-hidden p-4 flex flex-col gap-2">
      <div className="favourite-section w-full flex flex-row">
        <h2 className="text-xl font-semibold mt-2 mb-2 w-full">
          {flight.airline.name} - {flight.flight.iata}
        </h2>
        <div className="favourite-icon flex justify-end w-full mt-2">
          <Heart
            className={`cursor-pointer ${favourite ? "text-red-600" : "text-gray-500"}`}
            onClick={handleFavoriteClick} // Gestisce il click sul cuore (funzia)
          />
        </div>
      </div>
      <p className="text-gray-600">
        <span className="font-bold">From:</span> {flight.departure.airport}
      </p>
      <p className="text-gray-600">
        <span className="font-bold">To:</span> {flight.arrival.airport}
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
          {flight.flight_status ? flight.flight_status.toUpperCase() : "Status Unknown"}{" "}
        </h1>
      </div>
    </div>
  );
};

export default Card;
