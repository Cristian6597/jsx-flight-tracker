import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plane, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import CardList from "../components/CardList";

const API_URL = `https://api.aviationstack.com/v1/flights?access_key=cfb26a39c49d8da903edc02d3b2fc85d&limit=9&flight_iata_code=`;

function App() {
  const [cards, setCards] = useState([]); 
  const [flightCode, setFlightCode] = useState(""); 
  const [filteredCards, setFilteredCards] = useState([]); 

  // Funzione per fare la fetch dei dati
  const fetchCards = async (code) => {
    const url = `${API_URL}${code}`;
    try {
      const response = await fetch(url);
      const result = await response.json();

      if (result && result.data) {
        setCards(result.data); 
        setFilteredCards(result.data); 
      } else {
        console.error("Nessun dato trovato nella risposta API:", result);
        setCards([]);
        setFilteredCards([]);
      }
    } catch (error) {
      console.error("Errore nel recupero dei dati:", error);
    }
  };

  // Funzione per il tasto cerca FUNZIONA PERCHE PAOLO è ANDATO VIA E FINALMENTE RIESCO A PENSARE
  const handleSearch = () => {
    if (flightCode) {
      // Filtra i voli in base al codice IATA
      const filtered = cards.filter((card) =>
        card.flight.iata === flightCode 
      );
      setFilteredCards(filtered); 
    } else {
      setFilteredCards(cards);
    }
  };

  useEffect(() => {
    fetchCards(""); // Fetch iniziale senza codice IATA per ottenere tutti i voli
  }, []);

  return (
    <div className="container-main mx-auto flex flex-col items-center bg-gradient-to-b from-emerald-100 h-full">
      <div className="container-top mx-auto w-full flex flex-col items-center">
        <div className="flex-1 flex w-full bg-emerald-100 border-4 border-emerald-100 border-dashed p-2 rounded-b-lg justify-center items-center">
          <Link to={`/`} className="flex items-center gap-2">
            <Plane className="text-3xl text-black" />
            <h1 className="text-3xl text-black font-bold h-14 w-64 mt-4">
              FlightTracker
            </h1>
          </Link>
        </div>
        <div className="navigation-top-bar flex flex-row gap-5 w-full">
          <div className="search-bar flex flex-row gap-3 w-1/3 ml-5">
            <Input
              className="w-full"
              placeholder="Insert flight code here"
              value={flightCode}
              onChange={(e) => setFlightCode(e.target.value)} 
            />
            <Button
              className="flex items-center gap-2 px-4 py-2"
              onClick={() => {
                console.log(flightCode); 
                handleSearch(); 
              }}
            >
              <Search />
              Search
            </Button>
          </div>
          <div className="buttons-top-bar flex gap-5 w-full justify-end mr-10">
            <Link to={`/`} className="flex items-center gap-2">
              <Button>Home</Button>
            </Link>
            <Link to={`/favourites`} className="flex items-center gap-2">
              <Button>Favourites</Button>
            </Link>
          </div>
        </div>
      </div>
      <CardList cards={filteredCards} />
    </div>
  );
}

export default App;