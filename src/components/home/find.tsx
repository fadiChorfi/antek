"use client";

import Image from "next/image";
import React from "react";

function Find() {
  return (
    <div className="absolute -bottom-56 translate-y-50 left-0 right-0 bg-yellow find-box px-24 mx-24 max-w-7xl py-12 flex flex-col items-center m-auto z-50 animate-slide-up">
      <div className="flex flex-row gap-2 items-baseline justify-center mb-8 animate-slide-down delay-200">
        <Image src="/decor-title-left.svg" alt="" width={30} height={30} />
        <h1 className="font-semibold text-3xl md:text-4xl text-center text-secondary px-4 py-1 rounded-sm tracking-wide relative">
          Find The Right Equipment
        </h1>
        <Image src="/decor-title-right.svg" alt="" width={30} height={30} />
      </div>
      <form action="#!" className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex flex-row items-center bg-white rounded">
              <span className="flex items-center justify-center h-12 w-12 text-[#bdbdbd] border-r border-[#bdbdbd]">
                <Image
                  src="/truck.svg"
                  alt="truck"
                  width={24}
                  height={24}
                  className="opacity-60"
                />
              </span>
              <select
                className="flex-1 bg-transparent border-0 focus:ring-0 focus:outline-none navbar-search-input mx-2 py-3 text-base text-gray-700"
                name="category"
              >
                <option value="">Select Category</option>
                <option value="">Category 1 </option>
                <option value="">Category 2</option>
                <option value="">Category 3</option>
              </select>
            </div>
          </div>
          <div>
            <div className="flex flex-row items-center bg-white rounded">
              <span className="flex items-center justify-center h-12 w-12 text-[#bdbdbd] border-r border-[#bdbdbd]">
                <Image
                  src="/derrick.svg"
                  alt="derrick"
                  width={24}
                  height={24}
                  className="opacity-60"
                />
              </span>
              <input
                className="flex-1 bg-transparent border-0 focus:ring-0 focus:outline-none px-2 py-3 text-base text-gray-700"
                type="text"
                placeholder="Equipment Name"
              />
            </div>
          </div>
          <div>
            <div className="flex flex-row items-center bg-white rounded">
              <span className="flex items-center justify-center h-12 w-12 text-[#bdbdbd] border-r border-[#bdbdbd]">
                <Image
                  src="/location.svg"
                  alt="location"
                  width={24}
                  height={24}
                  className="opacity-60"
                />
              </span>
              <input
                className="flex-1 bg-transparent border-0 focus:ring-0 focus:outline-none px-2 py-3 text-base text-gray-700"
                type="text"
                placeholder="What’s Your Location"
              />
            </div>
          </div>
          <div>
            <div className="flex flex-row items-center bg-white rounded">
              <span className="flex items-center justify-center h-12 w-12 text-[#bdbdbd] border-r border-[#bdbdbd]">
                <Image
                  src="/calendar.svg"
                  alt="calendar"
                  width={24}
                  height={24}
                  className="opacity-60"
                />
              </span>
              <input
                className="flex-1 bg-transparent border-0 focus:ring-0 focus:outline-none px-2 py-3 text-base text-gray-700"
                type="text"
                placeholder="Rental Duration Period"
              />
            </div>
          </div>
          <div className="flex items-center gap-6 col-span-2 md:col-span-1">
            {" "}
            <label className="flex items-center gap-2 cursor-pointer text-white font-semibold">
              <input
                className="accent-yellow-500"
                type="radio"
                name="delivery"
                defaultChecked
              />
              Antek Delivery
            </label>
            <label className="flex items-center gap-2 cursor-pointer text-white font-semibold">
              <input
                className="accent-yellow-500"
                type="radio"
                name="delivery"
              />
              Self Pickup
            </label>
          </div>{" "}
          <div className="md:col-span-1">
            <button className="uk-button uk-button-default" type="submit">
              <span>Find My Rentals</span>
              <Image src="/arrow.svg" alt="arrow" width={24} height={24} />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Find;
