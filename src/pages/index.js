import Image from "next/image";
import { Inter } from "next/font/google";
import PlantsLayout from "./seeds";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div className="featuredPlant md:relative pb-6 md:pb-12">
        <Image
          className=" object-cover w-full h-96"
          src={`/../public/images/plants/new-england-aster.jpg`}
          width={1024}
          height={1024}
        ></Image>
        <div className="featuredPlantText  md:block md:absolute md:max-w-sm md:bg-white md:bg-opacity-50 md:bottom-20 md:right-6 md:py-8 px-4 py-4">
          <div className="uppercase flex flex-wrap gap-2 md:gap-0 items-center md:pb-2 ">
            <span className="bg-pink-50  p-2 px-6 md:bg-transparent md:p-0 md:px-0">
              Featured plant:
            </span>
            <div className="md:flex-initial ">the New England Aster</div>
          </div>
          <div class="featuredPlantDescription px-6 p-1 md:p-0 md:text-sm">
            <div>
              A fall-blooming meadow aster with bright purple or pink flowers
              and yellow centers. Its flowers supply abundant nectar for
              late-season bees and butterflies. Its foliage is important for
              many species in their larval stages.
            </div>
          </div>
        </div>
      </div>
      <PlantsLayout />
    </main>
  );
}
