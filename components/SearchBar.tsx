"use client";

import React, { useState } from "react";
import Image from "next/image";
import SearchManufacturer from "./SearchManufacturer";
import { SearchBarPros } from "@/types";

const SearchBar = ({ setManufacturer }: SearchBarPros) => {
  const [searchManufacturer, setSearchManufacturer] = useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchManufacturer === "") return alert("Please select a Manufacturer");

    setManufacturer(searchManufacturer);
  };

  return (
    <form
      className="flex items-center justify-start max-sm:flex-col w-full relative max-sm:gap-4 max-w-3xl"
      onSubmit={handleSearch}
    >
      <div className="flex-1 max-sm:w-full flex justify-start items-center relative bg-white rounded-md mr-2">
        <SearchManufacturer
          selected={searchManufacturer}
          setSelected={setSearchManufacturer}
        />
      </div>
      <button type="submit" className={`z-10`}>
        <Image
          src="/magnifying-glass.svg"
          alt="magnifying glass"
          width={40}
          height={40}
          className="object-contain"
        />
      </button>
    </form>
  );
};

export default SearchBar;
