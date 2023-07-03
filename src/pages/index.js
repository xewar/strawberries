import Image from "next/image";
import { Inter } from "next/font/google";
import PlantsLayout from "./seeds";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div className="featuredPlant">
        <Image
          className="h-48 w-full object-cover md:h-full md:w-48"
          src={`/../public/images/plants/new-england-aster`}
          width={1024}
          height={1024}
        ></Image>
      </div>
      <div className="text-3xl ">Hello world</div>
      <PlantsLayout />
    </main>
  );
}
