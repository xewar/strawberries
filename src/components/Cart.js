import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import Image from "next/image";

const Cart = ({ cartOpen, setCartOpen }) => {
  const [isClosing, setIsClosing] = useState(false);

  //workaround so that cart can slide out instead of immediately disappearing when the component unmounts
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
      } flex flex-col justify-between items-end bg-pink-200 -mr-4 -mt-8 mt:mt-0 md:-mr-6 z-40 w-[100vw] h-[100vh] md:w-[500px] absolute top-0 right-0 p-8`}
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
      <div className="cartItems">
        <div className="cartItem">
          <Image className="" />
        </div>
      </div>
      <button
        className="w-64 text-xl font-medium uppercase h-16 bg-rose-400 hover:from-teal-400 hover:via-rose-400 hover:to-pink-400 hover:bg-gradient-to-br border-[3px] border-yellow-800 rounded-3xl mx-auto"
        onClick={(e) => e.preventDefault()}
      >
        Checkout
      </button>
    </div>
  );
};

export default Cart;
