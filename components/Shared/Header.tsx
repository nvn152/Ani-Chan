"use client";

import React, { useState, useEffect } from "react";
import { IoIosSearch } from "react-icons/io";
import { FiSun, FiMoon } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { useTheme } from "next-themes";
import { Input } from "../ui/input";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSearchVisibility = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  return (
    <div className="z-50  top-0 left-0 right-0 fixed shadow-lg backdrop-blur-xl dark:bg-[#080808] bg-white h-[4.5rem]">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              className="flex text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white"
              href="/"
            >
              <p className="text-white">Ani</p>
              <p className="text-purple-500">Chan</p>
            </Link>
          </div>
          <div className="hidden sm:flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end">
            <div className="max-w-lg w-full lg:max-w-xs">
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <IoIosSearch
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                {/* <input
                  id="search"
                  name="search"
                  className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-gray-100 dark:bg-neutral-900 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none  focus:ring-0 focus:placeholder-gray-400 focus:dark:placeholder-gray-300 sm:text-sm"
                  placeholder="Search Anime"
                  type="search"
                /> */}
                <Input
                  type="search"
                  placeholder="Search"
                  className="pl-10  focus:outline-none bg-gray-100 dark:bg-neutral-900 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <button
              className="sm:hidden p-1 rounded-full text-gray-900 dark:text-white hover:text-gray-800 dark:hover:text-gray-300 focus:outline-none"
              onClick={toggleSearchVisibility}
            >
              <IoIosSearch className="h-6 w-6" />
            </button>
            <button
              className="ml-4 p-1 rounded-full text-gray-900 dark:text-white hover:text-gray-800 dark:hover:text-gray-300 focus:outline-none"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              {theme === "light" ? (
                <FiSun className="h-6 w-6" />
              ) : (
                <FiMoon className="h-6 w-6" />
              )}
            </button>
            <button className="ml-4 p-1 rounded-full text-gray-900 dark:text-white hover:text-gray-800 dark:hover:text-gray-300 focus:outline-none">
              <CgProfile className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      {isSearchVisible && (
        <div className="sm:hidden bg-gray-100 dark:bg-[#080808] p-4">
          <label htmlFor="mobile-search" className="sr-only">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <IoIosSearch
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </div>
            <input
              id="search"
              name="search"
              className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-gray-100 dark:bg-neutral-900 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none  focus:ring-0 focus:placeholder-gray-400 focus:dark:placeholder-gray-300 sm:text-sm"
              placeholder="Search Anime"
              type="search"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
