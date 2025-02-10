
const Card = ({ flight }) => {
  return (
    <div className="bg-stone-50 rounded-lg shadow-md overflow-hidden p-4">
      <div className={`inline-block px-3 py-1 rounded-lg border font-bold ${
        flight.flight_status && flight.flight_status.toUpperCase() === "ACTIVE"
          ? "text-green-600 border-green-600"
          : "text-red-600 border-red-600"
      }`}>
        {flight.flight_status ? flight.flight_status.toUpperCase() : "Status Unknown"}
      </div>
      <h2 className="text-xl font-semibold mt-2 mb-2">
        {flight.airline.name} - {flight.flight.number}
      </h2>
      <p className="text-gray-600">
        ✈️ {flight.departure.airport} → {flight.arrival.airport}
      </p>
    </div>
  );
};

export default Card;
