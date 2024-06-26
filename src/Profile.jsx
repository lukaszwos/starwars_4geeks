import { useContext } from "react";
import { TheContext } from "./context/context";
import { Link, useParams } from "react-router-dom";

function Profile() {
  const { state, dispatch } = useContext(TheContext);
  const { id } = useParams();
  console.log(id);
  const [person] = state.dataImported.filter((el) => el.id === id);

  console.log(person);

  const stats = [
    { label: "Birth year", value: person.birth_year },
    { label: "Eye color", value: person.eye_color },
    { label: "Height", value: person.height },
    { label: "Mass", value: person.mass },
  ];
  return (
    <div className="bg-white py-10 ">
      <div className="mx-auto max-w-7xl px-2 lg:px-2">
        <div className="mx-auto ">
          <Link to="/">
            <p
              href="#"
              className="text-base font-semibold leading-7 text-indigo-600"
            >
              <span aria-hidden="true">&larr;</span> Back to main
            </p>
          </Link>
          <img src={person.img} />
          <div>
            <div className="text-base leading-7 text-gray-700">
              <p className="text-base font-semibold leading-7 text-indigo-600">
                Species
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {person.name}
              </h1>
              <div className="max-w-3xl">
                <p className="mt-6">
                  Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                  risus enim. Mattis mauris semper sed amet vitae sed turpis id.
                  Id dolor praesent donec est. Odio penatibus risus viverra
                  tellus varius sit neque erat velit. Faucibus commodo massa
                  rhoncus, volutpat. Dignissim sed eget risus enim. Mattis
                  mauris semper sed amet vitae sed turpis id.
                </p>
                <p className="mt-8">
                  Et vitae blandit facilisi magna lacus commodo. Vitae sapien
                  duis odio id et. Id blandit molestie auctor fermentum
                  dignissim. Lacus diam tincidunt ac cursus in vel. Mauris
                  varius vulputate et ultrices hac adipiscing egestas. Iaculis
                  convallis ac tempor et ut. Ac lorem vel integer orci.
                </p>
                <p className="mt-8">
                  Et vitae blandit facilisi magna lacus commodo. Vitae sapien
                  duis odio id et. Id blandit molestie auctor fermentum
                  dignissim. Lacus diam tincidunt ac cursus in vel. Mauris
                  varius vulputate et ultrices hac adipiscing egestas. Iaculis
                  convallis ac tempor et ut. Ac lorem vel integer orci.
                </p>
              </div>
            </div>
            <dl className="mt-10 grid grid-cols-2 gap-8 border-t border-gray-900/10 pt-10 sm:grid-cols-4">
              {stats.map((stat, statIdx) => (
                <div key={statIdx}>
                  <dt className="text-sm font-semibold leading-6 text-gray-600">
                    {stat.label}
                  </dt>
                  <dd className="mt-2 text-3xl font-bold leading-10 tracking-tight text-gray-900">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="mt-10 flex">
              <Link to="/">
                <p
                  href="#"
                  className="text-base font-semibold leading-7 text-indigo-600"
                >
                  <span aria-hidden="true">&larr;</span> Back to main
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
