"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import PlantData from "@/lib/PlantData";
import styles from "@/styles/toggle.module.css";

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

  return (
    <div className="pageContent flex ">
      <div className="left w-1/2 ">
        <Link
          href="/seeds"
          className={`backButton top flex flex-col w-[140px] mx-11 -my-12 text-center ${styles.button}`}
        >
          <div>Back to</div> <div>all plants</div>
        </Link>
        <div className="image-container w-3/4 ml-24 mt-4 ">
          <svg viewBox="0 0 381.5 375.9" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <clipPath id="splotch3">
                <path
                  d="M376.7,166.8C384,277.9,315,375.9,183.4,356.7C39,351.9-89,167.9,103.2,41.9C183-26,370.9,78.5,376.7,166.8z"
                  fill=""
                />
              </clipPath>
            </defs>
            <g clipPath="url(#splotch3)">
              <image
                className={`w-full bg-white bg-opacity-100 hover:bg-rose-400 hover:scale-105 `}
                xlinkHref={`/images/plants/${plant?.fileExt}.jpg`}
                style={{ objectPosition: "top right" }}
              />
            </g>
          </svg>
        </div>
      </div>
      <div className="right">
        <div>{plant?.englishName}</div>
      </div>
    </div>
  );
}

export default IndividualPlantInfo;
