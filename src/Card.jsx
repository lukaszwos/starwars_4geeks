export default function Example({ person }) {
  return (
    <a key={person.name} href={"#"} className="group text-sm">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
        <img
          src={person.img}
          alt={person.name}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <h3 className="mt-4 font-medium text-gray-900">{person.name}</h3>
      <p className="italic text-gray-500">Gender: {person.gender}</p>
      <p className="mt-2 font-medium text-gray-900">Height: {person.height}</p>
    </a>
  );
}
