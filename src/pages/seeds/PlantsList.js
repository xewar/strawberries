import Link from "next/link";
import Image from "next/image";

function PlantsList({ plants }) {
  return (
    <div className="">
      {plants.map((plant) => {
        return (
          <div key={plant.id} className="p-6">
            <Image
              src={`/../public/images/plants/${plant.fileExt}.jpg`}
              width={1024}
              height={1024}
              className=""
              sizes=""
              alt={`Picture of ${plant.englishName}`}
              href=""
            />
            <div className="plantId text-right pt-3 mr-5">
              <div className="font-medium uppercase text-lg">
                {plant.englishName}
              </div>
              <div className="italic">{plant.latinName}</div>
              <div className="uppercase">{plant.family}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default PlantsList;
