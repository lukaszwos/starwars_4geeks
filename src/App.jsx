import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { TheContext } from "./context/context";
import "./index.css";

import Cards from "./Cards";
import Card from "./Card";
import Navbar from "./Navbar";
import Profile from "./Profile";

function App() {
  const { state, dispatch } = useContext(TheContext);

  return (
    <div className="container mx-auto">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Cards>
              {state.dataImported.length > 0
                ? state.dataImported.map((person, i) => (
                    <Card key={person.id} person={person} />
                  ))
                : "Loading..."}
            </Cards>
          }
        />

        <Route path="/people/:id" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
