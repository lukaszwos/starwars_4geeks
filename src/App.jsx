import { useEffect, useState } from "react";

import "./index.css";

import Pricing from "./Pricing";
import Fallback from "./Fallback";

import Card from "./Card";

import axios from "axios";
import Cards from "./Cards";

let URL = "https://swapi.dev/api/people/?page=";
let URLS = [...Array(9)].map((el, i) => {
  return `${URL}${i + 1}`;
});

let imgBase = "https://starwars-visualguide.com/assets/img/characters";

function App() {
  const [data, setData] = useState([]);
  // Item 1 from readme
  useEffect(() => {
    async function fetchData() {
      let fetches = URLS.map((el) => {
        return axios.get(el);
      });

      try {
        Promise.all(fetches).then((results) => {
          results = results
            .map((el) => el.data.results)
            .flat()
            .map((el, i) => {
              let img = `${imgBase}/${i < 18 ? i + 1 : i + 2}.jpg`;
              return { ...el, img };
            });

          results = results.filter((el) => el.name !== "Wedge Antilles");
          setData(results);
        });

        console.log(data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);
  return (
    <div>
      <Cards>
        {data ? data.map((person) => <Card person={person} />) : "Loading..."}
      </Cards>

      <Pricing />
    </div>
  );
}

export default App;
