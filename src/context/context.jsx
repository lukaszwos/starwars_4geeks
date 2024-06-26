import { createContext, useState, useEffect, useReducer } from "react";
let TheContext = createContext(null);
import axios from "axios";

let URL = "https://swapi.dev/api/people/?page=";
let URLS = [...Array(9)].map((el, i) => {
  return `${URL}${i + 1}`;
});

let imgBase = "https://starwars-visualguide.com/assets/img/characters";

function ContextWrapper({ value, children }) {
  function reducer(state, action) {
    if ((action.type = "set data")) {
      return { ...state, dataImported: action.payload };
    }
  }
  //   const [data, setData] = useState([]);
  const [state, dispatch] = useReducer(reducer, { dataImported: [] });

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
          dispatch({ type: "set data", payload: results });
        });

        console.log(state.dataImported);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);

  return (
    <TheContext.Provider value={{ state, dispatch }}>
      {children}
    </TheContext.Provider>
  );
}

export { ContextWrapper, TheContext };
