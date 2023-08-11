import Link from "next/link";
import Image from "next/image";
import { useContext, useState } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

//displays all the plants on the seeds page and home page
function PlantsList({ plants }) {
  const { language } = useContext(LanguageContext);
  return (
    <div className=" plantsContainer flex flex-wrap justify-between md:ml-16 -mt-72  md:-mt-56  md:mr-24 lg:mr-10  lg:justify-start md:justify-center ">
      {plants.map((plant) => {
        //the displayLanguage of individual plant names flips on mouseOver
        const [isHovered, setIsHovered] = useState(false);
        const handleMouseEnter = () => {
          setIsHovered(true);
        };
        const handleMouseLeave = () => {
          setIsHovered(false);
        };
        const displayLanguage = isHovered
          ? language === "english"
            ? "lenape"
            : "english"
          : language;

        return (
          <Link
            href={{
              pathname: `/seeds/${plant?.fileExt}`,
              query: {
                id: plant.id,
                plant: JSON.stringify(plant),
                slug: plant.fileExt,
              },
            }}
            key={plant.id}
            className="z-20 md:w-[100%] lg:w-[45%] md:p-4  bg-transparent  md:rounded-full "
          >
            <Image
              src={`/images/plants/${plant.fileExt}.jpg`}
              width={1024}
              height={1024}
              className="md:rounded-full aspect-square object-cover md:w-[90%] md:max-h-full md:hover:shadow-[-20px_0px_0px_5px_#ff0] md:hover:scale-[1.005]"
              sizes=""
              alt={`${plant.englishName} flowers.`}
              href=""
            />
            <div
              className="plantId md:text-left px-12 pt-6 lg:ml-16 pb-6 justify-start "
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="plantDescription">
                <div className="font-semibold opacity-90 uppercase text-lg">
                  {displayLanguage === "english"
                    ? plant.englishName
                    : plant?.lenapeName}
                </div>
                <div className="italic">
                  {displayLanguage === "english"
                    ? plant.latinName
                    : plant?.lenapeMeaning}
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default PlantsList;
