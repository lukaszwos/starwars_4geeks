import { HeartIcon } from "@heroicons/react/24/outline";
export default function Card({ person }) {
  return (
    <a key={person.name} href={"#"} className="group text-sm">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
        <img
          src={person.img}
          alt={person.name}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="flex w-full justify-between mt-2">
        <h2 className="font-medium text-gray-900 align-middle h-full text-lg">
          {person.name}
        </h2>

        <div className="pe-2">
          <HeartIcon height={24} width={24} />
        </div>
      </div>
      <p className="italic text-gray-500">Gender: {person.gender}</p>
      <p className="mt-2 font-medium text-gray-900">Height: {person.height}</p>
    </a>
  );
}
img: "https://starwars-visualguide.com/assets/img/characters/1";
