"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import plantData from "@/pages/seeds/plantData";

function IndividualPlantInfo() {
  //temp solution before I move plant data to database
  const { query } = useRouter();
  let fileExt = query.fileExt;
  const findFlowerByFileExt = (fileExt) => {
    const flower = plantData.wildflowers.find(
      (flower) => flower.fileExt === fileExt
    );
    return flower;
  };
  const plant = findFlowerByFileExt(fileExt);
  return (
    <div>
      <div className="left">
        <Link href="/seeds" className="top">
          Back to all plants page
        </Link>
        <div className="plantPhoto md:w-2/3">
          <Image
            src={`/../public/images/plants/${plant?.fileExt}.jpg`}
            width={1024}
            height={1024}
            sizes=""
            alt={`Picture of ${plant?.englishName}`}
            href=""
          ></Image>
        </div>
      </div>

      <div className="right">
        <div>{plant?.englishName}</div>
      </div>
    </div>
  );
}

export default IndividualPlantInfo;
