import Image from "next/image";
import { Inter } from "next/font/google";
import PlantsLayout from "./seeds";
import Link from "next/link";
import FeaturedPlant from "./seeds/FeaturedPlant.js";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex flex-col  font-neue-haas ">
      <FeaturedPlant />
      <PlantsLayout />
    </main>
  );
}
