"use client";
import PlantsList from "@/pages/seeds/PlantsList";
import plantData from "@/pages/seeds/plantData";

function PlantsLayout({ children }) {
  const plants = plantData.wildflowers;

  return (
    <div>
      <PlantsList plants={plants} />
      {children}
    </div>
  );
}

export default PlantsLayout;
