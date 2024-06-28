import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { TrashIcon } from "@heroicons/react/24/outline";

import { useContext } from "react";
import { Link } from "react-router-dom";

import { TheContext } from "./context/context";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Dropdown() {
  const { state, dispatch } = useContext(TheContext);
  return (
    <Menu as="div" className="relative inline-block text-left pt-2">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          Favourites
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          {state.favourites.map((el) => {
            return (
              <MenuItem key={Math.random()}>
                {({ focus }) => (
                  <div
                    className={classNames(
                      focus
                        ? "bg-gray-100 text-gray-900 flex"
                        : "text-gray-700",
                      "flex justify-between",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    <Link to={`/people/${el.id}`}>
                      <div>{el.name}</div>
                    </Link>
                    <TrashIcon
                      width={20}
                      onClick={() => {
                        dispatch({
                          type: "remove from favourites",
                          payload: el,
                        });
                      }}
                    />
                  </div>
                )}
              </MenuItem>
            );
          })}
        </div>
      </MenuItems>
    </Menu>
  );
}
