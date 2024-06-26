import { useEffect, useState, useContext } from "react";
import { TheContext } from "./context/context";
import "./index.css";

import axios from "axios";

import Cards from "./Cards";
import Card from "./Card";
import Navbar from "./Navbar";

function App() {
  const { state, dispatch } = useContext(TheContext);

  return (
    <div className="container mx-auto">
      <Navbar />
      <Cards>
        {state.data.length > 0
          ? state.data.map((person) => (
              <Card key={person.name} person={person} />
            ))
          : "Loading..."}
      </Cards>
    </div>
  );
}

export default App;
