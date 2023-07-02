import Link from "next/link";
import { BsCart3 } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";

const Header = () => {
  return (
    <div className="header bg-sky-200 p-3 md:flex md:flex-row md:justify-between">
      <div className="left text-center pb-6 md:text-left">
        <div className="title text-4xl ">wild strawberries</div>
        <div className="subtitle text-xl italic">a native plants store</div>
      </div>
      <div className="right flex flex-col  gap-2">
        <div class="rightTop  flex flex-col items-end md:text-sm md:flex md:justify-between md:flex-row md:gap-4">
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
        <div className="menu flex flex-col uppercase text-right gap-1 text-lg">
          <Link href="">Seeds</Link>
          <Link href="">Events</Link>
          <Link href="">Publications</Link>
        </div>
        <div className="search flex justify-end gap-2">
          <input className="focus:outline-none p-1 rounded-md"></input>
          <FiSearch size="1.5em" />
        </div>
      </div>
    </div>
  );
};

export default Header;
