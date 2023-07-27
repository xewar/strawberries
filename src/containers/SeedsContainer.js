import PlantsList from "@/components/PlantsList";
import Toggle from "@/components/Toggle";

const SeedsContainer = ({ plants }) => {
  return (
    <div className="flex flex-col">
      <div className="z-30 sticky flex top-0 justify-end items-center">
        <Toggle />
      </div>
      <PlantsList plants={plants} />
    </div>
  );
};

export default SeedsContainer;
