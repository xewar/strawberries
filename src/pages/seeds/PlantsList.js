import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";

function PlantsList({ plants }) {
  const { language } = useContext(LanguageContext);

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
            className="md:p-6 md:w-1/3  bg-transparent md:hover:bg-pink-50"
          >
            <Image
              src={`/../public/images/plants/${plant.fileExt}.jpg`}
              width={1024}
              height={1024}
              className="rounded-full aspect-square object-cover md:w-full md:max-h-full "
              sizes=""
              alt={`${plant.englishName} flowers.`}
              href=""
            />
            <div className="plantId text-right pt-6 mr-16 pb-6">
              {language === "english" && (
                <div className="englishDescription">
                  <div className="font-semibold opacity-90 uppercase text-lg">
                    {plant.englishName}
                  </div>
                  <div className="italic">{plant.latinName}</div>
                  <div className="uppercase">{plant.family}</div>
                </div>
              )}
              {language === "lenape" && (
                <div className="englishDescription">
                  <div className="font-semibold opacity-90 uppercase text-lg">
                    {plant.lenapeName}
                  </div>
                  <div className="italic">{plant.lenapeMeaning}</div>
                </div>
              )}
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default PlantsList;
