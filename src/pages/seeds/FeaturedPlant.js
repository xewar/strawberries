import Link from "next/link";
import Image from "next/image";

const FeaturedPlant = () => {
  return (
    <div className="md:mx-10 md:px-10 pt-10 rotate">
      <Link
        href="/seeds/new-england-aster"
        className="featuredPlant  pb-6 md:pb-2 "
      >
        <Image
          id="mainImage"
          className="rounded-full object-cover md:w-full min-w-[800px] h-1/2"
          src={`/images/plants/new-england-aster.jpg`}
          width={1024}
          height={1024}
          priority={true}
          alt="The purple and pink flowers of a New England Aster"
        ></Image>
        <div className="noise"></div>
      </Link>
    </div>
  );
};

export default FeaturedPlant;
