"use client";
import PlantsList from "@/components/PlantsList";
import PlantData from "@/lib/PlantData";
import Toggle from "@/components/Toggle";
import React, { useState } from "react";

function PlantsLayout({ children }) {
  const plants = PlantData.wildflowers;
  console.log(plants);

  return (
    <div className="flex flex-col">
      <div className="flex sticky top-0 justify-end  items-center">
        <Toggle />
      </div>
      <PlantsList plants={plants} />
      {children}
      <div className="z-50 noise fixed bg-opacity-30 top-0 h-full w-full pointer-events-none"></div>
    </div>
  );
}

export default PlantsLayout;
