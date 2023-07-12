"use client";
import PlantsList from "@/pages/seeds/PlantsList";
import plantData from "@/pages/seeds/plantData";
import Toggle from "@/components/Toggle";
import React, { useState } from "react";

function PlantsLayout({ children }) {
  const plants = plantData.wildflowers;

  return (
    <div className="flex flex-col">
      <div className="flex  justify-end p-4 items-center">
        <Toggle />
      </div>
      <PlantsList plants={plants} />
      {children}
    </div>
  );
}

export default PlantsLayout;
