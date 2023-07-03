import Link from "next/link";
import { BsCart3 } from "react-icons/bs";
import { FiSearch, FiMenu } from "react-icons/fi";
import { LuFlower } from "react-icons/lu";
import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="header bg-emerald-600 p-3 flex  justify-between md:flex-row md:justify-between">
      <div className="left text-center md:text-left">
        <div className="title text-4xl ">wild strawberries</div>
        <div className="subtitle text-xl italic">a native plants store</div>
      </div>
      <div className="right flex flex-col  gap-2">
        <div class="loginMenu flex justify-end">
          <LuFlower className="text-3xl md:hidden" />
          <div class="rightTop hidden md:flex flex-col items-end md:text-sm md:flex md:justify-between md:flex-row md:gap-4">
            <div className="login">
              <Link href="">Log in</Link> or{" "}
              <Link href="">Create an account</Link>
            </div>
            <div className="cart">
              <Link href="" className="flex gap-2 items-center">
                <BsCart3 />
                Cart
              </Link>
            </div>
          </div>
        </div>

        <div class="navMenu flex justify-end">
          <FiMenu className="text-3xl md:hidden" />
          <div className=" hidden menu md:flex flex-col uppercase text-right gap-1 text-lg">
            <Link href="">Seeds</Link>
            <Link href="">Events</Link>
            <Link href="">Publications</Link>
          </div>
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
