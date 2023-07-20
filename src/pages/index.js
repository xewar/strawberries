import FeaturedPlant from "../components/FeaturedPlant.js";
import SeedsContainer from "@/containers/SeedsContainer.js";
import prisma from "../../lib/prisma.js";

export async function getStaticProps() {
  const plants = await prisma.flower.findMany();
  return {
    props: {
      plants,
    },
  };
}

export default function Home({ plants }) {
  return (
    <main className="flex flex-col font-neue-haas">
      <FeaturedPlant />
      <SeedsContainer plants={plants} />
    </main>
  );
}
