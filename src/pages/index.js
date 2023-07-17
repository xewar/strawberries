import { Inter } from "next/font/google";
import PlantsLayout from "./seeds";
import FeaturedPlant from "../components/FeaturedPlant.js";
import prisma from "./../../lib/prisma";

export async function getStaticProps() {
  const plants = await prisma.flower?.findMany();
  console.log(plants); // Check the retrieved data in the console

  return {
    props: {
      plants,
    },
  };
}

export default function Home({ plants }) {
  return (
    <main className="flex flex-col  font-neue-haas ">
      <FeaturedPlant />
      <PlantsLayout plants={plants} />
    </main>
  );
}
