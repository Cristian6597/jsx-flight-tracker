import Card from "./Card";

const CardList = ({ cards }) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {cards.map((flight, index) => (
          <Card
            key={index}
            flight={flight}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
