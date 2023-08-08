import { AiOutlineClose } from "react-icons/ai";
import { FiTrash } from "react-icons/fi";
import { GoNorthStar } from "react-icons/go";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../../redux/cart.slice";

const Cart = ({ cartOpen, setCartOpen }) => {
  const [isClosing, setIsClosing] = useState(false);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, plant) => accumulator + plant.quantity * plant.price,
      0
    );
  };
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
      } flex flex-col justify-between items-end gap-4 bg-pink-200 -mr-4 -mt-8 mt:mt-0 md:-mr-6 z-40 w-[100vw] min-h-[100vh] h-fit md:w-[500px] absolute top-0 right-0 p-8`}
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
      <div>
        {cart.length === 0 ? (
          <div className="text-2xl my-20 self-center font-medium">
            Your bag is currently empty.
          </div>
        ) : (
          <div className="cartContainer flex flex-col gap-8 w-full py-6 justify-start items-start">
            {cart.map((plant) => (
              <div className="cartItem flex  flex-col md:flex-row w-full border-y-2 p-4 border-yellow-800 bg-rose-300 justify-between gap-6 pr-4">
                <div class="cartLeftSide flex flex-col md:flex-row gap-4">
                  <div class="cartImageContainer w-full md:w-44 md:h-44 md:aspect-square object-cover pb-2">
                    <Image
                      src={`/images/plants/${plant.fileExt}.jpg`}
                      width={1024}
                      height={1024}
                      alt={`${plant.lenapeName} flowers`}
                    />
                  </div>
                  <div className="nameAndQuanity flex flex-col  justify-center text-left gap-2">
                    <div className="itemName">
                      <div className="lenapeName font-semibold uppercase">
                        {plant.lenapeName}
                      </div>
                      <div className="englishName font-medium uppercase italic">
                        {plant.englishName}
                      </div>
                    </div>
                    <div className="adjustQuantity bg-white flex w-full self-stretch text-center">
                      <button
                        className="adjustDown flex-1 border-2 border-yellow-800"
                        onClick={() => dispatch(decrementQuantity(plant.id))}
                      >
                        -
                      </button>
                      <div className="currentQuantity bold flex-1 border-y-2 border-yellow-800">
                        {`${plant.quantity}`}
                      </div>
                      <button
                        className="adjustUp flex-1 border-2 border-yellow-800"
                        onClick={() => dispatch(incrementQuantity(plant.id))}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div className="itemPrice flex justify-between pl-10 pr-8 md:pl-0 md:pr-0 md:flex-col md:justify-center items-end gap-[1rem]">
                  <FiTrash onClick={() => dispatch(removeFromCart(plant.id))} />
                  <div>${plant.quantity * plant.price}</div>
                </div>
              </div>
            ))}
            <div>Grand Total</div>
            <div>${getTotalPrice()}</div>
          </div>
        )}
      </div>
      <div class="cartFooter sticky self-center">
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
