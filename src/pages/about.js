import Image from "next/image";
import Link from "next/link";
// import { GiDandelionFlower } from "react-icons/gi";
// import { PiPlantDuotone } from "react-icons/pi";
import { GoNorthStar } from "react-icons/go";

const About = () => {
  return (
    <div className="md:flex gap-2 md:pr-8 pt-16 md:pt-12">
      <div className="left pl-16 px-8 md:pr-0 md:max-w-lg lg:max-w-xl">
        <Image
          className="image object-cover object-right-top md:h-3/4 md:max-w-full shadow-[-20px_20px_0_5px_#fdba74]  "
          alt="butterfly milkweed flowers"
          src={`/images/plants/butterfly-milkweed.jpg`}
          width={1024}
          height={1024}
        ></Image>
        <div className="p-2 pt-12 imageCaption flex flex-col gap-1 text-sm">
          <div className="plantTitle italic">
            memekas nehënawlachi (butterfly milkweed) - that on which
            butterflies alight
          </div>
          <div className="plantInfo">
            A summer-blooming wildflower in the milkweed family that is an
            important host to the monarch butterfly.
          </div>
        </div>
      </div>
      <div className="right  flex flex-1 flex-col px-8 py-12 lg:px-18 lg:max-w-xl md:py-4 md:pr-16 gap-3">
        <div className="aboutTitle font-normal opacity-95 text-xl ">
          <span className="italic">wtehim</span> is the word for wild strawberry
          in Lenape
        </div>

        <div className="bodyText tracking-wider flex flex-col gap-4 ">
          <div className="paragraph">
            This website is inspired by the{" "}
            <Link
              className="text-rose-400 font-semibold opacity-90 "
              href="https://www.talk-lenape.org"
            >
              Lenape Talking Dictionary
            </Link>
            , a project of the Delaware Tribe, and by the work of the
            <Link
              className="text-rose-400 font-semibold opacity-90 "
              href="https://shop.wildseedproject.net/"
            >
              {" "}
              Wild Seed Project
            </Link>
            , a Maine-based nonprofit focused on restoring native plants to the
            Maine landscape. The Lenape translations are from the Lenape Talking
            Dictionary, and all the photos and descriptions of plants are
            courtesy of the Wild Seed Project.
          </div>
          <div>
            You can purchase any of the seeds featured on this site at the Wild
            Seed Project's{" "}
            <Link
              className="text-rose-400 font-semibold opacity-90 "
              href="https://shop.wildseedproject.net/"
            >
              shop
            </Link>
            .
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
