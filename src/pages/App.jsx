import { ListProvider } from "@/context/ListProvider";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router";
import CardList from "../components/CardList";

const API_URL = "https://api.aviationstack.com/v1/flights?access_key=aa7674c8146c6b86a3e10a3274aba004";

function App() {
  const [cards, setCards] = useState([]);

  const fetchCards = async () => {
    try {
      const response = await fetch(API_URL);
      const result = await response.json();

      if (result && result.data) {
        setCards(result.data);
      } else {
        console.error("Nessun dato trovato nella risposta API:", result);
      }
    } catch (error) {
      console.error("Errore nel recupero dei dati:", error);
    }
  };

  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <ListProvider>
      <div className="container-main mx-auto flex flex-col items-center bg-gradient-to-b from-emerald-100 h-full">
        <div className="container-top mx-auto w-full flex flex-col items-center">
          <div className="flex-1 flex w-full bg-emerald-100 border-4 border-emerald-100 border-dashed p-2 rounded-b-lg justify-center">
            <Link to={`/`}>
              <h1 className="text-3xl flex justify-center pt-2 text-black font-bold h-14 w-64">
                FlightTracker
              </h1>
            </Link>
          </div>
        </div>
        <CardList cards={cards} />
        <Outlet />
      </div>
    </ListProvider>
  );
}

export default App;
