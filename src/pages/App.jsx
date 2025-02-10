import { ListProvider } from "@/context/ListProvider";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router";
import CardList from "../components/CardList";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plane, Search } from "lucide-react";

const API_URL =
  "https://api.aviationstack.com/v1/flights?access_key=aa7674c8146c6b86a3e10a3274aba004&limit=1";
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
          <div className="flex-1 flex w-full bg-emerald-100 border-4 border-emerald-100 border-dashed p-2 rounded-b-lg justify-center items-center">
            <Link to={`/`} className="flex items-center gap-2">
              <Plane className="text-3xl text-black" />
              <h1 className="text-3xl text-black font-bold h-14 w-64 mt-4">
                FlightTracker
              </h1>
            </Link>
          </div>
          <div className="navigation-top-bar flex flex-row gap-5  w-full ">
            <div className="search-bar flex flex-row gap-3 w-1/3 ml-5">
              <Input className="w-full" placeholder="Insert flight code here" />
              <Button className="flex items-center gap-2 px-4 py-2">
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
        <CardList cards={cards} />
        <Outlet />
      </div>
    </ListProvider>
  );
}

export default App;
