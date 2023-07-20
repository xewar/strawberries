import SeedsContainer from "@/containers/SeedsContainer";
import React from "react";
import prisma from "@/../../lib/prisma";

export async function getStaticProps() {
  const plants = await prisma.flower.findMany();
  return {
    props: {
      plants,
    },
  };
}

function PlantsLayout({ plants }) {
  return (
    <div>
      <SeedsContainer plants={plants} />
    </div>
  );
}

export default PlantsLayout;
