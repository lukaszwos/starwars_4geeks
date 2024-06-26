import { HeartIcon } from "@heroicons/react/24/outline";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { TheContext } from "./context/context";
export default function Card({ person }) {
  const { state, dispatch } = useContext(TheContext);
  const [hover, setHover] = useState(false);

  return (
    <div key={person.name} className="group text-sm">
      <Link to={`/people/${person.id}`}>
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
          <img
            src={person.img}
            alt={person.name}
            className="h-full w-full object-cover object-center"
          />
        </div>
      </Link>
      <div className="flex w-full justify-between mt-2">
        <h2 className="font-medium text-gray-900 align-middle h-full text-lg">
          {person.name}
        </h2>

        <div className="pe-2">
          <HeartIcon
            height={30}
            width={30}
            onMouseEnter={() => {
              setHover(true);
            }}
            onMouseLeave={() => {
              setHover(false);
            }}
            fill={
              state.favourites.includes(person)
                ? "rgb(110 231 183)"
                : hover === true
                ? "rgb(248 113 113)"
                : "none"
            }
            color={
              state.favourites.includes(person)
                ? "rgb(110 231 183)"
                : hover === true
                ? "rgb(248 113 113)"
                : "black"
            }
            onClick={() => {
              dispatch({ type: "add to favourites", payload: person });
            }}
          />
        </div>
      </div>
      <p className="italic text-gray-500">Gender: {person.gender}</p>
      <p className="mt-2 font-medium text-gray-900">Height: {person.height}</p>
    </div>
  );
}
img: "https://starwars-visualguide.com/assets/img/characters/1";
