import { createContext, useState, useEffect, useReducer } from "react";
let TheContext = createContext(null);
import axios from "axios";
import { v4 as uuid } from "uuid";

let URL = "https://swapi.dev/api/people/?page=";
let URLS = [...Array(9)].map((el, i) => {
  return `${URL}${i + 1}`;
});

let imgBase = "https://starwars-visualguide.com/assets/img/characters";

dispatch({ type: "set data", payload: datafromFetch });

dispatch({ type: "add to favourites", payload: newElement });

function reducer(state, action) {
  if (action.type === "set data") {
    return { ...state, dataImported: action.payload };
  }
  if (action.type === "add to favourites") {
    if (state.favourites.includes(action.payload)) {
      return state;
    }
    return { ...state, favourites: [...state.favourites, action.payload] };
  }

  if (action.type === "remove from favourites") {
    let newFavourites = state.favourites.filter((el) => {
      return el.id !== action.payload.id;
    });

    return { ...state, favourites: newFavourites };
  }
  if (action.type === "set dataFiltered") {
    return { ...state };
  }
  if (action.type === "clear dataFiltered") {
    return { ...state };
  }
}

async function fetchData(dispatch) {
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
        })
        .map((el, i) => {
          let id = uuid();
          return { ...el, id: id };
        });

      results = results.filter((el) => el.name !== "Wedge Antilles");
      dispatch({ type: "set data", payload: results });
      console.log(results);
    });
  } catch (err) {
    console.error(err);
  }
}

function ContextWrapper({ value, children }) {
  const [state, dispatch] = useReducer(reducer, {
    dataImported: [],
    favourites: [],
    dataFiltered: [],
    searchInputValue: "",
  });

  useEffect(() => {
    fetchData(dispatch);
  }, []);

  return (
    <TheContext.Provider value={{ state, dispatch }}>
      {children}
    </TheContext.Provider>
  );
}

export { ContextWrapper, TheContext };
