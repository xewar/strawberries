import Link from "next/link";
import Image from "next/image";

function PlantsList({ plants }) {
  return (
    <div className="plantsContainer flex flex-wrap">
      {plants.map((plant) => {
        return (
          <Link
            href={{
              pathname: `/seeds/${plant.fileExt}`,
              query: {
                id: plant.id,
                plant: JSON.stringify(plant),
              },
            }}
            key={plant.id}
            className="md:p-4 md:w-1/3  bg-transparent md:hover:bg-pink-50"
          >
            <Image
              src={`/../public/images/plants/${plant.fileExt}.jpg`}
              width={1024}
              height={1024}
              className=""
              sizes=""
              alt={`Picture of ${plant.englishName}`}
              href=""
            />
            <div className="plantId text-right pt-3 mr-5 pb-6">
              <div className="font-medium uppercase text-lg">
                {plant.englishName}
              </div>
              <div className="italic">{plant.latinName}</div>
              <div className="uppercase">{plant.family}</div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default PlantsList;
