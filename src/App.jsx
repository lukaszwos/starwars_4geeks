import { useEffect, useState } from "react";

import axios from "axios";
let url = "https://swapi.dev/api/people/?page=2";
let imgBase = "https://starwars-visualguide.com/assets/img/characters";

function App() {
  const [data, setData] = useState([]);
  // Item 1 from readme
  useEffect(() => {
    async function fetchData() {
      try {
        let response = await axios.get(url);
        let people = response.data.results.map((element, i) => {
          // element.img = imgBase + "/" + i+1
          // element.img = `${imgBase}/${i+1}`
          let img = `${imgBase}/${i + 1}`;

          return { ...element, img };
        });
        setData(people);
        console.log(response);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);
  return (
    <ul>
      {data
        ? data.map((el) => {
            return <li key={el.name}>{el.name}</li>;
          })
        : "no data"}
    </ul>
  );
}

export default App;
