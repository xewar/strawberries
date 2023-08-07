"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import PlantData from "@/lib/PlantData";
import styles from "@/styles/toggle.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";

function IndividualPlantInfo() {
  //temp solution before I move plant data to database
  const { query } = useRouter();
  let fileExt = query.fileExt;
  const findFlowerByFileExt = (fileExt) => {
    const flower = PlantData.wildflowers.find(
      (flower) => flower.fileExt === fileExt
    );
    return flower;
  };
  const plant = findFlowerByFileExt(fileExt);
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

      <div class="pageBody flex flex-col md:flex-row lg:mx-16">
        <div className="middle w-full md:w-[65vw] md:h-100 md:ml-0 mr-8 md:pt-4">
          <Image
            src={`/images/plants/${plant?.fileExt}.jpg`}
            width={1024}
            height={1024}
            className="object-cover w-full h-full"
            sizes=""
            alt={`${plant?.lenapeName} flowers.`}
            href=""
          />
        </div>
        <div className="right flex flex-col gap-6 md:w-1/2 mx-6 md:mr-0   ">
          <div
            class="setHover"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="plantName flex justify-between pt-6 pb-2 ">
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
                  <button className="adjustDown flex-1 border-2 border-yellow-800">
                    -
                  </button>
                  <div className="currentQuantity bold flex-1 border-y-2 border-yellow-800 flex justify-center">
                    1
                  </div>
                  <button className="adjustUp flex-1 border-2 border-yellow-800">
                    +
                  </button>
                </div>
                <div class="price font-medium">${plant?.price}</div>
              </div>
              <button className="w-full  p-6 uppercase font-medium text-xl max-w-sm  from-pink-200 via-rose-400 to-pink-300 bg-gradient-to-br hover:from-pink-400 hover:via-[#ff0] hover:bg-gradient-to-lr">
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
}

export default IndividualPlantInfo;
