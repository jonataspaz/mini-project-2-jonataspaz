"use client";

import { useState, Fragment } from "react";
import Image from "next/image";
import { Combobox, Transition } from "@headlessui/react";
import { SearchManufacturerProps } from "@/types";
import { manufacturers } from "@/constants";

const SearchManufacturer = ({
  selected,
  setSelected,
}: SearchManufacturerProps) => {
  const [query, setQuery] = useState("");

  const filteredManufacturers =
    query === ""
      ? manufacturers
      : manufacturers.filter((manufacturer) =>
          manufacturer.toLowerCase().includes(query.toLowerCase())
        );

  return (
    <div className="flex-1 max-sm:w-full flex justify-start items-center">
      <Combobox value={selected} onChange={setSelected}>
        <div className="relative w-full">
          {/* Button for the combobox. Click on the icon to see the complete dropdown */}
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              width={20}
              height={20}
              className="ml-4"
              alt="car logo"
            />
          </Combobox.Button>

          {/* Input field for searching */}
          <Combobox.Input
            className="w-full h-[48px] pl-12 p-4 rounded-l-full max-sm:rounded-full bg-light-white outline-none cursor-pointer text-sm"
            displayValue={(item: string) => item}
            onChange={(event) => setQuery(event.target.value)} // Update the search query when the input changes
            placeholder="Tesla..."
          />

          <Transition
            as={Fragment} // Fragment is a React component that does not render a DOM element but only renders its children. It is used to group multiple elements. It is a built-in component that does not need to be imported.
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options>
              {filteredManufacturers.map((manufacturer) => (
                <Combobox.Option
                  key={manufacturer}
                  className={({ active }) =>
                    `${
                      active ? "bg-black text-white" : "text-gray-900"
                    } cursor-default select-none py-2 pl-10 pr-4`
                  }
                  value={manufacturer}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {manufacturer}
                      </span>
                      {selected ? (
                        <span
                          className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                            active ? "text-white" : "text-teal-600"
                          }`}
                        ></span>
                      ) : null}
                    </>
                  )}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
