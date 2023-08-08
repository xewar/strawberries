import Link from "next/link";
import Image from "next/image";

const FeaturedPlant = ({ plants }) => {
  const plant = plants[12];

  console.log("plants are", plants);
  return (
    <div className="md:pb-24 md:mx-32 -mt-16 rotate flex-1 justify-center md:block hidden">
      <Link
        href={{
          pathname: `/seeds/${plant?.fileExt}`,
          query: {
            id: plant.id,
            plant: JSON.stringify(plant),
            slug: plant.fileExt,
          },
        }}
        // href={`/seeds/new-england-aster`}
        className="featuredPlant pb-6 md:pb-2 "
      >
        <Image
          id="mainImage"
          className="rounded-full object-cover md:w-full "
          src={`/images/plants/new-england-aster.jpg`}
          width={1024}
          height={1024}
          priority={true}
          alt="The purple and pink flowers of a New England Aster"
        ></Image>
      </Link>
    </div>
  );
};

export default FeaturedPlant;
