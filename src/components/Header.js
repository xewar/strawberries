"use client";
import Link from "next/link";
import { BsCart3 } from "react-icons/bs";
import { FiSearch, FiMenu, FiHeart } from "react-icons/fi";
import { LuFlower } from "react-icons/lu";
import { useState, useEffect } from "react";
import Image from "next/image";
import Splotch from "./Splotches/Splotch.js";
import Splotch2 from "./Splotches/Splotch2.js";
import Splotch3 from "./Splotches/Splotch3.js";

const Header = () => {
  //menuOpen displays and hides the menu links in mobile view
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [loginLinksOpen, setLoginLinksOpen] = useState(false);
  const [hoveredButton, setHoveredButton] = useState(null);

  //a way to change the hover color of nav menu items. nb - the :hover state wasn't working properly because of the text in front of the svg
  const handleMouseEnter = (buttonId) => {
    setHoveredButton(buttonId);
  };
  const handleMouseLeave = () => {
    setHoveredButton(null);
  };

  //when the window size is above the mobile breakpoint, the menu options are automatically displayed
  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(true);
        setLoginLinksOpen(true);
      } else {
        setMenuOpen(false);
        setLoginLinksOpen(false);
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleWindowResize);

    // Call the handleWindowResize function on component mount
    handleWindowResize();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="header pt-4 md:pt-16 md:px-8  flex justify-between md:flex-row md:justify-between">
      <div
        id="left"
        onMouseEnter={() => handleMouseEnter("left")}
        onMouseLeave={handleMouseLeave}
        className="left navContainer relative text-center ml-2 md:text-left "
      >
        <Link
          href="/"
          className="z-20 pl-2 pt-8 title absolute font-bold flex flex-col gap-2  md:text-7xl text-6xl"
        >
          <div> wtehim</div>
          <div className="subtitle text-2xl pl-4 font-light">
            a native seeds store
          </div>
        </Link>
        <Splotch2
          className={`w-full min-w-[100px] fill-transparent splotch opacity-90 -pt-80 md:-mt-4 md:-ml-3 ml-4 block  ${
            hoveredButton === "left" ? "hovered" : ""
          }`}
        />
      </div>
      <div className="right flex flex-col justify-center md:justify-end pt-8 md:pt-0 pr-4">
        <div className="navMenu flex flex-col justify-end items-end">
          <FiMenu
            className="text-3xl pb-2 md:hidden"
            onClick={() => {
              setMenuOpen((prevState) => !prevState);
            }}
          />
          {menuOpen && (
            <div className="menu flex md:flex flex-col  font-semibold  uppercase text-right gap-3 text-md">
              <div
                id="about"
                className="navContainer splotch relative"
                onMouseEnter={() => handleMouseEnter("about")}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  className="z-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-80"
                  href="/about"
                >
                  About
                </Link>
                <Splotch
                  className={`fill-pink-200 splotch block opacity-80 w-30 h-16  ${
                    hoveredButton === "about" ? "hovered" : ""
                  }`}
                />
              </div>
              <div
                id="seeds"
                className="navContainer relative"
                onMouseEnter={() => handleMouseEnter("seeds")}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  className="z-20 pt-5  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-80"
                  href="/seeds"
                >
                  Seeds
                </Link>
                <Splotch2
                  className={`fill-pink-500 opacity-80 block ${
                    hoveredButton === "seeds" ? "hovered" : ""
                  }`}
                />{" "}
              </div>
              <div
                id="learn"
                className="navContainer relative "
                onMouseEnter={() => handleMouseEnter("learn")}
                onMouseLeave={handleMouseLeave}
              >
                <Splotch3
                  className={`fill-rose-300 opacity-80 block ${
                    hoveredButton === "learn" ? "hovered" : ""
                  }`}
                />
                <Link
                  className="pt-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  href="/learn"
                >
                  Learn
                </Link>
              </div>
            </div>
          )}
          <div className="search flex flex-col md:flex-row-reverse mt-4 md:mt-0 md:mb-20 md:pt-8 gap-2 md:pr-6 justify-center items-end md:items-center">
            <FiSearch
              className="text-3xl md:text-4xl"
              onClick={() => {
                setSearchOpen((prevState) => !prevState);
              }}
            />
            {searchOpen && (
              <input
                className=" focus:outline-none p-.5 pt-10 md:mt-0 rounded-md border-b-4 rounded-none border-opacity-70 border-yellow-800 hover:border-rose-300 text-2xl p-3 px-3 text-right w-full md:w-[275px] pr-12 placeholder-yellow-800 placeholder-opacity-70 focus:placeholder-white"
                type="search"
                name="search"
                style={{ resize: "horizontal" }}
                placeholder="Search"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
