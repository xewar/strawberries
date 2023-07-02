import Link from "next/link";
import Image from "next/image";

function PlantsList({ plants }) {
  return (
    <div className="plantsContainer flex flex-wrap p-10">
      {plants.map((plant) => {
        return (
          <div key={plant.id} className="w-1/3 p-6">
            <Image
              src={`/../public/images/plants/${plant.fileExt}.jpg`}
              width={1024}
              height={1024}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt={`Picture of ${plant.englishName}`}
              href=""
            />
            <div className="plantId text-right pt-3 text-sky-400 mr-5">
              <div className="font-medium text-sky-950 uppercase text-lg">
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
