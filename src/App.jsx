import { useEffect, useState } from "react";

import "./index.css";

import Pricing from "./Pricing";
import Fallback from "./Fallback";

import Card from "./Card";

import axios from "axios";

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
          setData(results.map((el) => el.data.results).flat());
        });
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);
  return (
    <div>
      <ul className="text-xl font-bold underline">
        {data
          ? data.map((el) => {
              return <li key={el.name}>{el.name}</li>;
            })
          : "no data"}
      </ul>

      <Card />

      <Pricing />
    </div>
  );
}

export default App;
