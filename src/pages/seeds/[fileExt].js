"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "@/styles/toggle.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../redux/cart.slice";

const IndividualPlantInfo = () => {
  const { query } = useRouter();
  //plant = null until the data is loaded from the server
  const plant = query.plant ? JSON.parse(query.plant) : null;

  //sending items to cart
  const dispatch = useDispatch();
  const [currentPlantQuantity, setCurrentPlantQuantity] = useState(1);

  //change name of plant to English when hovered
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="pageContent flex justify-start flex-col md:mx-12">
      <div className="backButton  -mt-12 md:-mt-20 ml-6 md:ml-0 lg:ml-16 ">
        <Link
          href="/seeds"
          className={`backButton top flex flex-col  text-xs w-[100px] my-8 md:my-4 text-center ${styles.button} border-[3px] border-yellow-800 rounded-3xl`}
        >
          <div>all plants</div>
        </Link>
      </div>

      <div class="pageBody flex flex-col md:flex-row lg:mx-16  justify-between">
        <Image
          src={`/images/plants/${plant?.fileExt}.jpg`}
          width={1024}
          height={1024}
          className="object-cover w-full md:w-2/3 mr-6 md:pt-4"
          sizes=""
          alt={`${plant?.lenapeName} flowers.`}
          href=""
        />
        <div className="right flex flex-col gap-6 md:w-1/2  md:mr-0  mx-6 md:mx-2">
          <div
            class="setHover"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="plantName flex justify-between  pt-6 md:pt-8 pb-2 ">
              <div className="lenape flex flex-col gap-2">
                <div className="font-semibold text-3xl uppercase ">
                  {isHovered
                    ? plant?.englishName
                    : plant?.lenapeName || plant?.englishName}
                </div>
                <div className="italic text-xl">
                  {" "}
                  {isHovered
                    ? plant?.latinName
                    : plant?.lenapeMeaning || plant?.latinName}
                </div>
              </div>
            </div>
          </div>
          {plant?.lenapeDescription && (
            <div className="lenapeDescription  bg-yellow-800 text-white px-6 py-8  flex flex-col gap-2">
              <div className="font-semibold uppercase">Lenape usage notes:</div>
              <div className=""> "{plant?.lenapeDescription}"</div>
              <div className="italic">Delaware Ethnobotany</div>
            </div>
          )}
          <div className="plantSection">
            <div className="subtitle">Description:</div>
            <div>{plant?.description}</div>
          </div>
          <div className="cartSection pb-4">
            <div className="addToBag flex gap-4">
              <div className="left flex flex-col gap-2 justify-end  items-center">
                <div className="adjustQuantity bg-white flex w-28 text-center font-semibold">
                  <button
                    className="adjustDown flex-1 border-2 border-yellow-800"
                    onClick={() => {
                      if (currentPlantQuantity > 1) {
                        setCurrentPlantQuantity(currentPlantQuantity - 1);
                      }
                    }}
                  >
                    -
                  </button>
                  <div className="currentQuantity bold flex-1 border-y-2 border-yellow-800 flex justify-center">
                    {currentPlantQuantity}
                  </div>
                  <button
                    className="adjustUp flex-1 border-2 border-yellow-800"
                    onClick={() =>
                      setCurrentPlantQuantity(currentPlantQuantity + 1)
                    }
                  >
                    +
                  </button>
                </div>
                <div className="price font-medium">
                  ${plant?.price * currentPlantQuantity}
                </div>
              </div>
              <button
                className="w-full  p-6 uppercase font-medium text-xl max-w-sm  from-pink-200 via-rose-400 to-pink-300 bg-gradient-to-br hover:from-pink-400 hover:via-[#ff0] hover:bg-gradient-to-lr"
                onClick={() =>
                  dispatch(addToCart({ plant, quantity: currentPlantQuantity }))
                }
              >
                Add to Bag
              </button>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="plantSection">
              <div className="subtitle"># Seeds</div>
              <div>{plant?.seedsPerPacket}</div>
            </div>
            <div className="plantSection">
              <div className="subtitle">Height</div>
              <div>{plant?.height}</div>
            </div>

            {plant?.blooms && (
              <div className="plantSection">
                <div className="subtitle">Blooms</div>
                <div>{plant?.blooms}</div>
              </div>
            )}
          </div>

          {plant?.naturalHabitat && (
            <div className="plantSection">
              <div className="subtitle">Natural habitat</div>
              <div>{plant?.naturalHabitat}</div>
            </div>
          )}
          {plant?.growingConditions && (
            <div className="plantSection">
              <div className="subtitle">Growing conditions</div>
              <div>{plant?.growingConditions}</div>
            </div>
          )}
          {plant?.pairs && (
            <div className="plantSection">
              <div className="subtitle">Pairs</div>
              <div>{plant?.pairs}</div>
            </div>
          )}
          {plant?.germNotes && (
            <div className="plantSection">
              <div className="subtitle">Germination Notes</div>
              <div>{plant?.germNotes}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default IndividualPlantInfo;
