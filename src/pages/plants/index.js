import PlantsList from "@/pages/plants/PlantsList";
import plantData from "@/pages/plants/plantData";

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
