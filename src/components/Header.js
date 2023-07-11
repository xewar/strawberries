"use client";
import Link from "next/link";
import { BsCart3 } from "react-icons/bs";
import { FiSearch, FiMenu, FiHeart } from "react-icons/fi";
import { LuFlower } from "react-icons/lu";
import { useState, useEffect } from "react";
import Image from "next/image";
import Splotch from "./Splotch.js";
import Splotch2 from "./Splotch2.js";
import Splotch3 from "./Splotch3.js";

const Header = () => {
  //menuOpen displays and hides the menu links in mobile view
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginLinksOpen, setLoginLinksOpen] = useState(false);

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
      <div className="left text-center md:text-left ">
        <Link href="/" className="title font-bold flex pb-2  text-7xl ">
          wtehim
        </Link>
        <div className="subtitle text-2xl pl-4 font-light">
          a native seeds store
        </div>
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
            <div className="menu flex md:flex flex-col font-light uppercase text-right gap-3 text-lg">
              <div className="navContainer relative">
                <Link
                  className="p-1 pt-5 z-10 font-medium absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  href="/about"
                >
                  About
                </Link>
                <Image
                  className="relative"
                  src="/images/splotch.svg"
                  height={100}
                  width={120}
                />
              </div>
              <div className="navContainer relative">
                <Link
                  className="p-1 pt-5 z-10 font-medium absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  href="/seeds"
                >
                  Seeds
                </Link>
                <Image
                  className="relative  opacity-50"
                  src="/images/splotch2.svg"
                  height={100}
                  width={120}
                />
              </div>
              <div className="navContainer relative ">
                <Splotch className="fill-[#fda4af]  hover:fill-[#fb7185] block" />
                <Link
                  className="p-1 pt-5 font-medium absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
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
