"use client";
import Link from "next/link";
import { BsCart3 } from "react-icons/bs";
import { FiSearch, FiMenu } from "react-icons/fi";
import { LuFlower } from "react-icons/lu";
import { useState, useEffect } from "react";

const Header = () => {
  //menuOpen displays and hides the menu links in mobile view
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginLinksOpen, setLoginLinksOpen] = useState(true);

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
    <div className="header p-3 flex  justify-between md:flex-row md:justify-between">
      <div className="left text-center md:text-left">
        <div className="title text-4xl ">wild strawberries</div>
        <div className="subtitle text-xl italic">a native plants store</div>
      </div>
      <div className="right flex flex-col justify-end gap-2">
        <div className="loginMenu flex flex-col justify-end items-end">
          <LuFlower
            className="text-3xl items-end md:hidden"
            onClick={() => {
              setLoginLinksOpen((prevState) => !prevState);
            }}
          />
          {loginLinksOpen && (
            <div className="rightTop  flex flex-col text-right items-end  md:flex justify-between md:flex-row md:gap-4">
              <div className="cart">
                <Link href="" className="flex gap-2 items-center">
                  <BsCart3 />
                  Cart
                </Link>
              </div>
              <div className="login ">
                <Link href="">Log in</Link>
              </div>
            </div>
          )}
        </div>
        <div className="navMenu flex flex-col justify-end items-end">
          <FiMenu
            className="text-3xl pb-2 md:hidden"
            onClick={() => {
              setMenuOpen((prevState) => !prevState);
            }}
          />
          {menuOpen && (
            <div className="menu flex md:flex flex-col uppercase text-right gap-1 text-lg">
              <Link href="">Seeds</Link>
              <Link href="">Events</Link>
              <Link href="">Publications</Link>
            </div>
          )}
        </div>
        <div className="search flex justify-end gap-2">
          <input
            className=" hidden focus:outline-none p-1 rounded-md"
            type="search"
            name="search"
          />
          <FiSearch size="1.5em" />
        </div>
      </div>
    </div>
  );
};

export default Header;
