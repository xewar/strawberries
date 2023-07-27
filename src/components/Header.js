"use client";
import Link from "next/link";
import { BsCart3 } from "react-icons/bs";
import { FiSearch, FiMenu, FiHeart } from "react-icons/fi";
import { useState, useEffect } from "react";
import Splotch from "./Splotches/Splotch.js";
import Splotch2 from "./Splotches/Splotch2.js";
import Splotch3 from "./Splotches/Splotch3.js";
import Search from "./Search.js";
import { useRouter } from "next/router.js";
import Cart from "./Cart.js";

const Header = () => {
  //menuOpen displays and hides the menu links in mobile view
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [loginLinksOpen, setLoginLinksOpen] = useState(false);
  const [hoveredButton, setHoveredButton] = useState(null);
  const [bgColor, setBgColor] = useState("bg-transparent");
  const router = useRouter();

  //minimize search bar when navigating between pages
  useEffect(() => {
    const nonSearchRoutes = ["/", "/about", "/learn", "/seeds"];
    if (nonSearchRoutes.includes(router.asPath)) {
      setSearchOpen(false);
    }
  }, [router.query]);

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
    <div
      className={`header ${bgColor} z-40  pt-8 md:pt-8   md:mx-4 md:mb-20 flex justify-between md:flex-row md:justify-between`}
    >
      <div
        id="left"
        onMouseEnter={() => handleMouseEnter("left")}
        onMouseLeave={handleMouseLeave}
        className="left relative text-center ml-2 md:text-left"
      >
        <Link
          href="/"
          className="z-20 pl-4 mt- md:mt-0 md:pl-2 title absolute font-bold flex flex-col gap-2  md:text-7xl text-6xl"
        >
          <div> wtehim</div>
          <div className=" text-2xl pl-4 font-light">a native seeds store</div>
        </Link>
        <Splotch2
          className={`w-3/4 md:w-full min-w-[80px] fill-transparent splotch opacity-90 -mt-6 md:-mt-8 md:-ml-3 ml-4 block  ${
            hoveredButton === "left" ? "hovered" : ""
          }`}
        />
      </div>
      <div className="right flex flex-col mr-4 md:mr-2 items-end relative">
        <div className="navMenu flex flex-col items-end w-full md:mt-4">
          <FiMenu
            className="text-3xl pb-2 md:hidden"
            onClick={() => {
              setMenuOpen((prevState) => !prevState);
            }}
          />
          {menuOpen && (
            <div className="expandedMenu max-w-100 mt-4 md:mt-0  md:mb-0 flex flex-col gap-4 md:flex-row justify-start items-center  md:gap-2  font-semibold  uppercase text-xl md:text-md">
              <div
                id="about"
                className="navContainer relative "
                onMouseEnter={() => handleMouseEnter("about")}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  className="z-20 md:absolute md:opacity-80 top-8 left-8 md:left-12 md:top-8"
                  href="/about"
                >
                  About
                </Link>
                <Splotch
                  className={`hidden md:block fill-pink-200  block opacity-80 top-8 w-28 h-[4.75rem]  md:w-40  ${
                    hoveredButton === "about" ? "hovered" : ""
                  }`}
                />
              </div>
              <div
                id="seeds"
                className="navContainer relative "
                onMouseEnter={() => handleMouseEnter("seeds")}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  className="z-20 md:absolute  md:opacity-80 top-8 left-8 md:left-14 md:top-8"
                  href="/seeds"
                >
                  Seeds
                </Link>
                <Splotch2
                  className={`hidden md:block fill-pink-500 opacity-90 w-28 h-[4.75rem]  md:w-40 ${
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
                  className={`hidden md:block fill-rose-300 opacity-80 top-8 splotch w-28 h-[4.75rem]  md:w-40 ${
                    hoveredButton === "learn" ? "hovered" : ""
                  }`}
                />
                <Link
                  className=" md:absolute  md:opacity-80 top-8 left-8 md:left-14 md:top-8"
                  href="/learn"
                >
                  Learn
                </Link>
              </div>
            </div>
          )}
        </div>
        <div className="desktopIconContainer flex md:flex-row-reverse flex-col items-end md:items-start md:justify-center">
          <div className="cartContainer ">
            <BsCart3
              className="z-40 text-2xl md:text-2xl text-right mt-6 mr-1 md:mr-6"
              onClick={() => {
                setCartOpen((prevState) => !prevState);
              }}
            />
            {cartOpen && (
              <Cart
                setCartOpen={setCartOpen}
                cartOpen={cartOpen}
                className="m-0 p-0 "
              />
            )}
          </div>
          <div className="search flex flex-col mt-8 md:flex-row-reverse mr-1 md:mt-6 md:mr-6 items-end">
            <FiSearch
              className="text-2xl md:text-2xl items-end mb-4"
              onClick={() => {
                setSearchOpen((prevState) => !prevState);
              }}
            />
            {searchOpen && <Search />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
