import Image from "next/image";
import Link from "next/link";
// import { GiDandelionFlower } from "react-icons/gi";
// import { PiPlantDuotone } from "react-icons/pi";
import { GoNorthStar } from "react-icons/go";

const About = () => {
  return (
    <div className="md:flex md:gap-4 md:pr-12">
      <div className="left md:max-w-2xl  pb-4 ">
        <Image
          className="image object-cover md:h-2/3"
          alt="butterfly milkweed flowers"
          src={`/../public/images/plants/butterfly-milkweed.jpg`}
          width={1024}
          height={1024}
        ></Image>
        <div className="p-2 imageCaption text-sm">
          <div className="plantTitle italic">butterfly milkweed</div>
          <div className="plantInfo">
            A summer-blooming wildflower in the milkweed family that is an
            important host to the monarch butterfly.
          </div>
        </div>
      </div>
      <div className="right flex flex-1 flex-col p-2 gap-4">
        <div className="aboutTitle italic text-emerald-600 text-lg">
          wild strawberries - a native seed directory
        </div>
        <div>
          This is an example website inspired by the{" "}
          <Link className="text-emerald-600" href="https://www.talk-lenape.org">
            Lenape Talking Dictionary
          </Link>
          , a project of the Delaware Tribe, and by the work of the
          <Link
            className="text-emerald-600"
            href="https://shop.wildseedproject.net/"
          >
            {" "}
            Wild Seed Project
          </Link>
          , a Maine-based nonprofit focused on restoring native plants to the
          Maine landscape. The Lenape translations are from the Lenape Talking
          Dictionary, and all the photos and descriptions of plants are courtesy
          of the Wild Seed Project.
        </div>
        <div>
          You can purchase any of the seeds featured on this site at the Wild
          Seed Project's{" "}
          <Link
            className="text-emerald-600"
            href="https://shop.wildseedproject.net/"
          >
            shop
          </Link>
          .
        </div>
        <div>
          My learning goals for this project were to:
          <div className="flex gap-4 items-center">
            <GoNorthStar className="text-xs" />
            Deepen my fluency with React
          </div>
          <div className="flex gap-4 items-center">
            <GoNorthStar className="text-xs" />
            Build a project with Next.js + Tailwind CSS
          </div>
          <div className="flex gap-4 items-center">
            <GoNorthStar className="text-xs" /> Implement user authentication
            with Passport.js
          </div>
          <div className="flex gap-4 items-center">
            <GoNorthStar className="text-xs" /> Learn to use Postgres + Prisma
          </div>
          <div className="flex gap-4 items-center">
            <GoNorthStar className="text-xs" /> Design a visually polished
            fullstack app
          </div>
          <div className="flex gap-4 items-center">
            <GoNorthStar className="text-xs" /> Build user-friendly custom
            search support
          </div>
          <div className="flex gap-4 items-center">
            <GoNorthStar className="text-xs" /> Continue to work on good UI
            practices, accessibility, and responsive web design.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
