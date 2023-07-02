"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Main, SearchBar, CarCard } from "@/components";
import { getCars } from "@/utils";

export default function Home({}) {
  const [allCars, setAllCars] = useState([]);
  const [loading, setLoading] = useState(false);

  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");

  const fetchCars = async () => {
    setLoading(true);
    try {
      const result = await getCars({
        manufacturer: manufacturer || "",
        model: model || "",
      });
      setAllCars(result);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCars();
  }, [manufacturer, model]);

  return (
    <main className="overflow-hidden bg-black">
      <Main />
      <div
        className="mt-12 padding-y padding-y
      max-width"
        id="discover"
      >
        <div className="flex flex-col items-start justify-start gap-y-2.5 text-white">
          <h1
            className="text-4x1
          font-extrabold "
          >
            Car Catalogue
          </h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className="mt-12 w-full flex-between items-center flex-wrap gap-5">
          <SearchBar setManufacturer={setManufacturer} />
        </div>
        {allCars.length > 0 ? (
          <section>
            <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14">
              {allCars?.map((car) => (
                <CarCard key={Math.random()} car={car} />
              ))}
            </div>

            {loading && (
              <div className="mt-16 w-full flex-center">
                <Image
                  src="/loader.svg"
                  alt="loading"
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
            )}
          </section>
        ) : (
          <div className="mt-16 flex justify-center items-center flex-col gap-2">
            <h2 className="text-white text-xl font-bold">No results</h2>
          </div>
        )}
      </div>
    </main>
  );
}
