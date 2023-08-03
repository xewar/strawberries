import { AiOutlineClose } from "react-icons/ai";
import { FiTrash } from "react-icons/fi";
import { GoNorthStar } from "react-icons/go";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Cart = ({ cartOpen, setCartOpen }) => {
  const [isClosing, setIsClosing] = useState(false);

  //workaround so that cart can slide down instead of immediately disappearing when the component unmounts
  const handleClose = () => {
    setIsClosing(true);

    setTimeout(() => {
      setIsClosing(false);
      setCartOpen(false);
    }, 600);
  };

  return (
    <div
      className={`cartDiv ${cartOpen ? "open" : "closed"} cartTransition ${
        isClosing ? "closed" : ""
      } flex flex-col justify-between items-end gap-4 bg-pink-200 -mr-4 -mt-8 mt:mt-0 md:-mr-6 z-40 w-[100vw] h-[100vh] md:w-[500px] absolute top-0 right-0 p-8`}
    >
      <div className="top flex justify-between items-center w-full border-b-[3px] pb-3 border-yellow-800">
        <div className="text-3xl uppercase font-semibold mx-auto">
          Your Cart
        </div>
        <AiOutlineClose
          className="text-2xl text-yellow-800 "
          onClick={handleClose}
        />
      </div>
      <div className="topText mt-4 flex gap-8 items-center text-sm">
        <div className="warning border-2 border-yellow-800 flex flex-1  gap-0 bg-white rounded-full py-6 px-2 items-center">
          <GoNorthStar className="text-xl" />
          <div className=" font-medium flex text-xs w-16 text-center  ">
            This is an example store.
          </div>
          <GoNorthStar className="text-xl" />
        </div>
        <div className="flex flex-col gap-2 font-medium text-lg pr-4">
          <div>
            However, you can buy most of the seeds on this website from the{" "}
            <Link
              className=" font-semibold text-rose-400 opacity-90 "
              href="https://shop.wildseedproject.net/"
            >
              {" "}
              Wild Seed Project
            </Link>
            .
          </div>
        </div>
      </div>
      <div className="cartContainer flex flex-col self-stretch gap-12 flex-1 py-6 justify-start items-start">
        <div className="cartItem flex flex-row self-stretch border-y-2 p-4 border-yellow-800 bg-rose-300 justify-between gap-6 pr-4">
          <div class="cartImageContainer">
            <Image
              className="object-cover w-36 aspect-square"
              src={`/images/plants/blood-root.jpg`}
              width={1024}
              height={1024}
              alt="White bloodroot flowers"
            />
          </div>
          <div className="nameAndQuanity flex flex-col  justify-center text-left gap-2">
            <div className="itemName">
              <div className="lenapeName font-semibold uppercase">pékon</div>
              <div className="englishName font-medium uppercase italic">
                Bloodroot
              </div>
            </div>
            <div className="adjustQuantity bg-white flex w-full self-stretch text-center">
              <button className="adjustDown flex-1 border-2 border-yellow-800">
                -
              </button>
              <div className="currentQuantity bold flex-1 border-y-2 border-yellow-800">
                2
              </div>
              <button className="adjustUp flex-1 border-2 border-yellow-800">
                +
              </button>
            </div>
          </div>
          <div className="itemPrice flex flex-col justify-center items-end gap-[1.5rem]">
            <FiTrash />
            <div>$4.95</div>
          </div>
        </div>
        <div className="cartItem flex flex-row self-stretch border-y-2 p-4 border-yellow-800 bg-rose-300  justify-between gap-4 pr-4">
          <div class="cartImageContainer">
            <Image
              className="object-cover w-36 aspect-square"
              src={`/images/plants/butterfly-milkweed.jpg`}
              width={1024}
              height={1024}
              alt="Orange butterfly milkweed flowers."
            />
          </div>
          <div className="nameAndQuanity flex flex-col  justify-center text-left gap-2">
            <div className="itemName">
              <div className="lenapeName font-semibold uppercase ">
                memekas nehënawlachi
              </div>
              <div className="englishName font-medium uppercase italic md:text-md text-sm">
                Butterfly Milkweed
              </div>
            </div>
            <div className="adjustQuantity bg-white flex w-full self-stretch text-center">
              <button className="adjustDown flex-1 border-2 border-yellow-800">
                -
              </button>
              <div className="currentQuantity bold flex-1 border-y-2 border-yellow-800">
                2
              </div>
              <button className="adjustUp flex-1 border-2 border-yellow-800">
                +
              </button>
            </div>
          </div>
          <div className="itemPrice flex flex-col justify-center items-end gap-[1rem]">
            <FiTrash />
            <div>$4.95</div>
          </div>
        </div>
      </div>
      <div class="cartFooter sticky">
        <button
          className="w-64 text-xl font-medium uppercase h-16 bg-rose-400 hover:from-teal-400 hover:via-rose-400 hover:to-pink-400 hover:bg-gradient-to-br border-[3px] border-yellow-800 rounded-3xl mx-auto mb-16"
          onClick={(e) => e.preventDefault()}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
