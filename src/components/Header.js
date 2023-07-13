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
  const [loginLinksOpen, setLoginLinksOpen] = useState(false);
  const [hoveredButton, setHoveredButton] = useState(null);

  //changing color of nav menu on hover. the :hover state wasn't working properly because of the text in front of it
  useEffect(() => {
    const handleMouseEnter = (event) => {
      const buttonId = event.target.id;
      console.log(buttonId, event.target);
      setHoveredButton(buttonId);
    };

    const handleMouseLeave = () => {
      setHoveredButton(null);
    };

    const navButtons = document.querySelectorAll(".navContainer");

    navButtons.forEach((button) => {
      button.addEventListener("mouseenter", handleMouseEnter);
      button.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      navButtons.forEach((button) => {
        button.removeEventListener("mouseenter", handleMouseEnter);
        button.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

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
    <div className="header pt-16 px-8 lg:px-16 flex justify-between md:flex-row md:justify-between">
      <div className="left relative text-center md:text-left ">
        <Link
          href="/"
          className="title  absolute font-bold flex flex-col gap-2  text-7xl "
        >
          <div> wtehim</div>
          <div className="subtitle text-2xl pl-4 font-light">
            a native seeds store
          </div>
        </Link>
        <Splotch2 className="z-10 w-full fill-transparent hover:fill-pink-400 splotch opacity-30 block"></Splotch2>
      </div>
      <div className="right flex flex-col justify-center md:justify-end gap-2">
        <div className="navMenu flex flex-col justify-end items-end ">
          <FiMenu
            className="text-3xl pb-2 md:hidden"
            onClick={() => {
              setMenuOpen((prevState) => !prevState);
            }}
          />
          {menuOpen && (
            <div className="menu flex md:flex flex-col  font-semibold  uppercase text-right gap-3 text-md">
              <div id="about" className="navContainer splotch relative">
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
              <div id="seeds" className="navContainer relative">
                <Link
                  className="z-20 pt-5  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-80"
                  href="/seeds"
                >
                  Seeds
                </Link>
                <Splotch2
                  className={`fill-pink-300 opacity-80 block ${
                    hoveredButton === "seeds" ? "hovered" : ""
                  }`}
                />{" "}
              </div>
              <div id="learn" className="navContainer relative ">
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
        </div>
      </div>
    </div>
  );
};

export default Header;
