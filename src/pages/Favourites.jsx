import CardFavourites from "@/components/CardFavourite";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plane, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router";


const API_URL = "http://localhost:3000/favourites"


function Favourites() {
  //fetch fatta e funzionante, manca da integrarla con le card preferiti
  const [cards, setCards] = useState([]);
  const fetchCards = () => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((cards) => setCards(cards))
      .catch((error) => console.error("Error fetching cards:", error));
  };
  
  useEffect(() => {
    fetchCards();
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
        <CardFavourites cards={cards}/>
      </div>
  );
}

export default Favourites;
